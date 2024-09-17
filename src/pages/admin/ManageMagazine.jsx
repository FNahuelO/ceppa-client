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
  deleteMagazine,
  editMagazine,
  getMagazines,
  getStaff,
} from '../../redux/actions'
import VectorX from '../../assets/VectorX'
import { ClipLoader } from 'react-spinners'
import { MainModal } from '../../style/Main'
import { uploadFile } from '../../config/storage'
import VectorCheckAdmin from '../../assets/VectorCheckAdmin'
import Download from '../../assets/Download'
import { useDispatch, useSelector } from 'react-redux'
import VectorEdit from '../../assets/VectorEdit'
import VectorTrash from '../../assets/VectorTrash'
import Trash from '../../assets/Trash'

const Add = ({ setTypes }) => {
  return (
    <Container flexDirection="column" gap="2rem" align="center">
      <Revista />
      <Text color="#00000099" weight="600" width="70%">
        Actualmente no se encuentran revistas.Por favor, haga clic aquí para
        añadir una.
      </Text>
      <Button
        bg="#8473B4"
        padding=".5rem 1rem"
        color="white"
        radius="3rem"
        width="60%"
        onClick={() => setTypes('form')}
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
        onClick={() => setTypes('form')}
      >
        Agregar +
      </Button>
      <Container
        wrap="wrap"
        gap="1rem"
        width="90%"
        height="70%"
        padding="1rem 2rem"
        justify="space-between"
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
              width="15rem"
              height="25rem"
              flexDirection="column"
              position="relative"
              key={idx}
              responsive={{ width: '45%' }}
            >
              <Text
                size="1.5rem"
                weight="500"
                color="#00000052"
                padding="0 1rem"
                align="start"
              >
                {item.title}
              </Text>
              <Container
                bgImg={item.imageUrl || ''}
                bgPosition="center"
                bgRepeat="no-repeat"
                bgSize="contain"
                radius="1rem"
                height="90%"
                width="100%"
              ></Container>
              <Container position="absolute" right="0" top=".5rem">
                <Button
                  bg="none"
                  border="none"
                  padding="0"
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

export default function ManageMagazine() {
  const [cards, setCards] = useState([])
  const [imagen, setImagen] = useState(null)
  const [modal, setModal] = useState({ view: false, payload: null })
  const [ask, setAsk] = useState({ view: false, payload: null })
  const [edit, setEdit] = useState({ view: false, payload: null })
  const [type, setTypes] = useState('loading')
  const [buttonLabel, setButtonLabel] = useState('Confirmar')

  const dispatch = useDispatch()
  const currentArray = useSelector((state) => state.data.revistas)

  useEffect(() => {
    dispatch(getMagazines())
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
      const { title, imageUrl } = cards.find((item) => item.id === edit.payload)

      // Llama a la función urlToBuffer para convertir la URL de la imagen en un ArrayBuffer
      urlToImageFile(imageUrl, 'foto de perfil')
        .then((data) => {
          // Cuando se complete la conversión, establece los valores en el estado
          setValues({ title, image: data })
          setImagen(imageUrl)
        })
        .catch((error) => {
          console.error('Error al convertir la URL en ArrayBuffer:', error)
        })
    }
  }, [edit, cards])

  const fields = [
    { name: 'title', label: 'Titulo', type: 'text' },
    { name: 'image', label: 'Foto de portada', type: 'file' },
    { name: 'archive', label: 'Archivo', type: 'file' },
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
      title: '',
      image: null,
      archive: null,
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Este campo es obligatorio'),

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
      archive: Yup.mixed()
        .required('Este campo es obligatorio')
        .test(
          'fileType',
          'Por favor, seleccione un archivo de tipo PDF.',
          (value) => {
            if (!value) return true // No hay archivo seleccionado, no se aplica la validación
            const validExtensions = ['application/pdf']
            return validExtensions.includes(value.type)
          },
        ),
    }),
    onSubmit: async (values) => {
      setButtonLabel(<ClipLoader size={20} color="white" />)
      const formDataToSend = new FormData()
      const { $metadata } = await uploadFile(values.archive)

      if (values.image) {
        formDataToSend.append('archive', values.archive?.name)
        formDataToSend.append('image', values.image)
        formDataToSend.append('title', values.title)
      }

      if ($metadata.httpStatusCode) {
        let data

        if (edit.view && edit.payload) {
          data = await editMagazine(edit.payload, formDataToSend)
        } else {
          data = await addMagazine(formDataToSend)
        }
        if (data.success) {
          handleReset()
          setImagen(null)
          setModal({ view: true, payload: data.message })
          setButtonLabel('Confirmar')
        }
      }
    },
  })

  const handleFileUpload = async (file) => {
    const config = {
      bucketName: 'ceppa-storage',
      region: 'us-east-1',
      accessKeyId: 'AKIASAZMR7T5YJHD6DN7',
      secretAccessKey: '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',
    }
    try {
      await uploadFile(file, config)
      console.log('Archivo subido exitosamente')
    } catch (error) {
      console.error('Error al subir archivo:', error)
    }
  }
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

  const handleFileChange = (event) => {
    const file = event.target.files[0]

    if (event.target.name === 'image') {
      const reader = new FileReader()

      reader.onloadend = () => {
        setImagen(reader.result) // Establece la URL de la imagen como base64
      }
      if (file) {
        reader.readAsDataURL(file)
      }
    }

    setFieldValue(event.target.name, file)
  }

  const handleOpen = (id, state) => {
    if (state === 'edit') {
      setTypes('form')
      setEdit({ view: true, payload: id })
    } else {
      setAsk({ view: true, payload: id })
    }
  }

  const handleDelete = async (id) => {
    const data = await deleteMagazine(id)
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
                      value={values[field.type !== 'file' ? field.name : '']}
                      onChange={
                        field.type === 'file' ? handleFileChange : handleChange
                      }
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
        {type === 'form' && values.image ? (
          <Container width="15rem" height="25rem" flexDirection="column">
            <Text size="1.5rem" weight="500">
              {values.title}
            </Text>
            <Container
              bgImg={imagen || ''}
              bgPosition="center"
              bgRepeat="no-repeat"
              height="90%"
              width="100%"
            ></Container>
            {values.archive && (
              <Button
                width="max-content"
                bg="none"
                outline="none"
                margin="auto"
                border="none"
                display="flex"
                align="center"
                gap=".5rem"
              >
                Descargar
                <Download />
              </Button>
            )}
          </Container>
        ) : (
          <img src={logo} alt="Logo Ceppa"/>
        )}
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
              onClick={() => setAsk({ view: false, payload: null })}
            >
              <VectorX color={'#0000004D'} />
            </Button>
            <Trash />
            <Text color="#514C4C" weight="700" size="1.5rem" width="80%">
              ¿ Estas seguro que quiere eliminar esta revista ?
            </Text>
            <Container padding="1rem 2rem" justify="space-around" gap="3rem">
              <Button
                color="#8473B4"
                border="1px solid #8473B4"
                radius="3rem"
                padding="1rem 3rem"
                bg="white"
                outline="none"
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
