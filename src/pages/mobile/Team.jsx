import React, { useEffect, useState } from 'react'
import { Container } from '../../style/Container'
import fondo from '../../assets/fondo-home.png'
import { useDispatch, useSelector } from 'react-redux'
import { getStaff } from '../../redux/actions'
import Slider from '../../components/mobile/Carousel'
import { useSwipeable } from 'react-swipeable'
import { Text } from '../../style/Text'

export default function Team() {
  const [cards, setCards] = useState([])
  const dispatch = useDispatch()
  const currentStaff = useSelector((state) => state.data.staff)
  const [isVisible, setIsVisible] = useState(false)
  const [containerY, setContainerY] = useState(0)

  useEffect(() => {
    dispatch(getStaff())
  }, [])

  useEffect(() => {
    setCards(currentStaff)
  }, [currentStaff])

  useEffect(() => {
    // Show the container after a short delay to allow the page to render first
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const handlers = useSwipeable({
    onSwiping: (eventData) => handleSwipe(eventData), // Use onSwiping instead of onSwipedUp and onSwipedDown
  })

  const handleSwipe = (eventData) => {
    const { deltaY } = eventData
    if (deltaY > 0) {
      setContainerY((prevY) => prevY + deltaY)
      window.location.href = '/'
    }
  }

  return (
    <Container
      minHeight="100vh"
      bgImg={fondo}
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPosition="center"
      justify="center"
      align="center"
      flexDirection="column"
      gap="1rem"
      position="relative"
      beforeLeft
    >
      {isVisible && (
        <Container
          animation={true}
          position="fixed"
          bottom="0"
          left="0"
          width="100vw"
          flexDirection="column"
          justify="center"
          align="center"
          minHeight="80vh"
          radius="2rem 2rem 0 0"
          bg="white"
          index="99"
          style={{ transform: `translateY(${containerY}px)` }} // Dynamic container position
          {...handlers} // Spread the swipe handlers to the Container component
        >
          <Container height="80vh" width="100vw" position="relative">
            <Text
              position="absolute"
              top="1.5rem"
              width="15%"
              left="50%"
              transform="translateX(-50%)"
              border="2px solid #6D6868"
            ></Text>
            <Slider cards={cards} type="team" />
          </Container>
          <Container minHeight="5vh" width="100vw" bg="#213E6E"></Container>
        </Container>
      )}
    </Container>
  )
}
