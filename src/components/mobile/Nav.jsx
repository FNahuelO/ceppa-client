import React, { useRef } from 'react'
import Logo from '../../assets/Logo'
import { Link, useLocation } from 'react-router-dom'
import { Container } from '../../style/Container'
import { Text } from '../../style/Text'

export default function Nav() {
  const navbarRef = useRef()
  const location = useLocation()

  const labels = [
    { label: 'Nosotros', link: 'nosotros' },
    { label: 'Equipo', link: 'equipo' },
    { label: 'Contacto', link: 'contacto' },
    { label: 'Revista DELIA', link: 'revistas' },
  ]

  const handleClick = () => {
    const div = document.getElementById('scroll')
    div.scrollTo({
      top: 0,
      behavior: 'smooth', // Esto hace que el desplazamiento sea suave
    })
  }

  return (
    <Container
      ref={navbarRef}
      position="absolute"
      bg="transparent"
      width="100vw"
      height="10vh"
      justify="center"
      align="center"
      index="22"
      top="1rem"
    >
      <Container gap="2.5rem" width="90%" justify="center" align="center">
        {labels.map((item, idx) => (
          <Link key={idx} to={'/' + item.link} onClick={handleClick}>
            <Text
              weight="500"
              color="white"
              padding="1rem 0"
              onClick={handleClick}
              display={item.link === 'revistas' ? 'inline-block' : ''}
              borderBottom={
                location.pathname === '/' + item.link
                  ? '2px solid white'
                  : 'none'
              }
              responsive={{ fontSize: '.8rem' }}
            >
              {item.label}
            </Text>
          </Link>
        ))}
      </Container>
    </Container>
  )
}
