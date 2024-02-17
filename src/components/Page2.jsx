import { Container } from '../style/Container'
import frame from '../assets/sol.svg'
import logo from '../assets/ceppa.svg'
import { useInView } from 'react-intersection-observer'
import { Text } from '../style/Text'
import 'animate.css/animate.min.css'
import hojas from '../assets/hojas.svg'

export default function Page2() {
  const { ref, inView } = useInView({ fallbackInView: 0 })
  return (
    <Container
      position="relative"
      flexDirection="column"
      justify="center"
      align="center"
      height="100vh"
      bg="linear-gradient(to bottom, #2F4A71, #6F5F9D)"
      ref={ref}
    >
      {inView && (
        <Container position="absolute" top="-6.8rem" right="3rem">
          <img src={hojas} />
        </Container>
      )}
      <Container
        position="absolute"
        top="8rem"
        right="15rem"
        className="animate__animated animate__fadeInUp"
      >
        <img src={frame} />
      </Container>
      <Container
        flexDirection="column"
        gap="1rem"
        color="white !important"
        width="50%"
        align="flex-start"
      >
        <Text size="2rem" weight="800">
          ¿Como te podemos ayudar?
        </Text>
        <Text size="1.5rem" align="start">
          En CEPPA tenemos una propuesta de acompañamiento de microdosis de
          psilocibina, guiado por profesionales de salud mental, confeccionado
          con tecnicas de terapias contesxtuales, para ayudar a potenciar tu
          proceso.
        </Text>
      </Container>
      <Container position="absolute" right="10rem" bottom="10rem">
        <img src={logo} alt="CEPPA-Logo" />
      </Container>
    </Container>
  )
}
