import React, { useState } from 'react'
import * as Yup from 'yup'
import fondo from '../../assets/fondo-home.png'
import eye from '../../assets/eye.svg'
import eyeOff from '../../assets/eye-off.svg'
import { Container } from '../../style/Container'
import { Text } from '../../style/Text'
import { Form } from '../../style/Forms'
import { Input } from '../../style/Input'
import { Button } from '../../style/Buttons'
import { useFormik } from 'formik'
import Logo from '../../assets/Logo'
import { login } from '../../redux/actions'
import { MainModal } from '../../style/Main'
import error from '../../assets/error.svg'
import VectorX from '../../assets/VectorX'

export default function Login() {
  const [viewPassword, setViewPassword] = useState(false)
  const [modal, setModal] = useState({ view: false, payload: null })
  const fields = [
    { name: 'email', label: 'Correo electronico', type: 'text' },
    { name: 'password', label: 'Contraseña', type: 'password' },
  ]
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
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Ingrese un correo electronico valido')
        .required('Este campo es obligatorio'),
      password: Yup.string().required('Este campo es obligatorio'),
    }),
    onSubmit: async (values) => {
      const data = await login(values)
      console.log(data)

      if (data.success) {
        sessionStorage.setItem('user', JSON.stringify(data.data))
        window.location.href = '/admin'
        handleReset()
      } else {
        setModal({ view: true, payload: data.message })
      }
    },
  })

  return (
    <Container
      bgImg={fondo}
      height="100vh"
      width="100vw"
      bgSize="cover"
      bgPosition="center"
      justify="space-evenly"
      align="center"
    >
      <Container
        width="40%"
        height="70%"
        bg="rgb(0, 0, 0, 0.5)"
        justify="center"
        align="center"
        radius="1rem"
        responsive={{ width: '50%', height: '80%' }}
      >
        <Container
          width="80%"
          height="80%"
          bg="white"
          align="center"
          justify="center"
          flexDirection="column"
          radius="1rem"
          gap="2rem"
          position="relative"
        >
          <Text color="#4B4B4B" weight="600" size="1.75rem">
            Iniciar sesión
          </Text>
          <Form
            display="flex"
            flex="column"
            width="75%"
            gap="1rem"
            margin="0 2rem"
            position="relative"
            onSubmit={handleSubmit}
          >
            <Container gap="1rem" flexDirection="column">
              {fields.map((field, index) => (
                <Container
                  flexDirection="column"
                  align="flex-start"
                  justify="center"
                  gap=".5rem"
                  key={index}
                >
                  <Container
                    width="100%"
                    flexDirection="column"
                    align="flex-start"
                    justify="center"
                    position="relative"
                  >
                    <Input
                      id={field.name}
                      width="90%"
                      border="1px solid #DCDCDCBA"
                      color="black"
                      bg="white"
                      radius=".5rem"
                      padding="1rem"
                      autoComplete={field.type === 'password' ? 'off' : ''}
                      name={field.name}
                      type={viewPassword ? 'text' : field.type}
                      placeholder={field.label}
                      value={values[field.type !== 'file' ? field.name : '']}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={{
                        outline: 'none',
                        boxShadow: '0 4px 4px 0 #00000040',
                      }}
                    />
                    {field.type === 'password' && (
                      <Button
                        type="button"
                        bg="none"
                        position="absolute"
                        right="2rem"
                        margin="0"
                        padding="0"
                        outline="none"
                        border="none"
                        onClick={() => setViewPassword(!viewPassword)}
                      >
                        <img src={viewPassword ? eyeOff : eye} />
                      </Button>
                    )}
                  </Container>

                  {touched[field.name] && errors[field.name] && (
                    <Text color="red" size=".7rem" padding="0 .5rem">
                      {errors[field.name]}
                    </Text>
                  )}
                </Container>
              ))}
            </Container>
            <Button
              bg="#213E6E"
              shadow="0 4px 4px 0 #00000040"
              width="100%"
              radius="2rem"
              padding="1rem"
              margin="1rem 0"
              type="submit"
            >
              Ingresar
            </Button>
          </Form>
          <Container
            position="absolute"
            right="4rem"
            bottom="3rem"
            responsive={{ right: '1rem', bottom: '1rem' }}
          >
            <Logo />
          </Container>
        </Container>
      </Container>
      {modal?.view && (
        <MainModal>
          <Container
            width="35rem"
            height="25rem"
            bg="white"
            radius="1rem"
            position="relative"
            justify="center"
            align="center"
            gap="1rem"
            flexDirection="column"
          >
            <Button
              position="absolute"
              border="none"
              bg="none"
              padding="0"
              top="1.5rem"
              right="2rem"
              onClick={() => setModal({ ...modal, view: false })}
            >
              <VectorX color={'#0000004D'} />
            </Button>
            <img src={error} style={{ width: '7rem', height: '7rem' }} />
            <Text color="#514C4C" weight="700" size="1.2rem">
              {modal?.payload}
            </Text>
          </Container>
        </MainModal>
      )}
    </Container>
  )
}
