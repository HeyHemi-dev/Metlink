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
  origin: Stop
  destination: Stop
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

export interface Stop {
  stop_id: string
  name: string
}
