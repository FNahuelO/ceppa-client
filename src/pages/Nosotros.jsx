import React, { useEffect } from 'react'
import { Container } from '../style/Container'
import { Text, Ul } from '../style/Text'
import { Image } from '../style/Input'
import pic from '../assets/pic-1.png'
import psilocibina from '../assets/psilocibina.png'
import micro from '../assets/micro-grupal.png'
import macro from '../assets/macro.png'
import Esquina2 from '../assets/Esquina2'
import Cuadrado from '../assets/Cuadrado'

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
    'Las sesiones las llevan a cabo psicólogos formados en psicodélicos y en terapias contextuales',
    'Son 1 vez por semana con una duración de 50 minutos aprox, de forma individual, para que puedas aprovechar al máximo este proceso',
    'Sesiones de forma online',
  ]

  return (
    <Container width="100vw" flexDirection="column">
      <Container
        height="105vh"
        width="100%"
        bg="white"
        justify="center"
        gap="10rem"
        align="center"
        position="relative"
      >
        <Container
          width=".75rem"
          height="100%"
          bg="#1D2F4D"
          position="absolute"
          left="0"
          index="2"
        ></Container>
        <Container
          width=".75rem"
          height="100%"
          bg="#1D2F4D"
          position="absolute"
          right="0"
          index="2"
        ></Container>
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
            CEPPA es un centro creado por profesionales de la salud mental, con
            el objetivo de acercar las psicoterapias con psicodélicos de una
            forma responsable, con experiencia y mucha amorosidad. Tenemos
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
          width=".75rem"
          height="100%"
          bg="#1D2F4D"
          position="absolute"
          left="0"
          index="2"
        ></Container>
        <Container
          width=".75rem"
          height="100%"
          bg="#1D2F4D"
          position="absolute"
          right="0"
          index="2"
        ></Container>
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
      >
        <Container
          width=".75rem"
          height="100%"
          bg="#1D2F4D"
          position="absolute"
          left="0"
          index="2"
        ></Container>
        <Container
          width=".75rem"
          height="100%"
          bg="#1D2F4D"
          position="absolute"
          right="0"
          index="2"
        ></Container>
        <Text
          color="#2F4A71"
          weight="500"
          size="1.5rem"
          responsive={{ fontSize: '1rem' }}
          borderBottom=".4rem solid #3C2B6D80"
        >
          Psicoterapia asistida con microdosis
        </Text>
        <Container
          position="absolute"
          left="-6%"
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
            color="#8473B4"
            weight="700"
            size="2rem"
            responsive={{ fontSize: '1.5rem' }}
            style={{ fontStyle: 'italic' }}
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
            En las mismas se trabajará tanto la mejor forma posible de la toma,
            como sus objetivos en distintas áreas de tu vida, que van a estar
            potenciados por el honguito.
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
              gap: '1rem',
            }}
            responsive={{ fontSize: '.8rem !important' }}
          >
            {listPsilocibina.map((item, idx) => (
              <li key={idx} style={{ listStyleType: 'none', gap: '.5rem' }}>
                <Container>
                  <Cuadrado idx={idx === 1} />
                  {item}
                </Container>
              </li>
            ))}
          </Ul>
          <Text color="#2F4A71" weight="500" size="1rem" align="start">
            No es necesario tener Microdosis desde la primera sesión, por lo que
            podés empezar cuando quieras.
          </Text>
          <Text color="#2F4A71" weight="500" size="1rem" align="start">
            Nosotros no comercializamos la medicina pero tenemos cultivadores de
            confianza para recomendarte.
          </Text>
          <Text color="#2F4A71" weight="500" size="1rem" align="start">
            Cualquier duda o consulta estamos a disposición.
          </Text>
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
        overflow="hidden"
      >
        <Container
          width=".75rem"
          height="100%"
          bg="#1D2F4D"
          position="absolute"
          left="0"
          index="2"
        ></Container>
        <Container
          width=".75rem"
          height="100%"
          bg="#1D2F4D"
          position="absolute"
          right="0"
          index="2"
        ></Container>

        <Container
          flexDirection="column"
          width="35%"
          align="flex-start"
          gap="2rem"
          responsive={{ gap: '1rem', width: '45%' }}
        >
          <Text
            color="#8473B4"
            weight="700"
            size="2rem"
            responsive={{ fontSize: '1.5rem' }}
            style={{ fontStyle: 'italic' }}
          >
            Micro Grupal
          </Text>
          <Text
            color="#2F4A71"
            weight="500"
            size="1rem"
            align="start"
            responsive={{ fontSize: '.8rem' }}
          >
            Si estas con ganas de empezar un proceso con micro y te resuena lo
            grupal. esta propuesta es para vos.
          </Text>
          <Container flexDirection="column" align="flex-start" gap="1rem">
            <Text before color="#2F4A71" weight="700">
              ¿En qué consiste?
            </Text>
            <Text color="#2F4A71" align="start">
              Son 6 encuentros de 2 hs, online, donde te van a guiar la mejor
              forma de realizar la toma como también se irán explorando aspectos
              importantes en tu vida que quieras trabajar. Guiado por dos
              coordinadoras, psicólogas del centro, con experiencia en
              microdosis, terapias contextuales y grupos.
            </Text>
          </Container>
          <Container flexDirection="column" align="flex-start" gap="1rem">
            <Text before color="#2F4A71" weight="700">
              ¿Cuándo es?
            </Text>
            <Container flexDirection="column" gap="1rem">
              <Text color="#2F4A71" align="start">
                1 encuentro semanal por 6 semanas consecutivas. Consultas fechas
                próximas.
              </Text>
              <Text color="#2F4A71" align="start">
                No incluye la micro, porque no comercializamos psicodélicos,
                pero en el encuentro las coordinadoras te orientan y
                recomendaran cultivadoras con quienes trabajamos.
              </Text>
              <Text color="#2F4A71" align="start" weight="600">
                No necesitas tenerlas para el primer encuentro.
              </Text>
              <Text color="#2F4A71" align="start" weight="600">
                {' '}
                Los cupos sin limitados, para garantizar un grupo de confianza,
                que estimule la confianza e intercambio.
              </Text>
              <Text color="#2F4A71" align="start">
                Cualquier duda o consulta estamos a disposicion.
              </Text>
            </Container>
          </Container>
        </Container>
        <Container
          position="absolute"
          right="-6%"
          bottom="5%"
          justify="flex-end"
          responsive={{ right: '-7%' }}
        >
          <Image
            src={micro}
            width="80%"
            height="80%"
            responsive={{ width: '60%', height: '60%' }}
          />
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
      >
        <Container
          width=".75rem"
          height="100%"
          bg="#1D2F4D"
          position="absolute"
          left="0"
          index="2"
        ></Container>
        <Container
          width=".75rem"
          height="100%"
          bg="#1D2F4D"
          position="absolute"
          right="0"
          index="2"
        ></Container>

        <Container
          position="absolute"
          left="-5%"
          bottom="5%"
          responsive={{ left: '-7%' }}
        >
          <Image
            src={macro}
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
            color="#8473B4"
            weight="700"
            size="2rem"
            responsive={{ fontSize: '1.5rem' }}
            style={{ fontStyle: 'italic' }}
          >
            Tratamiento asistido con Macrodosis
          </Text>

          <Container flexDirection="column" align="flex-start" gap="1rem">
            <Text before color="#2F4A71" weight="700">
              ¿Como se procede?
            </Text>
            <Text color="#2F4A71" align="start">
              Se realiza una primera sesión de admisión para evaluar tu motivo
              de consulta. cuadro actual, antecedentes y revelar información
              importante de tu contexto vital.
            </Text>
            <Text color="#2F4A71" align="start">
              Ahí podés consultar también, todas las dudas que tengas del
              proceso o del tratamiento en sí. Es realizada por un profesional
              de salud mental con experiencia en terapias contextuales y
              psicodélicos
            </Text>
          </Container>
          <Container flexDirection="column" align="flex-start" gap="1rem">
            <Text before color="#2F4A71" weight="700">
              Protocolo completo:
            </Text>
            <Container flexDirection="column" gap="1rem">
              <Text color="#2F4A71" align="start">
                De estar en condiciones para poder continuar, el protocolo
                consta de: 2 sesiones de preparación de forma online de una
                duración de 60 minutos, con un profesional del centro destinado
                para tu tratamiento.2 sesiones de integración con el mismo
                profesional que realizaste la preparación
              </Text>

              <Text color="#2F4A71" align="start" weight="600">
                No incluye la medicina, ya que no comercializamos con
                psicodélicos
              </Text>
              <Text color="#2F4A71" align="start">
                Para profundizar sobre esta terapia escribinos.
              </Text>
              <Text color="#2F4A71" align="start">
                Cualquier duda estamos a disposición
              </Text>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}
