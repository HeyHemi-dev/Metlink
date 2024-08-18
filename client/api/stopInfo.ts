import request from 'superagent'
import { Welcome } from 'models/metlink'

export async function getStopPredictions(stopId: string): Promise<Welcome> {
  const requestUrl = `/api/v1/metlink/predictions?stop_id=${stopId}`
  console.log('Request to', requestUrl)
  const response = await request.get(requestUrl)
  console.log('Response', response.body)

  return response.body
}
