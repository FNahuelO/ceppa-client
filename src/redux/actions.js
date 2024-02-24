import baseUrl from '../config/axios'
import { staff, revistas, texts } from './reducer'

export const login = async (values) => {
  try {
    const { data } = await baseUrl.post('login', values)
    return data
  } catch ({ response }) {
    return response.data
  }
}

export const addStaff = async (values) => {
  const { data } = await baseUrl.post('add-staff', values)
  return data
}

export const editStaff = async (id, values) => {
  const { data } = await baseUrl.put(`staff/${id}`, values)
  return data
}
export const deleteStaff = async (id) => {
  const { data } = await baseUrl.delete(`staff/${id}`)
  return data
}

export const addMagazine = async (values) => {
  const { data } = await baseUrl.post('add-magazine', values)
  return data
}

export const getStaff = () => {
  return async (dispatch) => {
    const { data } = await baseUrl.get('get-staff')
    dispatch(staff(data.data))
  }
}
export const getMagazines = () => {
  return async (dispatch) => {
    const { data } = await baseUrl.get('get-magazines')
    dispatch(revistas(data.data))
  }
}

export const editMagazine = async (id, values) => {
  const { data } = await baseUrl.put(`magazine/${id}`, values)
  return data
}

export const deleteMagazine = async (id) => {
  const { data } = await baseUrl.delete(`magazine/${id}`)
  return data
}

export const filter = (type) => {
  return (dispatch) => {
    baseUrl.get(`${type}.json`).then(
      ({
        data: {
          data: { children },
        },
      }) => {
        console.log(children)
        dispatch(revistas(children))
      },
    )
  }
}

export const getTexts = () => {
  return async (dispatch) => {
    const { data } = await baseUrl.get('get-texts')
    dispatch(texts(data.data))
  }
}

export const addText = async (values) => {
  const { data } = await baseUrl.post('add-text', values)
  return data
}

export const editText = async (id, values) => {
  const { data } = await baseUrl.put(`text/${id}`, values)
  return data
}
export const deleteText = async (id) => {
  const { data } = await baseUrl.delete(`text/${id}`)
  return data
}
