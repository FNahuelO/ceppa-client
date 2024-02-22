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
import baseUrl from '../config/axios'
import ReactGA from 'react-ga4'
import { ClipLoader } from 'react-spinners'

const fields = [
  { name: 'nombre', label: 'Nombre', type: 'text' },
  { name: 'apellido', label: 'Apellido', type: 'text' },
  { name: 'correo', label: 'Correo Electrónico', type: 'text' },
  { name: 'mensaje', label: 'Mensaje', type: 'textarea' },
]

const inputStyles = {
  bg: 'none',
  border: 'none',
  width: '100%',
  outline: 'none',
  color: 'black',
  size: '.8rem',
  borderBottom: '.5px solid #00000036',
}
export default function Contact() {
  const [modal, setModal] = useState({ form: true, confirm: false })
  const [buttonLabel, setButtonLabel] = useState('Enviar')

  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: window.location.pathname,
    })
  }, [])

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    handleReset,
    touched,
    errors,
  } = useFormik({
    initialValues: {
      nombre: '',
      apellido: '',
      correo: '',
      mensaje: '',
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required('Este campo es obligatorio'),
      apellido: Yup.string().required('Este campo es obligatorio'),
      correo: Yup.string()
        .email('Formato de correo inválido')
        .required('Este campo es obligatorio'),
      mensaje: Yup.string().required('Este campo es obligatorio'),
    }),
    onSubmit: async (values) => {
      setButtonLabel(<ClipLoader size={20} color="white" />)
      const { data } = await baseUrl.post('send-email', values)
      if (data.success) {
        setModal({ form: false, confirm: true })
        setButtonLabel('Enviar')
      }
    },
  })

  const handleClose = () => {
    setModal({ form: true, confirm: false })
    handleReset()
  }
  return (
    <Container
      justify="center"
      align="center"
      bgImg={fondo}
      height="105vh"
      width="100%"
      bgSize="cover"
      bgPosition="center"
      id="#contacto"
      beforeLeft={true}
    >
      {modal.form && (
        <Container
          width="50rem"
          height="40rem"
          radius="1rem"
          flexDirection="column"
          responsive={{
            width: '40rem',
            height: '30rem',
            transform: 'translateY(1rem)',
          }}
        >
          <Container
            flexDirection="column"
            bg="#2F4A71"
            gap=".5rem"
            color="white"
            align="flex-start"
            padding="2rem 4rem"
            radius="1rem 1rem 0 0"
            position="relative"
            responsive={{ padding: '1rem 2rem', gap: '0' }}
          >
            <Text weight="700" responsive={{ fontSize: '.9rem' }}>
              Contactanos!
            </Text>
            <Text
              align="start"
              size=".8rem"
              width="90%"
              responsive={{ fontSize: '.75rem' }}
            >
              Nos esforzamos por proporcionarte un espacio seguro para que
              puedas expresarte libremente. Estamos acá para ayudarte en tu
              viaje hacia el bienestar emocional. ¡Envíanos tu consulta y
              daremos respuesta con la mayor prontitud posible!
            </Text>
            <Container position="absolute" bottom="0" right="2rem">
              <Hojas />
            </Container>
          </Container>
          <Container
            bg="white"
            height="80%"
            radius="0 0 1rem 1rem"
            position="relative"
          >
            <Container
              flexDirection="column"
              width="50%"
              align="center"
              justify="center"
              padding="1rem 2rem"
            >
              <Form
                onSubmit={handleSubmit}
                width="85%"
                height="100%"
                display="flex"
                flex="column"
                justify="space-around"
                align="center"
                gap=".5rem"
              >
                {fields.map((field) => (
                  <Container
                    key={field.name}
                    flexDirection="column"
                    align="flex-start"
                    gap=".5rem"
                    width={field.type === 'textarea' ? '100%' : '95%'}
                    shadow={
                      field.type === 'textarea' ? '0 4px 4px 0 #00000040 ' : ''
                    }
                  >
                    <Container
                      width="100%"
                      align="flex-start"
                      justify="space-between"
                    >
                      <Text
                        color="#2F4A71"
                        size=".8rem"
                        padding={field.type === 'textarea' ? '0 .5rem' : ''}
                      >
                        {field.label}
                      </Text>
                      {touched[field.name] && errors[field.name] ? (
                        <Text color="red" size=".7rem" padding="0 .5rem">
                          {errors[field.name]}
                        </Text>
                      ) : null}
                    </Container>
                    {field.type === 'textarea' ? (
                      <textarea
                        name={field.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values[field.name]}
                        style={{
                          ...inputStyles,
                          width: '95%',
                          height: '5rem',
                          padding: '0 .5rem',
                          background: 'none',
                          resize: 'none',
                          fontSize: '.7rem',
                        }}
                      />
                    ) : (
                      <Input
                        type={field.type}
                        name={field.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values[field.name]}
                        {...inputStyles}
                      />
                    )}
                  </Container>
                ))}
                <Button
                  type="submit"
                  bg="#2F4A71"
                  width="100%"
                  weight="700"
                  radius=".5rem"
                  color="white"
                  responsive={{ margin: '1rem 0 0 0', fontSize: '.8rem' }}
                  disabled={buttonLabel !== 'Enviar'}
                  hover={{
                    background: 'white',
                    color: '#2F4A71',
                    boxShadow: '0 4px 4px 0 #00000040',
                    border: 'none',
                  }}
                >
                  {buttonLabel}
                </Button>
              </Form>
            </Container>
            <Container
              position="absolute"
              right="4rem"
              bottom="3rem"
              responsive={{ bottom: '1rem', right: '2rem' }}
            >
              <Logo width="100" />
            </Container>
          </Container>
        </Container>
      )}
      {modal.confirm && (
        <Container width="30rem" height="20rem" flexDirection="column">
          <Container
            bg="#2F4A71"
            justify="flex-end"
            padding="1rem 2rem"
            radius="1rem 1rem 0 0"
            position="relative"
          >
            <Button border="none" bg="none" padding="0" onClick={handleClose}>
              <VectorX />
            </Button>
          </Container>
          <Container
            bg="white"
            height="80%"
            radius="0 0 1rem 1rem"
            position="relative"
            justify="center"
            align="center"
            gap="1rem"
            flexDirection="column"
          >
            <VectorCheck />
            <Text color="#514C4C" weight="700">
              Mensaje enviado
            </Text>
          </Container>
        </Container>
      )}
    </Container>
  )
}
