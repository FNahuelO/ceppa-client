import React, { useEffect, useState } from 'react'
import { Container } from '../style/Container'
import { Text } from '../style/Text'
import logo from '../assets/logo-redondo.svg'
import Card from './Card'
import Arrow from '../assets/Arrow'
import { Button } from '../style/Buttons'
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

  const handleArrowClick = (direction) => {
    setCards((prevOrder) => {
      const newOrder = [...prevOrder]

      if (direction === 'up') {
        // Mueve la última card al principio
        const lastCard = newOrder.pop()
        newOrder.unshift(lastCard)
      } else if (direction === 'down') {
        // Mueve la primera card al final
        const firstCard = newOrder.shift()
        newOrder.push(firstCard)
      }

      return newOrder
    })
  }

  const middleIndex =
    cards.length % 2 === 0
      ? [cards.length / 2 - 1, cards.length / 2]
      : [Math.floor(cards.length / 2)]
  return (
    <Container
      justify="space-evenly"
      align="center"
      height="100vh"
      bg="white"
      maxHeight="40rem"
    >
      <Container
        flexDirection="column"
        gap="1rem"
        width="20%"
        align="flex-start"
      >
        <Text size="2rem" weight="600" color="#8473B4">
          Equipo
        </Text>
        <Container flexDirection="column" gap="3rem">
          <Text size="1.2rem" color="#626262" weight="500" align="start">
            Tenemos formación en psicoterapias basadas en la evidencia y de la
            misma forma llevamos a cabo nuestros acompañamientos con
            psicodélicos.
          </Text>
          <Text size="1.2rem" color="#626262" weight="500" align="start">
            Nuestro objetivo es crear una comunidad para quienes buscan
            embarcarse en sus procesos psicológicos y espirituales acompañados
            por estas maravillosas medicinas.
          </Text>
        </Container>
      </Container>
      <Container flexDirection="column" gap="2rem" align="center" width="40%">
        <Text color="#213E6E" weight="500" borderBottom=".5px solid #213E6E66">
          Conoce nuestro equipo de profecionales
        </Text>
        <Container
          flexDirection="column"
          gap="2rem"
          position="relative"
          padding="0 3rem"
          width="80%"
        >
          {cards.map((item, index) => (
            <Card
              key={index}
              name={item.name}
              image={item.image}
              title={item.title}
              index={middleIndex.includes(index)}
            />
          ))}
          <Container
            flexDirection="column"
            gap="2rem"
            position="absolute"
            right="0"
            top="50%"
          >
            <Button
              border="none"
              outline="none"
              bg="none"
              padding="0"
              onClick={() => handleArrowClick('up')}
            >
              <Arrow />
            </Button>
            <Button
              border="none"
              outline="none"
              bg="none"
              padding="0"
              onClick={() => handleArrowClick('down')}
            >
              <Arrow direction={'bottom'} />
            </Button>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}
