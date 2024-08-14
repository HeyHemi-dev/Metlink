import request from 'superagent'
import { Welcome, Departure } from '@/models/stopPredictions'

async function getStopPredictions(stopId: string): Promise<Welcome> {
  const response = await request.get('api/v1/metlink')
  return response.body
}
