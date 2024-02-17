import React, { useEffect, useState } from 'react'
import { Container } from '../style/Container'
import { Form } from '../style/Forms'
import fondo from '../assets/fondo-home.png'
import { Text } from '../style/Text'
import Card from '../components/Card'
import { useDispatch, useSelector } from 'react-redux'
import { getStaff } from '../redux/actions'

export default function Team() {
  const [cards, setCards] = useState([])
  const dispatch = useDispatch()
  const currentStaff = useSelector((state) => state.data.staff)

  useEffect(() => {
    dispatch(getStaff())
  }, [])

  useEffect(() => {
    setCards(currentStaff)
  }, [currentStaff])

  const middleIndex =
    cards.length % 2 === 0
      ? [cards.length / 2 - 1, cards.length / 2]
      : [Math.floor(cards.length / 2)]
  return (
    <Container
      justify="center"
      align="center"
      bgImg={fondo}
      height="100vh"
      width="100%"
      bgSize="cover"
      bgPosition="center"
      flexDirection="column"
      gap="1rem"
    >
      <Text weight="700" size="1.5rem">
        Nuestro terapeutas
      </Text>
      <Container
        bg="#F0F1F3"
        width="50%"
        height="60%"
        padding="3rem"
        flexDirection="column"
        align="center"
        radius=".5rem"
      >
        <Container
          flexDirection="column"
          width="80%"
          height="90%"
          scrollStyles={true}
          overflowY="auto"
          padding="1rem 0"
          gap="2rem"
          align="center"
        >
          {cards.map((item, index) => (
            <Card
              key={index}
              name={item.name}
              title={item.title}
              description={item.description}
              image={item.image}
              index={true}
              hover={true}
              admin={true}
            />
          ))}
        </Container>
      </Container>
    </Container>
  )
}
