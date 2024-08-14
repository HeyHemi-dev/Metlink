import { useQuery } from '@tanstack/react-query'
import { getStopPredictions } from '@/api/stopInfo'

const stopId = 'WATE'

function StopDetail() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['stop', stopId],
    queryFn: () => getStopPredictions(stopId),
  })

  const stopDepartures = data?.departures

  return (
    <>
      {stopDepartures?.map((departure, index) => {
        ;<p key={index}>{departure.origin.name}</p>
      })}
    </>
  )
}

export default StopDetail
