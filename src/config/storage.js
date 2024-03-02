import {
  GetObjectCommand,
  PutObjectCommand,
  DeleteObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3'
import fs from 'fs'
import path from 'path'

const REACT_APP_AWS_ACCESS_KEY_ID = 'AKIASAZMR7T5YJHD6DN7'
const REACT_APP_AWS_SECRET_ACCESS_KEY =
  '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'
const REACT_APP_AWS_REGION = 'us-east-1'

const s3 = new S3Client({
  region: REACT_APP_AWS_REGION,
  credentials: {
    accessKeyId: REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: REACT_APP_AWS_SECRET_ACCESS_KEY,
  },
})

export const uploadFile = async (file) => {
  const params = {
    Bucket: 'ceppa-storage',
    Key: file.name,
    Body: file, // Pasar el stream directamente como el cuerpo del objeto
    ContentType: 'application/pdf',
    ACL: 'public-read',
  }

  const command = new PutObjectCommand(params)

  try {
    const data = await s3.send(command)
    return data
  } catch (error) {
    console.error('Error al subir el archivo:', error)
    throw error
  }
}
export const deleteFileStorage = async (name) => {
  console.log(name)
  const params = {
    Bucket: 'ceppa-storage',
    Key: name,
  }

  try {
    // Ejecuta el comando para eliminar el objeto de S3
    await s3.send(new DeleteObjectCommand(params))
    console.log('Archivo eliminado correctamente')
  } catch (error) {
    console.error('Error al eliminar el archivo:', error)
    throw error
  }
}
export const readFile = async (file) => {
  const params = {
    Bucket: 'ceppa-storage',
    Key: file,
  }
  const command = new GetObjectCommand(params)

  try {
    const result = await s3.send(command)

    console.log('LINES 47', result)

    const __dirname = path.dirname(new URL(import.meta.url).pathname)
    const scriptDirectory = path.resolve(__dirname, '../assets')
    let filePath

    filePath = path.join(scriptDirectory, 'docs', file)

    result.Body.pipe(fs.createWriteStream(filePath))
    return filePath // Devuelve la ruta del archivo local
  } catch (error) {
    console.error('Error al descargar el archivo desde S3:', error)
    throw error // Lanza una excepción para manejar errores en el nivel superior
  }
}
