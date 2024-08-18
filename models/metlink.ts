export interface Welcome {
  farezone: string
  closed: boolean
  departures: Departure[]
}

export interface Departure {
  stop_id: string
  service_id: string
  direction: string
  operator: string
  origin: StopRef
  destination: StopRef
  delay: string
  vehicle_id: null | string
  name: string
  arrival: Time
  departure: Time
  status: null | string
  monitored: boolean
  wheelchair_accessible: boolean
  trip_id: string
}

export interface Time {
  aimed: Date
  expected: Date | null
}

export interface StopRef {
  stop_id: string
  name: string
}

export interface Stop {
  stop_id: string
  stop_code: string
  stop_name: string
  stop_desc: string
  stop_lat: number
  stop_lon: number
  zone_id: string
  stop_url: string
  location_type: number
  parent_station: string
  stop_timezone: string
}

export interface Route {
  id: number
  route_id: string
  agency_id: string
  route_short_name: string
  route_long_name: string
  route_desc: string
  route_type: number
  route_color: string
  route_text_color: string
  route_url: string
  route_sort_order: number
}

export interface RouteStops extends Route {
  stops: Stop[]
}
