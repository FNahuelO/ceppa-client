import React, { useEffect, useState } from 'react'
import { Container } from '../../style/Container'
import fondo from '../../assets/fondo-home.png'
import { useDispatch, useSelector } from 'react-redux'
import { getMagazines } from '../../redux/actions'
import Slider from '../../components/mobile/Carousel'
import { Button } from '../../style/Buttons'
import VectorX from '../../assets/VectorX'
import { Link } from 'react-router-dom'

export default function Revistas() {
  const [array, setArray] = useState([])
  const dispatch = useDispatch()
  const currentArray = useSelector((state) => state.data.revistas)
  const [isVisible, setIsVisible] = useState(false)

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
          <Container height="80vh" width="100vw">
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
            <Slider cards={array} type="magazine" />
          </Container>
        </Container>
      )}
    </Container>
  )
}
