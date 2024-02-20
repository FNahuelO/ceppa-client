import React, { useEffect, useState } from 'react'
import { Container } from '../../style/Container'
import fondo from '../../assets/fondo-home.png'
import logo from '../../assets/logo-color.svg'
import hojas from '../../assets/hojas-mobile.svg'
import { Hr, Text, Ul } from '../../style/Text'
import { Button } from '../../style/Buttons'
import { Link } from 'react-router-dom'
import VectorX from '../../assets/VectorX'

export default function Nosotros() {
  const listAsistencial = [
    'Tratamiento individual con micro',
    'Tratamiento grupal con micro',
    'Sesiones de preparación e integración con macro',
    'Psicoterapia contextual',
    'Terapia de pareja',
    'Terapia sexual / sexualidad consciente',
  ]

  const listFormativa = ['Clases', 'Talleres', 'Supervisiones / asesoramiento']

  const listPsilocibina = [
    'Las sesiones las llevan a cabo psicologos formados en psicodelicos y en terapias contextuales',
    'Son 1 vez por semana con una duracion de 50 minutos aprox, de forma individual, para que puedas aprovechar al maximo este proceso',
    'Sesiones de forma online',
    'Los honorarios de cada sesión son de $10.000',
  ]

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show the container after a short delay to allow the page to render first
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Container
      minHeight="100svh"
      bgImg={fondo}
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPosition="center"
      justify="center"
      align="center"
      flexDirection="column"
      overflowY="auto"
    >
      {/* Use conditional rendering to show the container */}
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
          <Container
            flexDirection="column"
            height="calc(80vh - 3rem)" // Ajustar el alto para dejar espacio para el botón y el margen inferior
            width="100vw"
            overflowY="auto" // Habilitar el scroll interno
          >
            <Container
              radius="2rem 2rem 0 0"
              gap="2rem"
              flexDirection="column"
              minHeight="80vh"
              align="center"
              position="relative"
              padding="4rem 0 0 0"
              bg="white"
            >
              <Text
                color="#2F4A71"
                weight="500"
                size="1.25rem"
                borderBottom="3px solid #8473B4"
                textShadow="0 4px 4px #00000040"
              >
                ¿Quienes somos?
              </Text>
              <Container
                gap="1rem"
                textAlign="start"
                align="center"
                flexDirection="column"
              >
                <Text weight="600" color="#393636" width="65%">
                  CEPPA es un centro creado por profesionales de la salud
                  mental, con el objetivo de acercar las psicoterapias con
                  psicodélic0s de una forma responsable, con experiencia y mucha
                  amorosidad. Tenemos formación en psicoterapias basadas en la
                  evidencia y de la misma forma llevamos a cabo nuestros
                  acompañamientos con psicodélicos.
                </Text>
                <Text weight="600" color="#393636" width="65%">
                  Nuestro objetivo es crear una comunidad para quienes buscan
                  embarcarse en sus procesos psicológicos y espirituales
                  acompañados por estas maravillosas medicinas.
                </Text>
              </Container>
              <Container position="absolute" bottom="1rem">
                <img src={logo} alt="Logo" />
              </Container>
              <Hr
                border="2px solid #8473B4"
                width="65%"
                margin="0"
                position="absolute"
                bottom="0"
              />
            </Container>
            <Container
              gap="2rem"
              flexDirection="column"
              minHeight="115vh"
              align="center"
              position="relative"
              size=".8rem"
              bg="white"
              padding="2rem 0 0 0"
            >
              <Text
                color="#8473B4"
                weight="700"
                size="1.25rem"
                textShadow="0 4px 4px #00000040"
              >
                Psilocibina
              </Text>
              <Container width="65%" flexDirection="column" gap=".5rem">
                <Text color="#393636" weight="500" size="1rem" align="start">
                  Nuestro protocolo de micro consta de 1 sesion de admision/
                  evalucaion y luego de 10 a 12 sesiones más (depende el caso)
                </Text>
                <Text color="#393636" weight="500" size="1rem" align="start">
                  En las mismas se trabajará tanto la mejor forma posible de la
                  toma, como sus objetivos en distintas áreas de tu vida, que
                  van a estar potenciados por el honguito.
                </Text>
                <Ul
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    margin: '0',
                    padding: '0 1rem',
                    fontWeight: '500',
                    color: '#393636',
                    textAlign: 'start',
                  }}
                >
                  {listPsilocibina.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </Ul>
                <Text color="#393636" weight="500" size="1rem" align="start">
                  No es necesario tener Microdosis desde la primera sesión, por
                  lo que podes empezar cuando quieras.
                </Text>
                <Text color="#393636" weight="500" size="1rem" align="start">
                  Nosotros no comercializamos la médicina ero tenemos
                  cultivadores de confianza para recomendarte.
                </Text>
                <Text color="#393636" weight="500" size="1rem" align="start">
                  Cualquier duda o consulta estamos a disposición.
                </Text>
              </Container>
              <Container position="absolute" bottom="0" right="0">
                <img src={hojas} alt="Hojas" />
              </Container>
            </Container>
          </Container>
        </Container>
      )}
    </Container>
  )
}
