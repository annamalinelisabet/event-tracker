import './EventsView.css'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getEvents } from '../../Store/Actions/eventsAction'
import { checkUser } from '../../Store/Actions/userActions'
import EventCard from '../../Components/EventCard/EventCard'
import TopNav from '../../Components/TopNav/TopNav'
import moment from 'moment'

const EventsView = () => {

  const dispatch = useDispatch()
  const { userId } = useParams()
  const { data, loading, error } = useSelector(state => state.events)
  const [events, setEvents] = useState([]) 
  
  useEffect(() => {
    dispatch(checkUser())
  }, [dispatch])

  useEffect(() => {
    dispatch(getEvents(userId))
  }, [dispatch, userId])

  useEffect(() => {
    setEvents(data.filter(event => moment(event.date).isAfter()))
  }, [data])  

  return (
    <div className='Events'>
      <TopNav />
      <h1 className='event-header'>KOMMANDE HÄNDELSER</h1>
      <div className="width-plus">
        <Link to='/new'><i className="fa-solid fa-plus"></i></Link>
      </div>
      { loading && <p className='loading'>Laddar...</p> }
      { error && <p className='error'>Ajdå, något gick fel</p> }
      { events.length ? events.map(filteredEvent => <EventCard key={filteredEvent._id} filteredEvent={filteredEvent} />)
                    : <h3 className='empty'>Du har inga kommande händelser</h3>
      }
    </div>
  )
}

export default EventsView