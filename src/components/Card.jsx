import React from 'react'
import { Container } from '../style/Container'
import { Text } from '../style/Text'
import avatar from '../assets/avatar.svg'

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
    >
      <Container flexDirection="column" align="center" height="100%">
        <Container>
          <img
            src={image || avatar}
            alt=""
            style={{
              width: '8rem',
              height: '8rem',
              borderRadius: '50%',
              objectFit: 'cover',
            }}
          />
        </Container>
        {admin && (
          <Container flexDirection="column" gap=".5rem">
            <Text color="black" weight="500" width="max-content">
              Tipo de consulta
            </Text>
            <Text
              bg="#8473B4"
              radius="3rem"
              weight="700"
              size=".8rem"
              padding=".25rem 0"
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
        <Text size="1.5rem" color="#213E6E" weight={admin ? '700' : '500'}>
          {name || 'Lic. Maximiliano Lofredo'}
        </Text>
        <Text color="black" weight="600">
          {title || 'co-director de CEPPA'}
        </Text>
        <Text color="#4E4E4E" align="start" size=".8rem">
          {description || 'co-director de CEPPA'}
        </Text>
      </Container>
    </Container>
  )
}
