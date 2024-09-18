import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import * as Yup from 'yup'
import { Container } from '../../style/Container'
import { Form as Formulario } from '../../style/Forms'
import Card from '../../components/Card'
import { Hr, Text } from '../../style/Text'
import { Input } from '../../style/Input'
import { Button } from '../../style/Buttons'
import Staff from '../../assets/Staff'
import fondo from '../../assets/fondo-admin-azul.png'
import logo from '../../assets/logo-blur.png'
import foto from '../../assets/pic.png'
import More from '../../assets/More'
import { useFormik } from 'formik'
import { addStaff, deleteStaff, editStaff, getStaff } from '../../redux/actions'
import VectorX from '../../assets/VectorX'
import { MainModal } from '../../style/Main'
import VectorCheckAdmin from '../../assets/VectorCheckAdmin'
import { useDispatch, useSelector } from 'react-redux'
import VectorTrash from '../../assets/VectorTrash'
import VectorEdit from '../../assets/VectorEdit'
import Trash from '../../assets/Trash'
import { ClipLoader } from 'react-spinners'

const Add = ({ setTypes }) => {
  return (
    <Container flexDirection="column" gap="2rem" align="center">
      <Staff />
      <Text color="#00000099" weight="600">
        Actualmente no se encuentran perfiles disponibles. Por favor, haga clic
        aquí para añadir uno.
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

  const containerRef = useRef(null)

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setViewStates({})
    }
  }

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
        gap="1rem"
        width="90%"
        height="90%"
        padding="1rem 2rem"
        overflowY="auto"
        overflowX="hidden"
        scrollStyles={true}
        ref={containerRef}
        responsive={{ padding: '.5rem', width: '100%' }}
      >
        {cards.map((item, idx) => {
          return (
            <Container
              bg="white"
              width="90%"
              radius="1rem"
              justify="flex-start"
              gap="2rem"
              align="center"
              padding="1rem 2rem"
              shadow="0 4px 10px 0 #00000040"
              position="relative"
              key={idx}
              responsive={{ width: '80%' }}
            >
              <Container flexDirection="column" gap="1rem" align="center">
                <img
                  src={item.imageUrl || foto}
                  alt={`Foto de perfil`}
                  style={{ width: '80px', height: '80px', borderRadius: '50%' }}
                  onLoad={(e) => {
                    if (e.target.width === e.target.height) {
                      e.target.style.objectFit = 'cover'
                      e.target.style.objectPosition = 'top'
                    }
                  }}
                />
              </Container>

              <Container flexDirection="column" align="flex-start">
                <Text size="1.2rem" color="#2F4A71" weight="500">
                  {item.name}
                </Text>
                <Text weight="600" color="#000000B2">
                  {item.speciality}
                </Text>
              </Container>
              <Container position="absolute" right="0" top=".5rem">
                <Button
                  bg="none"
                  border="none"
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

export default function ManageTeam() {
  const [cards, setCards] = useState([])
  const [imagen, setImagen] = useState({ data: null, square: null })
  const [modal, setModal] = useState({ view: false, payload: null })
  const [ask, setAsk] = useState({ view: false, payload: null })
  const [edit, setEdit] = useState({ view: false, payload: null })
  const [buttonLabel, setButtonLabel] = useState('Confirmar')

  const dispatch = useDispatch()
  const currentStaff = useSelector((state) => state.data.staff)

  const [type, setTypes] = useState('loading')
  useEffect(() => {
    dispatch(getStaff())
  }, [modal])

  useEffect(() => {
    setCards(currentStaff)
    setTimeout(() => {
      if (cards.length) {
        setTypes('list')
      } else {
        setTypes('add')
      }
    }, 1000)
  }, [currentStaff, cards])

  useEffect(() => {
    if (edit.view && edit.payload) {
      const { name, description, speciality, imageUrl, type } = cards.find(
        (item) => item.id === edit.payload,
      )

      // Llama a la función urlToBuffer para convertir la URL de la imagen en un ArrayBuffer
      urlToImageFile(imageUrl, 'foto de perfil')
        .then((data) => {
          // Cuando se complete la conversión, establece los valores en el estado
          setValues({ name, description, speciality, image: data, type })
          setImagen({ data: imageUrl, square: null })
        })
        .catch((error) => {
          console.error('Error al convertir la URL en ArrayBuffer:', error)
        })
    }
  }, [edit, cards])

  const fields = [
    { name: 'name', label: 'Nombre completo', type: 'text' },
    { name: 'speciality', label: 'Especialidad', type: 'text' },
    { name: 'description', label: 'Descripción', type: 'text' },
    { name: 'image', label: 'Foto', type: 'file' },
    {
      name: 'type',
      label: 'Tipo de consulta',
      type: 'radio',
      options: ['Presencial', 'Online', 'Ambas'],
    },
  ]

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
      name: '',
      speciality: '',
      description: '',
      image: null,
      type: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Este campo es obligatorio'),
      speciality: Yup.string().required('Este campo es obligatorio'),
      description: Yup.string().required('Este campo es obligatorio'),
      type: Yup.string().required('Este campo es obligatorio'),
      image: Yup.mixed()
        .required('Este campo es obligatorio')
        .test(
          'fileType',
          'Por favor, seleccione un archivo de imagen PNG o JPG.',
          (value) => {
            if (!value) return true // No hay archivo seleccionado, no se aplica la validación
            const validExtensions = ['image/png', 'image/jpeg', 'image/jpg']
            return validExtensions.includes(value.type)
          },
        ),
    }),
    onSubmit: async (values) => {
      const formDataToSend = new FormData()

      // Recorremos el objeto formData y añadimos los valores al FormData
      for (const key in values) {
        if (values.hasOwnProperty(key)) {
          formDataToSend.append(key, values[key])
        }
      }
      setButtonLabel(<ClipLoader size={20} color="white" />)

      let data

      if (edit.view && edit.payload) {
        data = await editStaff(edit.payload, formDataToSend)
      } else {
        data = await addStaff(formDataToSend)
      }

      if (data.success) {
        handleReset()
        setEdit({ view: false, payload: null })
        setImagen({ data: null, square: null })
        setModal({ view: true, payload: data.message })
        setButtonLabel('Confirmar')
      }
    },
  })

  async function urlToImageFile(url, filename) {
    try {
      const response = await fetch(url)
      const blob = await response.blob()
      return new File([blob], filename, { type: blob.type })
    } catch (error) {
      console.error('Error al convertir la URL en archivo de imagen:', error)
      throw error
    }
  }

  const handleOpen = (id, state) => {
    if (state === 'edit') {
      setTypes('form')
      setEdit({ view: true, payload: id })
    } else {
      setAsk({ view: true, payload: id })
    }
  }

  const handleFileChange = async (event) => {
    const file = event.target.files[0]
    const reader = new FileReader()

    if (file?.type.includes('image')) {
      reader.onload = () => {
        const image = new Image()
        image.onload = () => {
          if (image.width !== image.height) {
            setImagen({ data: reader.result, square: false })
            //
          } else {
            setImagen({ data: reader.result, square: true })
          }
          setFieldValue('image', file) // Establecer el valor del campo solo si la imagen es cuadrada
        }
        image.src = reader.result
      }

      reader.onerror = () => {
        console.error('Error al cargar la imagen.')
      }

      reader.readAsDataURL(file)
    } else {
      setFieldValue('image', file)
    }
  }

  const handleDelete = async (id) => {
    const data = await deleteStaff(id)
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
          responsive={{ height: 'initial', gap: '1rem' }}
        >
          <Text
            weight="600"
            size="1.75rem"
            color="#353535"
            align="start"
            responsive={{ fontSize: '1.5rem' }}
          >
            Gestionar equipo
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
              <Container
                gap="1rem"
                flexDirection="column"
                responsive={{ gap: '.5rem' }}
              >
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
                      responsive={{ fontSize: '1rem' }}
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
                    {field.type === 'radio' ? (
                      <Container gap="2rem">
                        {field.options.map((option, idx) => (
                          <div key={idx}>
                            <Text color="#353535" size="1.2rem">
                              {option}{' '}
                              <input
                                type="radio"
                                name={field.name}
                                value={option.toLowerCase()}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                checked={
                                  values[field.name] === option.toLowerCase()
                                }
                                style={{ backgroundColor: 'blue' }}
                              />
                            </Text>
                          </div>
                        ))}
                      </Container>
                    ) : (
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
                        value={values[field.type !== 'file' ? field.name : '']}
                        onChange={
                          field.type === 'file'
                            ? handleFileChange
                            : handleChange
                        }
                      />
                    )}
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
                color="white"
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
        {type === 'form' ? (
          <Card
            index={true}
            admin={true}
            name={values.name}
            description={values.description}
            title={values.speciality}
            type={values.type}
            image={imagen}
          />
        ) : (
          <img src={logo} alt="Logo Ceppa"/>
        )}
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
              alt="Cerrar"
              onClick={handleClose}
            >
              <VectorX color={'#0000004D'} />
            </Button>
            <VectorCheckAdmin />
            <Text color="#514C4C" weight="700" size="1.2rem">
              {modal.payload || 'Perfil agregado'}
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
              ¿ Estas seguro que quiere eliminar este perfil ?
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
