import React from 'react'
import { Container } from '../style/Container'
import { Text } from '../style/Text'
import logo from '../assets/logo-redondo.svg'
import Slider from './mobile/Carousel'

export default function Page3() {
  const texts = [
    'Te ayudamos a explorar en las distitas areas de tu vida, objetivos y valores para potenciar lo que nos trae el honguito',
    'Te ayudamos a explorar en las distitas areas de tu vida, objetivos y valores para potenciar lo que nos trae el honguito',
    'Te ayudamos a explorar en las distitas areas de tu vida, objetivos y valores para potenciar lo que nos trae el honguito',
  ]
  return (
    <Container
      position="relative"
      flexDirection="column"
      justify="center"
      align="center"
      height="90vh"
      bg="linear-gradient(to top, #2F4A71, #6F5F9D)"
      color="white"
      gap="2rem"
    >
      <img src={logo} alt="CEPPA-Logo" />
      <Slider cards={texts} type="text" />
    </Container>
  )
}
