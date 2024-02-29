import React from 'react'
import { Container } from '../style/Container'
import { Text } from '../style/Text'
import avatar from '../assets/avatar.svg'
import { Image } from '../style/Input'

export default function Card({
  name,
  title,
  description,
  index,
  hover,
  admin,
  image,
  type,
}) {
  return (
    <Container
      bg="white"
      width="80%"
      radius="1rem"
      justify="flex-start"
      gap="2rem"
      align="center"
      padding="2rem"
      shadow="0 4px 10px 0 #00000040;"
      opacity={index ? '1' : '0.4'}
      hover={
        hover && {
          border: '3px solid #213E6EB5',
        }
      }
      responsive={{ padding: '1rem' }}
    >
      <Container
        flexDirection="column"
        align="center"
        height="100%"
        gap=".5rem"
      >
        <Container>
          <Image
            src={image.data || image}
            alt=""
            width="8rem"
            height="8rem"
            style={{
              borderRadius: '50%',
              objectFit: 'cover',
            }}
            responsive={{ width: '6rem', height: '6rem' }}
            onLoad={(e) => {
              if (e.target.width === e.target.height) {
                e.target.style.objectFit = 'cover'
                e.target.style.objectPosition = 'top'
              }
            }}
          />
        </Container>
        {admin && (
          <Container flexDirection="column" gap=".25rem">
            <Text color="black" weight="500" width="max-content" size=".8rem">
              Tipo de consulta
            </Text>
            <Text
              bg="#8473B4"
              radius="3rem"
              weight="700"
              size=".7rem"
              padding=".25rem 0"
              color="white"
            >
              {type === 'online' ? 'ONLINE' : 'PRESENCIAL'}
            </Text>
          </Container>
        )}
      </Container>
      <hr
        style={{
          border: '1px solid transparent',
          borderImage:
            'linear-gradient(to top, rgba(163, 131, 255, 0), #A383FF, rgba(163, 131, 255, 0)) 1',
          height: '80%',
          margin: '0',
        }}
      />

      <Container flexDirection="column" align="flex-start">
        <Text
          size="1.5rem"
          color="#213E6E"
          weight={admin ? '700' : '500'}
          responsive={{ fontSize: '1rem' }}
        >
          {name || 'Lic. Maximiliano Lofredo'}
        </Text>
        <Text color="black" weight="600" responsive={{ fontSize: '.8rem' }}>
          {title}
        </Text>
        <Text
          color="#4E4E4E"
          align="start"
          size=".8rem"
          responsive={{ fontSize: '.6rem' }}
        >
          {description}
        </Text>
      </Container>
    </Container>
  )
}
