import React, { useEffect, useRef, useState } from 'react'
import { Container } from '../style/Container'
import fondo from '../assets/fondo-home.png'
import { Text } from '../style/Text'
import { Button } from '../style/Buttons'
import logo from '../assets/logo-home.png'
import Page2 from '../components/Page2'
import Page3 from '../components/Page3'
import Team from '../components/Team'
import ArrowRight from '../assets/ArrowRight'
import { Link } from 'react-router-dom'

export default function Home() {
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
      >
        <img src={logo} alt="Logo ceppa" style={{ transform: 'scale(1.3)' }} />
        <Container flexDirection="column" width="20%" gap="1rem">
          <Text color="white" size="1.5rem" align="start">
            ¿Estas buscando acompañamiento con micro?
          </Text>
          <Link to="/contacto">
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
              after={true}
              hover={{
                boxShadow: '0 4px 4px 0 #00000040',
                color: '#213E6E',
                background: 'white',
              }}
            >
              Contactanos
            </Button>
          </Link>
        </Container>
      </Container>
      <Page2 />
      <Team />
      <Page3 />
    </Container>
  )
}