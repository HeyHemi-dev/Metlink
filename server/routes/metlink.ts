import express from 'express'
import request from 'superagent'
import 'dotenv/config'

const router = express.Router()
export default router

const metlinkPath = 'https://api.opendata.metlink.org.nz/v1'

// Get departure predictions
router.get('/predictions', async (req, res) => {
  try {
    const stopId = req.query.stop_id
    //console.log('Request to', metlinkPath, 'Stop id', stopId)
    const response = await request
      .get(`${metlinkPath}/stop-predictions?stop_id=${stopId}`)
      .set('x-api-key', String(process.env.METLINK_API_KEY))
    res.json(response.body)
  } catch (error: unknown) {
    console.error(error)
    res.json(error)
  }
})

// Gets stops per route
router.get('/stops', async (req, res) => {
  try {
    const routeId = req.query.route_id
    //console.log('Request to', metlinkPath)
    const response = await request
      //https://api.opendata.metlink.org.nz/v1/gtfs/stops?route_id=5
      .get(`${metlinkPath}/gtfs/stops?route_id=${routeId}`)
      .set('x-api-key', String(process.env.METLINK_API_KEY))
    res.json(response.body)
  } catch (error: unknown) {
    console.error(error)
    res.json(error)
  }
})
