import React, { useState, useRef } from 'react'
import { Container } from '../../style/Container'
import { Button } from '../../style/Buttons'
import VectorRadio from '../../assets/VectorRadio'
import { useSwipeable } from 'react-swipeable'
import { Text } from '../../style/Text'
import Download from '../../assets/Download'

export default function Slider({ cards, type }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef(null)

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('left'),
    onSwipedRight: () => handleSwipe('right'),
  })

  const handleDotClick = (index) => {
    setCurrentIndex(index)
    scrollToIndex(index)
  }

  const handleSwipe = (direction) => {
    if (direction === 'right') {
      const nextIndex = currentIndex === 0 ? cards.length - 1 : currentIndex - 1
      setCurrentIndex(nextIndex)
      scrollToIndex(nextIndex)
    } else if (direction === 'left') {
      const nextIndex = currentIndex === cards.length - 1 ? 0 : currentIndex + 1
      setCurrentIndex(nextIndex)
      scrollToIndex(nextIndex)
    }
  }

  const scrollToIndex = (index) => {
    const slideWidth = containerRef.current.offsetWidth
    containerRef.current.scrollTo({
      left: slideWidth * index,
      behavior: 'smooth',
    })
  }

  const handleDownload = (url) => {
    const newTab = window.open(url, '_blank')

    if (newTab) {
      setTimeout(() => {
        newTab.location.href = url // Cambia la ubicación de la nueva pestaña al enlace
      }, 500)
    } else {
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', '')
      link.style.display = 'none'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  const handleType = (item, idx) => {
    if (type === 'team') {
      return (
        <Container
          id={`slide-${idx}`}
          minWidth="100%"
          height="100%"
          justify="center"
          align="center"
          flexDirection="column"
          gap="1rem"
          style={{
            scrollSnapAlign: 'start',
            display: 'inline-block',
            width: '100%',
          }}
        >
          <img
            src={item.imageUrl}
            style={{
              width: '10rem',
              height: '10rem',
              borderRadius: '50%',
              border: '3px solid #213E6E',
            }}
          />
          <Container flexDirection="column">
            <Text weight="600" size="1.5rem" color="#213E6E">
              {item.name}
            </Text>
            <Text weight="600" size="1.25rem" color="#8473B4">
              {item.speciality}
            </Text>
          </Container>
        </Container>
      )
    } else if (type === 'magazine') {
      return (
        <Container
          id={`slide-${idx}`}
          minWidth="100%"
          height="100%"
          flexDirection="column"
          gap="1rem"
          justify="center"
          minHeight="60vh"
          align="center"
        >
          <Container
            flexDirection="column"
            width="80%"
            height="90%"
            shadow="0 4px 4px 0 #00000040"
          >
            <Text color="#353535" weight="600">
              {item.title}
            </Text>
            <Container
              bgImg={item.imageUrl}
              bgPosition="center"
              bgRepeat="no-repeat"
              height="70%"
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
              onClick={() => handleDownload(item.archive)}
            >
              Descargar <Download />
            </Button>
          </Container>
        </Container>
      )
    } else {
      return (
        <Container
          id={`slide-${idx}`}
          minWidth="100%"
          height="100%"
          justify="center"
          align="center"
          flexDirection="column"
          gap="1rem"
          style={{
            scrollSnapAlign: 'start',
            display: 'inline-block',
            width: '100%',
          }}
        >
          <Container justify="center">
            <Text size="1.5rem" width="50%">
              {item}
            </Text>
          </Container>
        </Container>
      )
    }
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
        {cards.map((item, idx) => handleType(item, idx))}
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
