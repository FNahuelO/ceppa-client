import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import * as Yup from 'yup'
import { Container } from '../../style/Container'
import { Form as Formulario } from '../../style/Forms'
import Card from '../../components/Card'
import { Hr, Text } from '../../style/Text'
import { Input } from '../../style/Input'
import { Button } from '../../style/Buttons'
import Revista from '../../assets/Revista'
import fondo from '../../assets/fondo-admin-azul.png'
import logo from '../../assets/logo-blur.png'
import foto from '../../assets/pic.png'
import More from '../../assets/More'
import { useFormik } from 'formik'
import {
  addMagazine,
  addText,
  deleteMagazine,
  deleteText,
  editMagazine,
  editText,
  getMagazines,
  getStaff,
  getTexts,
} from '../../redux/actions'
import VectorX from '../../assets/VectorX'
import { MainModal } from '../../style/Main'
import VectorCheckAdmin from '../../assets/VectorCheckAdmin'
import Download from '../../assets/Download'
import { useDispatch, useSelector } from 'react-redux'
import VectorEdit from '../../assets/VectorEdit'
import VectorTrash from '../../assets/VectorTrash'
import Trash from '../../assets/Trash'
import { ClipLoader } from 'react-spinners'

const Add = ({ setTypes }) => {
  return (
    <Container flexDirection="column" gap="2rem" align="center">
      <Revista />
      <Text color="#00000099" weight="600" width="70%">
        Actualmente no se encuentran textos.Por favor, haga clic aquí para
        añadir uno.
      </Text>
      <Button
        bg="#8473B4"
        padding=".5rem 1rem"
        color="white"
        radius="3rem"
        width="60%"
        onClick={() => setTypes('form')}
        alt="Agregar"
        hover={{
          color: '#8473B4',
          background: 'white',
          borderColor: '#8473B4',
        }}
      >
        Agregar +
      </Button>
    </Container>
  )
}

const List = ({ cards, setTypes, handleClick }) => {
  const [viewStates, setViewStates] = useState({})

  const toggleView = (id) => {
    setViewStates((prevStates) => ({
      ...prevStates,
      [id]: !prevStates[id],
    }))
  }

  // Referencia a un contenedor que abarca toda la pantalla
  const containerRef = useRef(null)

  // Función para cerrar los elementos cuando se hace clic fuera de ellos
  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setViewStates({})
    }
  }

  // Agregar el controlador de eventos de clic fuera del contenedor
  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <Container flexDirection="column" gap="1rem" width="100%" height="100%">
      <Button
        bg="none"
        border="none"
        color="#00000052"
        width="max-content"
        padding=".5rem 1rem"
        weight="700"
        alt="Agregar"
        onClick={() => setTypes('form')}
      >
        Agregar +
      </Button>
      <Container
        flexDirection="column"
        gap="2rem"
        width="90%"
        height="80%"
        padding="1rem 2rem"
        content="flex-start"
        overflowY="auto"
        overflowX="hidden"
        ref={containerRef}
        scrollStyles={true}
        responsive={{ padding: '1rem 1.5rem' }}
      >
        {cards.map((item, idx) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          return (
            <Container
              width="90%"
              flexDirection="column"
              position="relative"
              key={idx}
            >
              <Text
                size="1.25rem"
                weight="500"
                color="#000000"
                padding="0 1rem"
                align="start"
              >
                {item.label}
              </Text>
              <Container position="absolute" right="0" top=".5rem">
                <Button
                  bg="none"
                  border="none"
                  padding="0"
                  alt="Mas"
                  onClick={() => toggleView(item.id)}
                >
                  <More />
                </Button>
              </Container>
              {viewStates[item.id] && (
                <Container
                  width="10rem"
                  position="absolute"
                  right=".5rem"
                  top=".5rem"
                  bg="white"
                  padding=".5rem .75rem "
                  flexDirection="column"
                  shadow="0 4px 4px 0  #00000040"
                  index="5"
                  radius="1rem"
                  align="flex-start"
                >
                  <Text
                    display="flex"
                    width="95%"
                    align="center"
                    justify="space-between"
                    color="#00000080"
                    weight="500"
                    cursor="pointer"
                    onClick={() => handleClick(item.id, 'edit')}
                  >
                    Editar <VectorEdit />
                  </Text>
                  <Hr border=".5px solid #A4A4A480" width="100%" />
                  <Text
                    color="#00000080"
                    cursor="pointer"
                    weight="500"
                    display="flex"
                    width="95%"
                    alignItems="center"
                    justify="space-between"
                    onClick={() => handleClick(item.id)}
                  >
                    Eliminar <VectorTrash />
                  </Text>
                </Container>
              )}
            </Container>
          )
        })}
      </Container>
    </Container>
  )
}

