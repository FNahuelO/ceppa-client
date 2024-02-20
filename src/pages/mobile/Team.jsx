import React, { useEffect, useState } from 'react'
import { Container } from '../../style/Container'
import fondo from '../../assets/fondo-home.png'
import { Link } from 'react-router-dom'
import { Button } from '../../style/Buttons'
import VectorX from '../../assets/VectorX'
import { useDispatch, useSelector } from 'react-redux'
import { getStaff } from '../../redux/actions'
import Slider from '../../components/mobile/Carousel'

export default function Team() {
  const [cards, setCards] = useState([])
  const dispatch = useDispatch()
  const currentStaff = useSelector((state) => state.data.staff)
  const [isVisible, setIsVisible] = useState(false)

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

  return (
    <Container
      minHeight="100svh" // Use vh instead of lvh
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
          position="fixed" // Position fixed to keep it at the bottom of the viewport
          bottom="0"
          left="0"
          width="100vw"
          flexDirection="column"
          justify="center"
          align="center"
          minHeight="85svh" // Occupy the full height of the viewport
          radius="2rem 2rem 0 0"
          bg="white"
        >
          <Link to="/">
            <Button
              position="absolute"
              top="2rem"
              right="2rem"
              border="none"
              bg="none"
              padding="0"
              index="15"
            >
              <VectorX color="#7A7676" />
            </Button>
          </Link>
          <Container height="80vh" width="100vw">
            <Slider cards={cards} type="team" />
          </Container>
          <Container minHeight="5svh" width="100vw" bg="#213E6E"></Container>
        </Container>
      )}
    </Container>
  )
}
