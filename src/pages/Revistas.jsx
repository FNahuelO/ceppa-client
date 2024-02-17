import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { Container } from '../style/Container'
import { Form } from '../style/Forms'
import fondo from '../assets/fondo-home.png'
import { Text } from '../style/Text'
import Logo from '../assets/Logo'
import Hojas from '../assets/Hojas'
import { useFormik } from 'formik'
import { Input } from '../style/Input'
import { Button } from '../style/Buttons'
import VectorCheck from '../assets/VectorCheck'
import VectorX from '../assets/VectorX'
import axios from 'axios'
import revista from '../assets/revista.png'
import Error from '../assets/Error'
import Download from '../assets/Download'
import { useDispatch, useSelector } from 'react-redux'
import { getMagazines } from '../redux/actions'

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
    >
      <Container
        width="60%"
        height="80%"
        wrap="wrap"
        align="center"
        transform="translate(0, 5%)"
        overflow="auto"
        scrollStyles={true}
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
                <Text>{item.title}</Text>
                <Container
                  bgImg={item.img || revista}
                  bgPosition="center"
                  bgRepeat="no-repeat"
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
                  //onClick={}
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