export default function ManageTexts() {
  const [cards, setCards] = useState([])
  const [modal, setModal] = useState({ view: false, payload: null })
  const [ask, setAsk] = useState({ view: false, payload: null })
  const [edit, setEdit] = useState({ view: false, payload: null })
  const [type, setTypes] = useState('loading')
  const [buttonLabel, setButtonLabel] = useState('Confirmar')

  const dispatch = useDispatch()
  const currentArray = useSelector((state) => state.data.texts)

  useEffect(() => {
    dispatch(getTexts())
  }, [modal])

  useEffect(() => {
    setCards(currentArray)
    setTimeout(() => {
      if (cards.length) {
        setTypes('list')
      } else {
        setTypes('add')
      }
    }, 500)
  }, [currentArray, cards])

  useEffect(() => {
    if (edit.view && edit.payload) {
      const { label } = cards.find((item) => item.id === edit.payload)

      // Llama a la función urlToBuffer para convertir la URL de la imagen en un ArrayBuffer

      setValues({ label })
    }
  }, [edit, cards])

  const fields = [{ name: 'label', label: 'Frase', type: 'text' }]

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    handleReset,
    setFieldValue,
    setValues,
    touched,
    errors,
  } = useFormik({
    initialValues: {
      label: '',
    },
    validationSchema: Yup.object({
      label: Yup.string().required('Este campo es obligatorio'),
    }),
    onSubmit: async (values) => {
      setButtonLabel(<ClipLoader size={20} color="white" />)

      let data

      if (edit.view && edit.payload) {
        data = await editText(edit.payload, values)
      } else {
        data = await addText(values)
      }
      if (data.success) {
        handleReset()
        setModal({ view: true, payload: data.message })
        setButtonLabel('Confirmar')
      }
    },
  })

  const handleOpen = (id, state) => {
    if (state === 'edit') {
      setTypes('form')
      setEdit({ view: true, payload: id })
    } else {
      setAsk({ view: true, payload: id })
    }
  }

  const handleDelete = async (id) => {
    const data = await deleteText(id)
    if (data.success) {
      setAsk({ view: false, payload: null })
      setModal({ view: true, payload: data.message })
    }
  }

  const handleClose = () => {
    setModal({ view: false, payload: null })
  }

  const components = {
    loading: (
      <Container width="100%" justify="center" align="center">
        <ClipLoader color="#213E6E" />
      </Container>
    ),
    add: <Add setTypes={setTypes} />,
    list: <List cards={cards} setTypes={setTypes} handleClick={handleOpen} />,
  }

  return (
    <Container width="100%" height="93vh" overflowY="hidden">
      <Container
        width="50%"
        flexDirection="column"
        align="center"
        justify="center"
        height="100%"
      >
        <Container
          flexDirection="column"
          align="flex-start"
          width="90%"
          height="80%"
          gap="3rem"
        >
          <Text
            weight="600"
            size="1.75rem"
            color="#353535"
            align="start"
            responsive={{ fontSize: '1.5rem' }}
          >
            Gestionar revistas
          </Text>
          {type === 'form' ? (
            <Formulario
              display="flex"
              flex="column"
              width="75%"
              gap="1rem"
              margin="0 2rem"
              onSubmit={handleSubmit}
            >
              <Container gap="1rem" flexDirection="column">
                {fields.map((field, index) => (
                  <Container
                    flexDirection="column"
                    align="flex-start"
                    position="relative"
                    key={index}
                  >
                    <Text
                      color="#353535"
                      size="1.2rem"
                      textShadow="0 2px 2px rgba(0, 0, 0, 0.5)"
                    >
                      {field.label}
                    </Text>
                    {touched[field.name] && errors[field.name] && (
                      <Text
                        color="red"
                        size=".7rem"
                        padding="0 .5rem"
                        position="absolute"
                        top=".5rem"
                        right="-1rem"
                      >
                        {errors[field.name]}
                      </Text>
                    )}

                    <Input
                      id={field.name}
                      width="100%"
                      border="1px solid #DCDCDCBA"
                      color="black"
                      bg="white"
                      radius=".5rem"
                      padding=".75rem"
                      name={field.name}
                      type={field.type}
                      onChange={handleChange}
                      value={values[field.name]}
                      onBlur={handleBlur}
                    />
                  </Container>
                ))}
              </Container>
              <Button
                bg="#8473B4"
                shadow="0 4px 4px 0 #00000040"
                width="100%"
                radius="2rem"
                margin="1rem 0"
                type="submit"
                alt="Confirmar"
                disabled={buttonLabel !== 'Confirmar'}
              >
                {buttonLabel}
              </Button>
            </Formulario>
          ) : (
            components[type]
          )}
        </Container>
      </Container>
      <Container
        flexDirection="column"
        justify="center"
        align="center"
        width="60%"
        bgImg={fondo}
        bgSize="cover"
        responsive={{ width: '50%' }}
      >
        <img src={logo} alt="Logo Ceppa" />
      </Container>
      {modal.view && (
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
              alt="Cerrar"
              onClick={handleClose}
            >
              <VectorX color={'#0000004D'} />
            </Button>
            <VectorCheckAdmin />
            <Text color="#514C4C" weight="700" size="1.2rem">
              {modal.payload}
            </Text>
          </Container>
        </MainModal>
      )}
      {ask.view && (
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
              alt="Cerrar"
              onClick={() => setAsk({ view: false, payload: null })}
            >
              <VectorX color={'#0000004D'} />
            </Button>
            <Trash />
            <Text color="#514C4C" weight="700" size="1.5rem" width="80%">
              ¿ Estas seguro que quiere eliminar el texto ?
            </Text>
            <Container padding="1rem 2rem" justify="space-around" gap="3rem">
              <Button
                color="#8473B4"
                border="1px solid #8473B4"
                radius="3rem"
                padding="1rem 3rem"
                bg="white"
                outline="none"
                alt="Cancelar"
                onClick={() => setAsk({ view: false, payload: null })}
              >
                Cancelar
              </Button>
              <Button
                bg="#8473B4"
                radius="3rem"
                padding="1rem 3rem"
                border="none"
                outline="none"
                alt="Aceptar"
                onClick={() => handleDelete(ask.payload)}
              >
                Aceptar
              </Button>
            </Container>
          </Container>
        </MainModal>
      )}
    </Container>
  )
}
