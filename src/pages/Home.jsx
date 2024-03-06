import React, { useEffect, useRef, useState } from 'react'
import { Container } from '../style/Container'
import fondo from '../assets/fondo-home.png'
import whatsapp from '../assets/WhatsApp.svg'
import { Text } from '../style/Text'
import { Button } from '../style/Buttons'
import logo from '../assets/logo-home.png'
import Page2 from '../components/Page2'
import Page3 from '../components/Page3'
import Team from '../components/Team'
import { Link } from 'react-router-dom'
import ChevronRigth2 from '../assets/ChevronRigth2'

export default function Home() {
  const [isHovered, setIsHovered] = useState(false)
  const text =
    '¡Hola! Gracias por comunicarte con CEPPA. ¿En qué te podemos ayudar?'

  return (
    <Container width="100vw" flexDirection="column">
      <Container
        bgImg={fondo}
        height="105vh"
        width="100%"
        bgSize="cover"
        bgPosition="center"
        justify="space-evenly"
        align="center"
        beforeLeft={true}
      >
        <img src={logo} alt="Logo ceppa" style={{ transform: 'scale(1.1)' }} />
        <Container flexDirection="column" index="5" gap="1rem">
          <Text
            color="white"
            size="1.5rem"
            align="start"
            responsive={{ fontSize: '1.25rem' }}
          >
            ¿Querés conocer nuestras propuestas?
          </Text>
          <Link to="/contacto" style={{ width: '80%' }}>
            <Button
              width="100%"
              position="relative"
              border="none"
              padding="1rem 2.5rem"
              outline="none"
              bg="rgba(47, 74, 113, 1)"
              radius=".5rem"
              color="white"
              weight="600"
              display="flex"
              align="center"
              justify="space-between"
              gap="2rem"
              hover={{
                boxShadow: '0 4px 4px 0 #00000040',
                color: '#213E6E',
                background: 'white',
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Contáctanos
              <ChevronRigth2 color={isHovered ? '#213E6E' : 'white'} />
            </Button>
          </Link>
        </Container>
      </Container>
      <Page2 />
      <Team />
      <Page3 />
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
          position="absolute"
          right="6rem"
          bottom="4rem"
          index="55"
          padding="0"
        >
          <img src={whatsapp} />
        </Button>
      </a>
    </Container>
  )
}
