import React from 'react'
import { Container, ContainerLoading } from '../style/Container'
import logo from '../assets/logo-redondo.svg'
import { ClipLoader } from 'react-spinners'

export default function Loading() {
  return (
    <Container
      height="100vh"
      width="100vw"
      bg="linear-gradient(169.83deg, #213E6E 6.63%, #213E6E 19.83%, #213E6E 50.5%, #213E6E 69.09%, #4F2D54 100%)"
      index="55"
    >
      <ContainerLoading>
        <img src={logo} />
      </ContainerLoading>
    </Container>
  )
}
