import React, { useEffect, useState } from 'react'
import { Container } from '../../style/Container'
import { Button } from '../../style/Buttons'
import fondo from '../../assets/fondo-home.png'
import logo from '../../assets/logo-color.svg'
import hojas from '../../assets/hojas-mobile.svg'
import { Text, Ul } from '../../style/Text'
import { Link } from 'react-router-dom'
import Cuadrado from '../../assets/Cuadrado'
import VectorX from '../../assets/VectorX'

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
]

export default function Nosotros() {
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
      minHeight="100lvh"
      bgImg={fondo}
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPosition="center"
      justify="center"
      align="center"
      flexDirection="column"
      overflowY="auto"
      beforeLeft
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
          justify="flex-end"
          align="center"
          minHeight="85vh"
          radius="2rem 2rem 0 0"
          bg="white"
          index="99"
        >
          <Link to="/">
            <Button
              position="absolute"
              top="1rem"
              bg="none"
              right="1rem"
              border="none"
              outline="none"
            >
              <VectorX color="black" />
            </Button>
          </Link>
          <Container
            id="scroll-container"
            flexDirection="column"
            height="calc(80vh - 2rem)" // Ajustar el alto para dejar espacio para el botón y el margen inferior
            width="100vw"
            overflowY="auto" // Habilitar el scroll interno
          >
            <Container
              radius="2rem 2rem 0 0"
              gap="2rem"
              flexDirection="column"
              minHeight="90vh"
              align="center"
              position="relative"
              padding="0"
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
                <Text weight="600" color="#393636" size=".9rem" width="65%">
                  CEPPA es un centro creado por profesionales de la salud
                  mental, con el objetivo de acercar las psicoterapias con
                  psicodélicos de una forma responsable, con experiencia y mucha
                  amorosidad. Tenemos formación en psicoterapias basadas en la
                  evidencia y de la misma forma llevamos a cabo nuestros
                  acompañamientos con psicodélicos. Nuestro objetivo es crear
                  una comunidad para quienes buscan embarcarse en sus procesos
                  psicológicos y espirituales acompañados por estas maravillosas
                  medicinas.
                </Text>
                <Text weight="600" color="#393636" size=".9rem" width="65%">
                  Nuestro protocolo de microdosis consta de 1 sesión de
                  admisión/evaluación y luego de 10 a 12 sesiones más
                  (dependiendo del caso).
                </Text>
              </Container>
              <Container position="absolute" bottom="3rem">
                <img src={logo} alt="Logo" />
              </Container>
            </Container>
            <Container
              gap="2rem"
              flexDirection="column"
              minHeight="80vh"
              align="center"
              position="relative"
              size=".8rem"
              bg="white"
              padding="2rem 0 0 0"
            >
              <Text color="#2F4A71" weight="700" size="1.25rem">
                ¿Que ofrecemos?
              </Text>
              <Container width="75%" flexDirection="column" gap=".5rem">
                <Text
                  color="#545151"
                  weight="500"
                  size="1rem"
                  align="start"
                  margin=".5rem 0"
                >
                  En CEPPA contamos con 2 aréas principales:
                </Text>
                <Container flexDirection="column" gap="1rem" padding="1rem 0">
                  <Text
                    borderBottom="1px solid #545151"
                    size="1rem"
                    weight="600"
                    align="start"
                    width="max-content"
                    color="#545151"
                  >
                    Área asistencial
                  </Text>

                  <Ul
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      margin: '0',
                      fontSize: '.9rem',
                      padding: '0 1rem',
                      fontWeight: '500',
                      color: '#545151',
                    }}
                  >
                    {listAsistencial.map((item, idx) => (
                      <li key={idx} style={{ textAlign: 'start' }}>
                        {item}
                      </li>
                    ))}
                  </Ul>
                </Container>
                <Container flexDirection="column" gap="1rem" padding="1rem 0">
                  <Text
                    borderBottom="1px solid #545151"
                    size="1rem"
                    weight="600"
                    align="start"
                    width="max-content"
                    color="#545151"
                  >
                    Área formativa
                  </Text>

                  <Ul
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      margin: '0',
                      fontSize: '.9rem',
                      padding: '0 1rem',
                      fontWeight: '500',
                      color: '#545151',
                    }}
                  >
                    {listFormativa.map((item, idx) => (
                      <li key={idx} style={{ textAlign: 'start' }}>
                        {item}
                      </li>
                    ))}
                  </Ul>
                </Container>
              </Container>
            </Container>
            <Container
              gap="2rem"
              flexDirection="column"
              minHeight="90vh"
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
                style={{ fontStyle: 'italic' }}
              >
                Psilocibina
              </Text>
              <Container width="75%" flexDirection="column" gap=".5rem">
                <Text
                  color="#2F4A71"
                  weight="700"
                  size=".8rem"
                  align="start"
                  margin=".5rem 0"
                >
                  Nuestro protocolo de micro consta de 1 sesion de admision/
                  evalucaion y luego de 10 a 12 sesiones más (depende el caso)
                </Text>
                <Text color="#2F4A71" weight="700" size=".8rem" align="start">
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
                    padding: '0 ',
                    fontWeight: '500',
                    color: '#2F4A71',
                    textAlign: 'start',
                  }}
                >
                  {listPsilocibina.map((item, idx) => (
                    <li
                      key={idx}
                      style={{ listStyleType: 'none', gap: '.5rem' }}
                    >
                      <Container align={idx === 2 ? 'center' : ''}>
                        <Cuadrado
                          idx={idx === 1}
                          width={idx === 2 ? '15' : ''}
                          height={idx === 2 ? '15' : ''}
                        />
                        {item}
                      </Container>
                    </li>
                  ))}
                </Ul>
                <Text color="#2F4A71" weight="500" size=".8rem" align="start">
                  No es necesario tener Microdosis desde la primera sesión, por
                  lo que podes empezar cuando quieras.
                </Text>
                <Text color="#2F4A71" weight="500" size=".8rem" align="start">
                  Nosotros no comercializamos la médicina ero tenemos
                  cultivadores de confianza para recomendarte.
                </Text>
                <Text color="#2F4A71" weight="500" size=".8rem" align="start">
                  Cualquier duda o consulta estamos a disposición.
                </Text>
              </Container>
            </Container>
            <Container
              gap="1rem"
              flexDirection="column"
              minHeight="90vh"
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
                style={{ fontStyle: 'italic' }}
              >
                Micro Grupal
              </Text>
              <Container width="80%" flexDirection="column" gap="1em">
                <Text
                  color="#2F4A71"
                  weight="700"
                  size=".8rem"
                  align="start"
                  margin=".5rem 0"
                >
                  Si estas con ganas de empezar un proceso con micro y te
                  resuena lo grupal. esta propuesta es para vos.
                </Text>
                <Container
                  flexDirection="column"
                  align="flex-start"
                  gap=".5rem"
                >
                  <Text before color="#2F4A71" size=".9rem" weight="600">
                    ¿En que consiste?
                  </Text>
                  <Text color="#2F4A71" align="start">
                    Son 6 encuentros de 2 hs, online, donde te van a guiar la
                    mejor forma de realizar la toma como tambien se iran
                    explorando aspectos importantes en tu vida que quieras
                    trabajar. Guiado por dos coordinadoras, psicologas del
                    centro, con experiencia en microdosis, terapias contextuales
                    y grupos.
                  </Text>
                </Container>
                <Container
                  flexDirection="column"
                  align="flex-start"
                  gap=".5rem"
                >
                  <Text before color="#2F4A71" size=".9rem" weight="600">
                    ¿Cuando es?
                  </Text>
                  <Container flexDirection="column" gap="1rem">
                    <Text color="#2F4A71" align="start">
                      1 Encuentro semanal por 6 semanas consecutivas.Consultas
                      fechas proximas.
                    </Text>
                    <Text color="#2F4A71" align="start">
                      No incluye la micro, porque no comercializamos
                      psicodelicos, pero en el encuentro las coordinadoras te
                      orientan y recomendaran cultivadoras con quienes
                      trabajamos.
                    </Text>
                    <Text color="#2F4A71" align="start" weight="600">
                      No necesitas tenerlas para el primer encuentro.
                    </Text>
                    <Text color="#2F4A71" align="start" weight="600">
                      Los cupos sin limitados, para garantizar un grupo de
                      confianza, que estimule la confianza e intercambio.
                    </Text>
                    <Text color="#2F4A71" align="start">
                      Cualquier duda o consulta estamos a disposicion.
                    </Text>
                  </Container>
                </Container>
              </Container>
            </Container>
            <Container
              gap="1rem"
              flexDirection="column"
              minHeight="100vh"
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
                style={{ fontStyle: 'italic' }}
                width="80%"
              >
                Tratamiento asistido con Macrodosis
              </Text>
              <Container width="80%" flexDirection="column" gap="1em">
                <Container
                  flexDirection="column"
                  align="flex-start"
                  gap=".5rem"
                >
                  <Text before color="#2F4A71" size=".9rem" weight="600">
                    ¿Como se procede?
                  </Text>
                  <Text color="#2F4A71" align="start">
                    Se realiza una primera session. de admision para evaluar tu
                    motivo de consulta. cuadro actual, antecedentes y revelar
                    informacion importante de tu contexto vital.
                  </Text>
                  <Text color="#2F4A71" align="start">
                    Ahi podes consultar tambien, todas las dudas que tengas del
                    proceso o del tratamiento en si.Es realizada por un
                    profesional de salud mental con experiencia en terapias
                    contextuales y psicodelicos
                  </Text>
                </Container>
                <Container
                  flexDirection="column"
                  align="flex-start"
                  gap=".5rem"
                >
                  <Text before color="#2F4A71" size=".9rem" weight="600">
                    Protocolo completo:
                  </Text>
                  <Container flexDirection="column" gap="1rem">
                    <Text color="#2F4A71" align="start">
                      De estar en condiciones para poder continuar, el protocolo
                      consta de:
                    </Text>
                    <Text color="#2F4A71" align="start">
                      2 sesiones de preparacion de forma online de una duracion
                      de 60 minutos, con un profesional del centro destinado
                      para tu tratamiento.
                    </Text>
                    <Text color="#2F4A71" align="start">
                      2 sesiones de integracion con el mismo profesional que
                      realizaste la preparacion
                    </Text>
                    <Text color="#2F4A71" align="start">
                      No incluye la medicina, ya que no comercializamos con
                      psicodelicos
                    </Text>
                    <Text color="#2F4A71" align="start" weight="600">
                      Para profundizar sobre esta terapia escribinos.
                    </Text>
                    <Text color="#2F4A71" align="start" weight="600">
                      Cualquier duda estamos a disposición
                    </Text>
                  </Container>
                </Container>
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
