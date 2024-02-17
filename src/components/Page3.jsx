import React from 'react'
import { Container } from '../style/Container'
import { Text } from '../style/Text'
import logo from '../assets/logo-redondo.svg'

export default function Page3() {
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
      <Text size="2rem" width="50%">
        Te ayudamos a explorar en las distitas areas de tu vida, objetivos y
        valores para potenciar lo que nos trae el honguito
      </Text>
    </Container>
  )
}
