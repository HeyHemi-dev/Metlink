import { useQuery } from '@tanstack/react-query'
import { getStopPredictions } from '@/api/stopInfo'
import { Departure } from '@/models/stopPredictions'

const stopId = 'WATE'

function StopDetail() {
  const { data } = useQuery({
    queryKey: ['stop', stopId],
    queryFn: () => getStopPredictions(stopId),
  })

  let stopDepartures = [] as Departure[]

  if (data) {
    stopDepartures = data.departures
  }

  console.log('Stop departures', stopDepartures)
  return (
    <>
      <div>
        <h2>Predictions</h2>
        {stopDepartures.map((departure, index) => {
          return <p key={index}>{departure.origin.name}</p>
        })}
      </div>
    </>
  )
}

export default StopDetail
