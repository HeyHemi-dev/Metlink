import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { RouteStops } from 'models/metlink'
import { metlinkRoutes } from '../../data/metlinkRoutes'

import { getStopsForRoute } from '@/api/stopInfo'
import { useQuery } from '@tanstack/react-query'

function Stops() {
  const query = useQuery({
    queryKey: [],
    queryFn: () => getStopsForRoute('5'),
  })

  if (query.data) {
    const railRoutes = metlinkRoutes.filter(
      (route) => route.agency_id.toLowerCase() === 'Rail'.toLowerCase(),
    )
    const railRouteStops: RouteStops[] = railRoutes.map((route) => ({
      ...route,
      stops: query.data,
    }))

    console.log('railRouteStops', railRouteStops)

    return (
      <>
        <h2>Stops</h2>
        <Tabs
          defaultValue={railRouteStops[0].route_short_name}
          className="w-[400px]"
        >
          <TabsList>
            {railRouteStops.map((route, index) => {
              return (
                <TabsTrigger value={route.route_short_name} key={index}>
                  {route.route_short_name}
                </TabsTrigger>
              )
            })}
          </TabsList>
          {railRouteStops.map((route, index) => {
            return (
              <TabsContent value={route.route_short_name} key={index}>
                <h2>{`Stops - ${route.route_long_name}`}</h2>
                {route.stops.map((stop, index) => {
                  return <p key={index}>{stop.stop_name}</p>
                })}
              </TabsContent>
            )
          })}
        </Tabs>
      </>
    )
  }

  return <div>Loading...</div>
}

export default Stops
