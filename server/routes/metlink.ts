import express from 'express'
import request from 'superagent'
import 'dotenv/config'

const router = express.Router()
export default router

const metlinkPath = 'https://api.opendata.metlink.org.nz/v1'

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
  }
})
