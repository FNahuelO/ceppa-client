import React, { useEffect, useState } from 'react'
import { Container } from '../../style/Container'
import fondo from '../../assets/fondo-home.png'
import { useDispatch, useSelector } from 'react-redux'
import { getMagazines } from '../../redux/actions'
import Slider from '../../components/mobile/Carousel'
import { useSwipeable } from 'react-swipeable'
import { Text } from '../../style/Text'

export default function Revistas() {
  const [array, setArray] = useState([])
  const [isVisible, setIsVisible] = useState(false)

  const dispatch = useDispatch()
  const currentArray = useSelector((state) => state.data.revistas)

  useEffect(() => {
    dispatch(getMagazines())
  }, [])

  useEffect(() => {
    setArray(currentArray)
  }, [currentArray])
  useEffect(() => {
    // Show the container after a short delay to allow the page to render first
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const handlers = useSwipeable({
    onSwipedDown: () => handleSwipeUp(), // Add onSwipedUp handler
  })

  const handleSwipeUp = () => {
    window.location.href = '/'
  }

  return (
    <Container
      minHeight="100lvh" // Use vh instead of lvh
      bgImg={fondo}
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPosition="center"
      justify="center"
      align="center"
      flexDirection="column"
      gap="1rem"
      position="relative"
    >
      {/* Use conditional rendering to show the container */}
      {isVisible && (
        <Container
          animation={true} // Add position relative to contain absolutely positioned element
          className="slide-in"
          position="fixed" // Position fixed to keep it at the bottom of the viewport
          bottom="0"
          left="0"
          width="100vw"
          flexDirection="column"
          justify="center"
          align="center"
          minHeight="80svh" // Occupy the full height of the viewport
          radius="2rem 2rem 0 0"
          bg="white"
          index="99"
          {...handlers}
        >
          <Container height="80vh" width="100vw">
            <Text
              position="absolute"
              top="1.5rem"
              width="15%"
              left="50%"
              transform="translateX(-50%)"
              border="2px solid #6D6868"
            ></Text>
            <Slider cards={array} type="magazine" />
          </Container>
        </Container>
      )}
    </Container>
  )
}
