import { useQuery } from '@tanstack/react-query'
import { getStopPredictions } from '@/api/stopInfo'
import { Departure } from '@/models/stopPredictions'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

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
        <h2>Departures for {stopId}</h2>
        <Table>
          <TableCaption>Up-coming departures</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Service</TableHead>
              <TableHead>Destination</TableHead>
              <TableHead>Direction</TableHead>
              <TableHead>Scheduled</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Delay</TableHead>
              <TableHead className="text-right">Wheelchair Access</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {stopDepartures.map((departure, index) => {
              return (
                <>
                  <TableRow key={index}>
                    <TableCell>{departure.service_id}</TableCell>
                    <TableCell className="font-medium">
                      {departure.destination.name}
                    </TableCell>{' '}
                    <TableCell>{departure.direction}</TableCell>
                    <TableCell>{departure.arrival.aimed as string}</TableCell>
                    <TableCell>{departure.status}</TableCell>
                    <TableCell>{departure.delay}</TableCell>
                    <TableCell className="text-right">
                      {departure.wheelchair_accessible}
                    </TableCell>
                  </TableRow>
                </>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </>
  )
}

export default StopDetail
