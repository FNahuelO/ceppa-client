import React, { useRef } from 'react'
import Logo from '../../assets/Logo'
import { Link } from 'react-router-dom'
import { Container } from '../../style/Container'
import { Text } from '../../style/Text'

export default function Nav() {
  const navbarRef = useRef()

  const labels = [
    { label: 'Nosotros', link: 'nosotros' },
    { label: 'Equipo', link: 'equipo' },
    { label: 'Contacto', link: 'contacto' },
    { label: 'Nuestra revista', link: 'revistas' },
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
      {/* <Link to="/" onClick={handleClick}>
        <Logo />
      </Link> */}
      <Container gap="2.5rem">
        {labels.map((item, idx) => (
          <Link key={idx} to={'/' + item.link} onClick={handleClick}>
            <Text
              weight="500"
              color="white"
              onClick={handleClick}
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
