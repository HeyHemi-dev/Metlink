import { RouteStops } from 'models/metlink'
import { metlinkRoutes } from '../../data/metlinkRoutes'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useQuery } from '@tanstack/react-query'

function Stops() {
  // const query = useQuery({
  //   queryKey: [],
  //   queryFn: () =>
  // })

  const railRoutes = metlinkRoutes.filter(
    (route) => route.agency_id.toLowerCase() === 'Rail'.toLowerCase(),
  )
  const railRouteStops = railRoutes
  railRouteStops.map((route) => {
    route.stops = [
      {
        stop_id: 'string',
        stop_code: 'string',
        stop_name: 'string',
        stop_desc: 'string',
        stop_lat: 0,
        stop_lon: 0,
        zone_id: 'string',
        stop_url: 'string',
        location_type: 0,
        parent_station: 'string',
        stop_timezone: 'string',
      },
    ]
  })
  console.log(railRouteStops)

  return (
    <>
      <h2>Stops</h2>
      <Tabs defaultValue={railRoutes[0].route_short_name} className="w-[400px]">
        <TabsList>
          {railRoutes.map((route, index) => {
            return (
              <TabsTrigger value={route.route_short_name} key={index}>
                {route.route_short_name}
              </TabsTrigger>
            )
          })}
        </TabsList>
        {railRoutes.map((route, index) => {
          return (
            <TabsContent value={route.route_short_name} key={index}>
              {route.stops.map((stop, index) => {
                return <p key={index}>{stop.stop_name}</p>
              })}
            </TabsContent>
          )
        })}
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </>
  )
}

export default Stops
