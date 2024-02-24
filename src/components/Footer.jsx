import React from 'react'
import { Container } from '../style/Container'
import image from '../assets/ceppa_footer.png'
import { Text } from '../style/Text'
import { Link } from 'react-router-dom'
import Instagram from '../assets/Instagram'
import Facebook from '../assets/Facebook'
import whatapp from '../assets/whatsapp.svg'
import { Button } from '../style/Buttons'

export default function Footer() {
  const labels = [
    { label: 'Nosotros', link: 'nosotros' },
    { label: 'Equipo', link: 'equipo' },
    { label: 'Contacto', link: 'contacto' },
    { label: 'Revista DELIA', link: 'revistas' },
  ]

  const icons = [
    { icon: <img src={whatapp} /> },
    {
      icon: <Instagram />,
      link: 'https://www.instagram.com/ceppa.comunidad/?hl=es',
    },
    {
      icon: <Facebook />,
      link: 'https://www.facebook.com/profile.php?id=61551746807277',
    },
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
      position="relative"
      justify="space-around"
      align="center"
      bg="white"
      padding="8rem 3rem"
    >
      <Container flexDirection="column" gap="1rem">
        <img src={image} alt="ceppa_footer" />
        <Text color="rgba(47, 74, 113, 1)">www.ceppa.com.ar</Text>
      </Container>
      <Container flexDirection="column" gap="2rem" align="flex-end">
        {labels.map((item, idx) => (
          <Link key={idx} to={'/' + item.link} onClick={handleClick}>
            <Text
              key={idx}
              color="rgba(47, 74, 113, 1)"
              hover={{
                fontWeight: '600',
                textShadow: '0 4px 4px #00000040',
                transform: 'scale(1.5)',
              }}
            >
              {item.label}
            </Text>
          </Link>
        ))}
      </Container>
      <Container position="absolute" bottom="5%" margin="0 auto">
        {icons.map((item, idx) =>
          item.link ? (
            <Link
              key={idx}
              to={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                bg="none"
                border="none"
                hover={{ transform: 'scale(1.2)' }}
              >
                {item.icon}
              </Button>
            </Link>
          ) : (
            <Button
              key={idx}
              bg="none"
              border="none"
              hover={{ transform: 'scale(1.2)' }}
            >
              {item.icon}
            </Button>
          ),
        )}
      </Container>
    </Container>
  )
}
