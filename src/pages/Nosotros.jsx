import React, { useEffect, useRef, useState } from 'react'
import { Container } from '../style/Container'
import fondo from '../assets/fondo-home.png'
import { Text, Ul } from '../style/Text'
import { Image } from '../style/Input'
import pic from '../assets/pic-1.png'
import psilocibina from '../assets/psilocibina.png'
import logo from '../assets/logo-azul.png'
import Page2 from '../components/Page2'
import Page3 from '../components/Page3'
import Team from '../components/Team'
import RectanguloGris from '../assets/RectanguloGris'
import Esquina from '../assets/Esquina'
import Esquina2 from '../assets/Esquina2'

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

  return (
    <Container width="100vw" flexDirection="column" bg="#1D2F4D" align="center">
      <Container width="98vw" flexDirection="column">
        <Container
          height="105vh"
          width="100%"
          bg="white"
          justify="center"
          gap="10rem"
          align="center"
        >
          <Container
            position="relative"
            width="30%"
            height="70%"
            justify="center"
            align="center"
          >
            <img
              src={pic}
              style={{
                zIndex: '2',
                borderRadius: '1rem',
                height: '90%',
              }}
            />
          </Container>
          <Container flexDirection="column" width="30%" gap="1rem">
            <Text color="#6D6868" size="2rem" weight="600" align="start">
              ¿Quienes somos?
            </Text>
            <Text
              color="#6D6868"
              align="start"
              size="1.25rem"
              responsive={{ fontSize: '1rem' }}
            >
              CEPPA es un centro creado por profesionales de la salud mental,
              con el objetivo de acercar las psicoterapias con psicodélicos de
              una forma responsable, con experiencia y mucha amorosidad. Tenemos
              formación en psicoterapias basadas en la evidencia y de la misma
              forma llevamos a cabo nuestros acompañamientos con psicodélicos.
              Nuestro objetivo es crear una comunidad para quienes buscan
              embarcarse en sus procesos psicológicos y espirituales acompañados
              por estas maravillosas medicinas.
            </Text>
            <Container
              width="80%"
              bg="#5D5081F0"
              height="2rem"
              margin="1rem 0"
            ></Container>
          </Container>
        </Container>
        <Container
          height="100vh"
          width="100%"
          bg="white"
          justify="center"
          gap="3rem"
          align="center"
          position="relative"
        >
          <Container
            flexDirection="column"
            gap="1rem"
            width="30%"
            color="#2F4A71"
            position="relative"
          >
            <Text
              color="#545151"
              size="2rem"
              weight="700"
              align="start"
              responsive={{ fontSize: '1.25rem' }}
            >
              ¿Que ofrecemos?
            </Text>

            <Text
              color="#545151"
              size="1.5rem"
              weight="600"
              align="start"
              responsive={{ fontSize: '1rem' }}
            >
              En CEPPA contamos con 2 aréas principales:
            </Text>
            <Container flexDirection="column" gap="1rem" padding="1rem 0">
              <Text
                borderBottom="1px solid #545151"
                size="1.25rem"
                weight="600"
                align="start"
                width="max-content"
                color="#545151"
                responsive={{ fontSize: '1rem' }}
              >
                Área asistencial
              </Text>

              <Ul
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  margin: '0',
                  fontSize: '1.25rem',
                  padding: '0 1rem',
                  fontWeight: '500',
                  color: '#545151',
                }}
                responsive={{ fontSize: '1rem !important' }}
              >
                {listAsistencial.map((item, idx) => (
                  <li key={idx} style={{ textAlign: 'start' }}>
                    {item}
                  </li>
                ))}
              </Ul>
            </Container>
            <Container flexDirection="column" gap="1rem">
              <Text
                borderBottom="1px solid #545151"
                size="1.25rem"
                weight="600"
                align="start"
                width="max-content"
                color="#545151"
                responsive={{ fontSize: '1rem' }}
              >
                Área formativa
              </Text>

              <Ul
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  margin: '0',
                  fontSize: '1.25rem',
                  padding: '0 1rem',
                  fontWeight: '500',
                  color: '#545151',
                }}
                responsive={{ fontSize: '1rem !important' }}
              >
                {listFormativa.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </Ul>
            </Container>
          </Container>
          <Container>
            <Esquina2 />
          </Container>
        </Container>
        <Container
          height="100vh"
          width="100%"
          bg="white"
          justify="center"
          align="center"
          position="relative"
          flexDirection="column"
          gap="2rem"
          beforeLeft={true}
        >
          <Container
            position="absolute"
            left="-6.6%"
            bottom="5%"
            responsive={{ left: '-7%' }}
          >
            <Image
              src={psilocibina}
              width="80%"
              height="80%"
              responsive={{ width: '60%', height: '60%' }}
            />
          </Container>
          <Container
            flexDirection="column"
            width="35%"
            align="flex-start"
            gap="2rem"
            responsive={{ gap: '1rem', width: '45%' }}
          >
            <Text
              color="#545151"
              weight="500"
              size="1.75rem"
              responsive={{ fontSize: '1.25rem' }}
            >
              Psicoterapia asistida con microdosis
            </Text>
            <Text
              color="#8473B4"
              weight="700"
              size="2rem"
              responsive={{ fontSize: '1.5rem' }}
            >
              Psilocibina
            </Text>
            <Text
              color="#2F4A71"
              weight="500"
              size="1rem"
              align="start"
              responsive={{ fontSize: '.8rem' }}
            >
              Nuestro protocolo de microdosis consta de 1 sesión de
              admisión/evaluación y luego de 10 a 12 sesiones más (dependiendo
              del caso).
            </Text>
            <Text
              color="#2F4A71"
              weight="500"
              size="1rem"
              align="start"
              responsive={{ fontSize: '.8rem' }}
            >
              En las mismas se trabajará tanto la mejor forma posible de la
              toma, como sus objetivos en distintas áreas de tu vida, que van a
              estar potenciados por el honguito.
            </Text>
            <Ul
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                margin: '0',
                padding: '0 1rem',
                fontWeight: '500',
                color: '#2F4A71',
                textAlign: 'start',
              }}
              responsive={{ fontSize: '.8rem !important' }}
            >
              {listPsilocibina.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </Ul>
            <Text color="#2F4A71" weight="500" size="1rem" align="start">
              No es necesario tener Microdosis desde la primera sesión, por lo
              que podes empezar cuando quieras.
            </Text>
            <Text color="#2F4A71" weight="500" size="1rem" align="start">
              Nosotros no comercializamos la médicina ero tenemos cultivadores
              de confianza para recomendarte.
            </Text>
            <Text color="#2F4A71" weight="500" size="1rem" align="start">
              Cualquier duda o consulta estamos a disposición.
            </Text>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}
