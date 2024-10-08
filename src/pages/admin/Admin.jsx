import React from 'react'
import { Container } from '../../style/Container'
import Nav from '../../components/Nav'
import fondo from '../../assets/fondo-admin.png'
import logo from '../../assets/logo-redondo.svg'
import { Text } from '../../style/Text'
import { Button } from '../../style/Buttons'
import { Link } from 'react-router-dom'
import ManageTeam from '../../assets/ManageTeam'
import ManageMagazine from '../../assets/ManageMagazine'
import VectorEstadisticas from '../../assets/VectorEstadisticas'
import ChevronRight from '../../assets/ChevronRight'
import Login from './Login'
import Logout from '../../assets/Logout'
import ManagaText from '../../assets/ManagaText'

export default function Admin({ children }) {
  const links = [
    { title: 'Gestionar equipo', link: 'manage-team', icon: <ManageTeam /> },
    {
      title: 'Gestionar revistas',
      link: 'manage-magazine',
      icon: <ManageMagazine />,
    },
    {
      title: 'Gestionar frases',
      link: 'manage-texts',
      icon: <ManagaText />,
    },
    {
      title: 'Estadisticas',
      icon: <VectorEstadisticas />,
      href: 'https://analytics.google.com/analytics/web/#/p428682491/realtime/overview?params=_u..nav%3Dmaui',
    },
  ]

  const userStorage = sessionStorage.getItem('user')
  const user = JSON.parse(userStorage)

  return user?.token ? (
    <Container
      width="100vw"
      height="100vh"
      flexDirection="column"
      overflowX="hidden"
      id="scroll"
    >
      <Nav admin={true} />
      <Container width="100%" height="95vh" overflow="hidden">
        <Container
          flexDirection="column"
          height="100%"
          width="20%"
          bg="white"
          position="relative"
        >
          <Container
            bgImg={fondo}
            bgSize="cover"
            height="20%"
            radius="0 0 1rem 0"
            padding="1rem 1.5rem"
            flexDirection="column"
            justify="flex-end"
          >
            <Container gap="1rem" align="center">
              <img src={logo} style={{ width: '40px', height: '40px' }} alt="Logo Ceppa-redondo" />
              <Container
                flexDirection="column"
                align="flex-start"
                color="white"
              >
                <Text weight="700">CEPPA</Text>
                <Text size=".75rem">Administrador</Text>
              </Container>
            </Container>
          </Container>
          <Container flexDirection="column" padding="2rem 0" gap=".25rem">
            {links.map((item, idx) =>
              item.link ? (
                <Link key={idx} to={'/admin/' + item.link}>
                  <Button
                    type="button"
                    bg="white"
                    position="relative"
                    width="100%"
                    height="5vh"
                    display="flex"
                    align="center"
                    gap="1rem"
                    color="#353535"
                    weight="500"
                    border="none"
                    chevron={true}
                    alt={item?.title}
                    hover={{
                      background: '#8473B430',
                    }}
                  >
                    {item.icon} {item.title}
                    <ChevronRight width={10} height={10} />
                  </Button>
                </Link>
              ) : (
                <Button
                  key={idx}
                  type="button"
                  bg="white"
                  position="relative"
                  width="100%"
                  height="5vh"
                  display="flex"
                  align="center"
                  gap="1rem"
                  color="#353535"
                  weight="500"
                  border="none"
                  chevron={true}
                  hover={{
                    background: '#8473B430',
                  }}
                  onClick={() => window.open(item?.href, '_blank')}
                  alt={item?.title}
                >
                  {item.icon} {item.title}
                  <ChevronRight width={10} height={10} />
                </Button>
              ),
            )}
          </Container>
          <Button
            position="absolute"
            bg="none"
            border="none"
            outline="none"
            bottom="1rem"
            padding="0"
            right="1rem"
            color="#213E6E"
            weight="600"
            responsive={{ fontSize: '.8rem' }}
            alt="Cerrar sesion"
            onClick={() => {
              sessionStorage.clear()
              window.location.href = '/admin'
            }}
          >
            Cerrar sesión <Logout />
          </Button>
        </Container>
        <Container width="80%" borderLeft=".5px solid #D8D0D0" bg="white">
          {children ? (
            children
          ) : (
            <Container
              position="absolute"
              right="0"
              flexDirection="column"
              justify="center"
              align="center"
              width="43.55%"
              height="100%"
              bg="linear-gradient(180.24deg, #213E6E 43.31%, #5A429F 102.99%)"
            >
              <img src={logo} alt="Logo Ceppa" />
            </Container>
          )}
        </Container>
      </Container>
    </Container>
  ) : (
    <Login />
  )
}
