import React, { useEffect, useState } from 'react'
import { Container } from '../../style/Container'
import fondo from '../../assets/fondo-home.png'
import { useDispatch, useSelector } from 'react-redux'
import { getStaff } from '../../redux/actions'
import Slider from '../../components/mobile/Carousel'
import { Link } from 'react-router-dom'
import { Button } from '../../style/Buttons'
import VectorX from '../../assets/VectorX'

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
          index="89"
        >
          <Container height="80vh" width="100vw" position="relative">
            <Link to="/">
              <Button
                position="absolute"
                top="1.5rem"
                bg="none"
                right="1.5rem"
                padding="0"
                border="none"
                outline="none"
                index="99"
                alt="Cerrar"
              >
                <VectorX color="black" />
              </Button>
            </Link>
            <Slider cards={cards} type="team" />
          </Container>
          <Container minHeight="5vh" width="100vw" bg="#213E6E"></Container>
        </Container>
      )}
    </Container>
  )
}
