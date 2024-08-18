import request from 'superagent'
import { Stop, Welcome } from 'models/metlink'

export async function getStopPredictions(stopId: string): Promise<Welcome> {
  const requestUrl = `/api/v1/metlink/predictions?stop_id=${stopId}`
  //console.log('Request to', requestUrl)
  const response = await request.get(requestUrl)
  //console.log('Response', response.body)

  return response.body
}

export async function getStopsForRoute(routeId: string): Promise<Stop[]> {
  const requestUrl = `/api/v1/metlink/stops?route_id=${routeId}`
  //console.log('Request to', requestUrl)
  const response = await request.get(requestUrl)
  //console.log('Response', response.body)

  return response.body
}
