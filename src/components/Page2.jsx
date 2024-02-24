import { Container } from '../style/Container'
import frame from '../assets/sol.svg'
import logo from '../assets/ceppa.svg'
import { Text } from '../style/Text'
import 'animate.css/animate.min.css'

export default function Page2() {
  return (
    <Container
      position="relative"
      flexDirection="column"
      justify="center"
      align="center"
      height="100vh"
      bg="linear-gradient(to bottom, #2F4A71, #6F5F9D)"
    >
      <Container
        flexDirection="column"
        gap="1rem"
        color="white !important"
        width="50%"
        align="flex-start"
      >
        <Text size="2rem" weight="800" responsive={{ fontSize: '1.5rem' }}>
          ¿Cómo te podemos ayudar?
        </Text>
        <Text size="1.5rem" align="start" responsive={{ fontSize: '1.25rem' }}>
          En CEPPA tenemos distintas propuestas de acompañamientos, guiadas por
          profesionales de salud mental. Todas se confeccionan con psicoterapias
          basadas en evidencia, y puede ser asistidas por psilocibina en
          distintos formatos
        </Text>
      </Container>
      <Container
        position="absolute"
        right="8rem"
        bottom="10rem"
        responsive={{ right: '5rem', bottom: '5rem' }}
      >
        <img src={logo} alt="CEPPA-Logo" width="100" />
      </Container>
    </Container>
  )
}
