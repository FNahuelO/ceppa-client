import React, { useEffect, useState } from 'react'
import { Container } from '../../style/Container'
import fondo from '../../assets/fondo-home.png'
import logo from '../../assets/logo-blanco.svg'
import { Text } from '../../style/Text'
import { Link } from 'react-router-dom'
import { Button } from '../../style/Buttons'
import ChevronRigth2 from '../../assets/ChevronRigth2'
import frame from '../../assets/sol-mobile.svg'
import Footer from '../../components/mobile/Footer'
import Loading from '../../components/Loading'
import whatsapp from '../../assets/WhatsApp.svg'

export default function Home() {
  const [isHovered, setIsHovered] = useState(false)

  const [loading, setLoading] = useState(false)

  const text =
    '¡Hola! Gracias por comunicarte con CEPPA. ¿En qué te podemos ayudar?'

  const saveWithExpiration = (key, value, expirationTimeInHours) => {
    const now = new Date()
    const item = {
      value: value,
      expiration: now.getTime() + expirationTimeInHours * 60 * 60 * 1000, // Convert hours to milliseconds
    }
    localStorage.setItem(key, JSON.stringify(item))
  }

  const getWithExpiration = (key) => {
    const item = localStorage.getItem(key)
    if (!item) {
      return null
    }
    const parsedItem = JSON.parse(item)
    const now = new Date()
    if (now.getTime() > parsedItem.expiration) {
      // The data has expired, remove it and return null
      localStorage.removeItem(key)
      return null
    }
    return parsedItem.value
  }

  useEffect(() => {
    if (getWithExpiration('firstLoading')) {
      setLoading(false)
    } else {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        saveWithExpiration('firstLoading', true, 24)
      }, 3000)
    }
  }, [])

  return loading ? (
    <Loading />
  ) : (
    <>
      <Container
        minHeight="100lvh"
        bgImg={fondo}
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPosition="center"
        justify="center"
        align="center"
        flexDirection="column"
        gap="1rem"
        beforeLeft
      >
        <a
          href={`https://wa.me/+5491139191013?text=${text}`}
          target="_blank"
          rel="noreferrer"
        >
          <Button
            width="4rem"
            height="4rem"
            bg="#26d366"
            radius="50%"
            position="fixed"
            right="1rem"
            bottom="2rem"
            index="55"
            padding="0"
            alt="Whatsapp"
          >
            <img src={whatsapp} alt="Whatsapp" />
          </Button>
        </a>
        <Container gap="1rem" flexDirection="column" align="center" index="5">
          <img src={logo} alt="Logo ceppa" style={{ width: '15rem' }} />
          <Text size=".9rem">¿Querés conocer nuestras propuestas?</Text>
        </Container>
        <Link to="/contacto">
          <Button
            width="100%"
            position="relative"
            border="none"
            padding="1rem 1.5rem"
            outline="none"
            bg="rgba(47, 74, 113, 1)"
            radius="3rem"
            color="white"
            weight="600"
            display="flex"
            align="center"
            justify="space-between"
            gap="1rem"
            hover={{
              boxShadow: '0 4px 4px 0 #00000040',
              color: '#213E6E',
              background: 'white',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            alt="Contactanos"
          >
            Contáctanos
            <ChevronRigth2 color={isHovered ? '#213E6E' : 'white'} />
          </Button>
        </Link>
      </Container>
      <Container
        position="relative"
        flexDirection="column"
        justify="center"
        align="center"
        minHeight="100svh"
        radius="2rem 2rem 0 0"
        bg="linear-gradient(to bottom, #2F4A71, #6F5F9D)"
      >
        <Container
          position="absolute"
          top="5rem"
          right="2rem"
          className="animate__animated animate__fadeInUp"
        >
          <img src={frame} alt="Sol"/>
        </Container>
        <Container
          flexDirection="column"
          gap="1rem"
          color="white !important"
          width="65%"
          align="flex-start"
          transform="translateY(2rem)"
        >
          <Text size="1.25rem" weight="900" width="max-content">
            ¿Como te podemos ayudar?
          </Text>
          <Text size="1rem" align="start">
            En CEPPA tenemos distintas propuestas de acompañamientos, guiadas
            por profesionales de salud mental. Todas se confeccionan con
            psicoterapias basadas en evidencia, y puede ser asistidas por
            psilocibina en distintos formatos
          </Text>
        </Container>
      </Container>
      <Footer />
    </>
  )
}
