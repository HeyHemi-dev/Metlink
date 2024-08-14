import request from 'superagent'
import { Welcome, Departure } from '@/models/stopPredictions'

export async function getStopPredictions(stopId: string): Promise<Welcome> {
  const response = await request.get(
    `api/v1/metlink/prediction?stop-id=${stopId}`,
  )
  return response.body
}
