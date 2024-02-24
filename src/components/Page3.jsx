import React, { useEffect } from 'react'
import { Container } from '../style/Container'
import logo from '../assets/logo-redondo.svg'
import Slider from './mobile/Carousel'
import { useDispatch, useSelector } from 'react-redux'
import { getTexts } from '../redux/actions'

export default function Page3() {
  const dispatch = useDispatch()
  const texts = useSelector((state) => state.data.texts)

  useEffect(() => {
    dispatch(getTexts())
  }, [])
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
