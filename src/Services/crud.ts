import { request } from './repository'

export function postInstance(endpoint: string, data: any) {
  return request(endpoint, 'POST', data)
}

export function getInstance(endpoint: string, data: null) {
  return request(endpoint, 'GET', data)
}

export async function updateInstance(endpoint: string, data: any) {
  return request(endpoint, 'PUT', data)
}

export async function deleteInstance(endpoint: string, data: null) {
  return request(endpoint, 'DELETE', data)
}
