import React, { useEffect, useState } from 'react'
import { Container } from '../style/Container'
import fondo from '../assets/fondo-home.png'
import { Text } from '../style/Text'
import { Button } from '../style/Buttons'
import revista from '../assets/revista.png'
import Error from '../assets/Error'
import Download from '../assets/Download'
import { useDispatch, useSelector } from 'react-redux'
import { getMagazines } from '../redux/actions'
import ReactGA from 'react-ga4'

export default function Revistas() {
  const [array, setArray] = useState([])
  const dispatch = useDispatch()
  const currentArray = useSelector((state) => state.data.revistas)

  useEffect(() => {
    dispatch(getMagazines())
  }, [])

  useEffect(() => {
    setArray(currentArray)
  }, [currentArray])

  const handleDownload = (item) => {
    ReactGA.event({
      category: 'Download',
      action: 'Download',
      label: item.name,
    })
    const newTab = window.open(item.archive, '_blank')

    if (newTab) {
      setTimeout(() => {
        newTab.location.href = item.archive // Cambia la ubicación de la nueva pestaña al enlace
      }, 500)
    } else {
      const link = document.createElement('a')
      link.href = item.archive
      link.setAttribute('download', '')
      link.style.display = 'none'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  const extraItemCount = Math.ceil(array.length / 8) * 8 - array.length
  // Creamos un nuevo array con los elementos del array proporcionado más los elementos adicionales necesarios
  const filledArray = [...array, ...Array(extraItemCount).fill(null)]
  return (
    <Container
      justify="center"
      align="center"
      bgImg={fondo}
      height="100vh"
      width="100%"
      bgSize="cover"
      bgPosition="center"
      beforeLeft={true}
    >
      <Container
        width="60%"
        height="80%"
        wrap="wrap"
        align="center"
        transform="translate(0, 5%)"
        overflow="auto"
        scrollStyles={true}
        responsive={{ width: '80%' }}
      >
        {filledArray.map((item, idx) => (
          <Container
            key={idx}
            flexDirection="column"
            justify="center"
            align={!item ? 'center' : ''}
            width="25%"
            height="50%"
          >
            {item && (
              <>
                <Text color="white">{item.title}</Text>
                <Container
                  bgImg={item.img || revista}
                  bgPosition="center"
                  bgRepeat="no-repeat"
                  bgSize="contain"
                  height="90%"
                ></Container>
                <Button
                  width="max-content"
                  bg="none"
                  outline="none"
                  margin="auto"
                  border="none"
                  display="flex"
                  align="center"
                  gap=".5rem"
                  color="white"
                  onClick={() => handleDownload(item)}
                >
                  Descargar <Download />
                </Button>
              </>
            )}
            {!item && (
              <Container
                width="80%"
                height="95%"
                bg="#0000006B"
                align="center"
                justify="center"
              >
                <Error />
              </Container>
            )}
          </Container>
        ))}
      </Container>
    </Container>
  )
}
