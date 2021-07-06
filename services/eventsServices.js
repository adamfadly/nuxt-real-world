import axios from "axios"

    
const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false, 
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})


export const fetchEvents = async () => {
  let events = await apiClient.get('/events')
  return events.data
}

export const fetchEvent = async (id) => {
  let event = await apiClient.get(`/events/${id}`)
  console.log(event)
  return event.data
}