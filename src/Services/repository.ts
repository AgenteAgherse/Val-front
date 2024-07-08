import axios from 'axios'
import { getEnvironment } from './properties'

const { BASE } = getEnvironment()

const instance = axios.create({
  url: BASE,
})

export async function request(endpoint: string, met: string, dat: null) {
  try {
    return await instance({
      url: `${BASE}${endpoint}`,
      method: met,
      data: dat,
    })
  }
  catch (error: any) {
    return {
      dataError: error.response.data,
      data: null,
    }
  }
}
