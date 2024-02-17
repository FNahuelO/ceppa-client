import React, { useEffect, useRef, useState } from 'react'
import { Container } from '../style/Container'
import { Text } from '../style/Text'
import Logo from '../assets/Logo'
import { Link } from 'react-router-dom'

export default function Nav({ admin }) {
  const navbarRef = useRef()
  const [isPassedNavbar, setIsPassedNavbar] = useState(false)
  const [position, setPosition] = useState('initial')

  useEffect(() => {
    const scrollDivRef = document.getElementById('scroll')

    const handleScroll = () => {
      if (scrollDivRef.scrollTop <= 0) {
        setPosition('initial')
      } else {
        setPosition('fixed')
      }
    }

    scrollDivRef.addEventListener('scroll', handleScroll)

    return () => {
      scrollDivRef.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (isPassedNavbar) {
      setPosition('fixed')
    }
  }, [isPassedNavbar])
  const labels = [
    { label: 'Quienes somos', link: 'quienes-somos' },
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
      bg="white"
      width={admin ? '98%' : '95%'}
      padding="1rem 2.5rem"
      height="5vh"
      justify="space-between"
      align="center"
      position={admin ? '' : 'absolute'}
      shadow={'0 4px 4px #00000040'}
      index="22"
    >
      <Link to={admin ? '/admin' : '/'} onClick={handleClick}>
        <Logo />
      </Link>
      {!admin && (
        <Container gap="5rem">
          {labels.map((item, idx) => (
            <Link key={idx} to={'/' + item.link} onClick={handleClick}>
              <Text
                weight="500"
                color="rgba(47, 74, 113, 1)"
                onClick={handleClick}
              >
                {item.label}
              </Text>
            </Link>
          ))}
        </Container>
      )}
    </Container>
  )
}
