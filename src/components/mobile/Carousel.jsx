import React, { useState, useRef, useEffect } from 'react'
import { Container } from '../../style/Container'
import { Button } from '../../style/Buttons'
import VectorRadio from '../../assets/VectorRadio'
import { useSwipeable } from 'react-swipeable'
import { Text } from '../../style/Text'
import Download from '../../assets/Download'
import ReactGA from 'react-ga4'

export default function Slider({ cards, type }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef(null)
  const [autoPlayInterval, setAutoPlayInterval] = useState(null)

  const handleSwipe = (direction) => {
    const nextIndex =
      direction === 'left'
        ? (currentIndex + 1) % cards.length
        : (currentIndex - 1 + cards.length) % cards.length
    setCurrentIndex(nextIndex)
    scrollToIndex(nextIndex)
  }

  const scrollToIndex = (index) => {
    const slideWidth = containerRef.current.offsetWidth
    containerRef.current.scrollTo({
      left: slideWidth * index,
      behavior: 'smooth',
    })
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('left'),
    onSwipedRight: () => handleSwipe('right'),
  })

  const handleDotClick = (index) => {
    setCurrentIndex(index)
    scrollToIndex(index)
  }

  const startAutoPlay = () => {
    setAutoPlayInterval(
      setInterval(() => {
        const nextIndex = (currentIndex + 1) % cards.length
        setCurrentIndex(nextIndex)
        scrollToIndex(nextIndex)
      }, 3000), // Cambia este valor para ajustar la velocidad de reproducción automática
    )
  }

  const stopAutoPlay = () => {
    clearInterval(autoPlayInterval)
  }

  useEffect(() => {
    if (type === 'text') {
      startAutoPlay()
      return () => stopAutoPlay()
    }
  }, [currentIndex, type])

  const handleDownload = (item) => {
    const newTab = window.open(item.archive, '_blank')
    ReactGA.event({
      category: 'file_dowload',
      action: item.name,
      label: item.name,
    })

    if (newTab) {
      setTimeout(() => {
        newTab.location.href = item.archive // Cambia la ubicación de la nueva pestaña al enlace
      }, 500)
    } else {
      const link = document.createElement('a')
      link.href = item.archive
      link.setAttribute('download', '')
      link.style.display = 'none'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  const renderCard = (item, idx) => {
    return (
      <Container
        key={idx}
        id={`slide-${idx}`}
        minWidth="100%"
        height="100%"
        justify="center"
        align="center"
        flexDirection="column"
        gap="1rem"
        minHeight={type === 'magazine' ? '60vh' : ''}
        style={{
          scrollSnapAlign: 'start',
          display: 'inline-block',
          width: '100%',
        }}
      >
        {type === 'team' && (
          <>
            <img
              src={item.imageUrl}
              style={{
                width: '10rem',
                height: '10rem',
                borderRadius: '50%',
                border: '3px solid #213E6E',
              }}
              onLoad={(e) => {
                if (e.target.width === e.target.height) {
                  e.target.style.objectFit = 'cover'
                  e.target.style.objectPosition = 'top'
                }
              }}
              alt={`slide-${idx}`}
            />
            <Container flexDirection="column">
              <Text weight="600" size="1.5rem" color="#213E6E">
                {item.name}
              </Text>
              <Text weight="600" size="1.25rem" color="#8473B4">
                {item.speciality}
              </Text>
              <Text color="black" width="75%" size=".8rem" margin="0 auto">
                {item.description}
              </Text>
            </Container>
          </>
        )}
        {type === 'magazine' && (
          <>
            <Container
              flexDirection="column"
              width="70%"
              height="95%"
              shadow="0 4px 4px 0 #00000040"
            >
              <Text color="#353535" weight="600" padding=".5rem 0">
                {item.title}
              </Text>
              <Container
                bgImg={item.imageUrl}
                bgPosition="center"
                bgRepeat="no-repeat"
                bgSize="contain"
                height="75%"
              ></Container>
              <Button
                width="max-content"
                bg="#2F4A71"
                outline="none"
                margin="auto"
                border="none"
                radius="3rem"
                display="flex"
                align="center"
                gap=".5rem"
                color="white"
                onClick={() => handleDownload(item)}
              >
                Descargar <Download />
              </Button>
            </Container>
          </>
        )}
        {type !== 'team' && type !== 'magazine' && (
          <>
            <Container justify="center">
              <Text size="1.5rem" width="50%">
                {item.label}
              </Text>
            </Container>
          </>
        )}
      </Container>
    )
  }

  return (
    <Container
      position="relative"
      width="100%"
      minHeight={type === 'text' ? '20%' : '90%'}
      flexDirection="column"
      justify={
        type === 'team'
          ? 'space-evenly'
          : type === 'text'
          ? 'space-between'
          : 'center'
      }
      gap={type === 'team' ? '' : '.5rem'}
      {...handlers}
    >
      <Container
        ref={containerRef}
        overflow="hidden"
        align="center"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {cards.map(renderCard)}
      </Container>
      <Container justify="center" gap=".5rem">
        {cards.map((_slide, idx) => (
          <Button
            key={idx}
            size=".7rem"
            onClick={() => handleDotClick(idx)}
            border="none"
            bg="transparent"
            cursor="pointer"
            padding="0"
          >
            <VectorRadio
              width={8}
              height={8}
              color={
                currentIndex === idx
                  ? type === 'text'
                    ? '#F8F9FD'
                    : '#0055FF'
                  : type === 'text'
                  ? '#FFFFFF66'
                  : '#0055FF42'
              }
            />
          </Button>
        ))}
      </Container>
    </Container>
  )
}
