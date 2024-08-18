import { useQuery } from '@tanstack/react-query'
import { getStopPredictions } from '@/api/stopInfo'
//import { Departure } from '@/models/stopPredictions'
import { useParams } from 'react-router-dom'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

//const stopId = 'WATE'

function StopDetail() {
  const { stopId } = useParams()

  const { data, isLoading, isError } = useQuery({
    queryKey: ['stop', stopId],
    queryFn: () => getStopPredictions(stopId as string),
    staleTime: 60000,
  })

  let tableCaption = 'Up-coming departures'

  if (isLoading) {
    tableCaption = 'Loading departures'
  }

  if (isError) {
    tableCaption = 'Error loading data, please refresh'
  }

  const departurePredictions = data?.departures

  //console.log('Departure predictions', departurePredictions)
  return (
    <>
      <div>
        <h2>Departures for {stopId}</h2>
        <Table>
          <TableCaption>{tableCaption}</TableCaption>
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
            {departurePredictions !== undefined &&
              departurePredictions.map((departure) => {
                return (
                  <TableRow key={departure.trip_id}>
                    <TableCell>{departure.service_id}</TableCell>
                    <TableCell className="font-medium">
                      {departure.destination.name}
                    </TableCell>
                    <TableCell>{departure.direction}</TableCell>
                    <TableCell>{`${departure.arrival.aimed}`}</TableCell>
                    <TableCell>{departure.status}</TableCell>
                    <TableCell>{departure.delay}</TableCell>
                    <TableCell className="text-right">
                      {departure.wheelchair_accessible}
                    </TableCell>
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </div>
    </>
  )
}

export default StopDetail
