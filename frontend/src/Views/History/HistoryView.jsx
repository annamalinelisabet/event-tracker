import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import HistoryCard from '../../Components/HistoryCard/HistoryCard'
import TopNav from '../../Components/TopNav/TopNav'
import moment from 'moment'

const HistoryView = () => {

  const { data, loading, error } = useSelector(state => state.events)
  const [events, setEvents] = useState([])

  useEffect(() => {
    setEvents(data.filter(event => !moment(event.date).isAfter()))
  }, [data])

  return (
    <div className='Events'>
      <TopNav />
      <h1 className='event-header history-header'>TIDIGARE HÄNDELSER</h1>
      { loading && <p className='loading'>Laddar...</p> }
      { error && <p className='error'>Ajdå, något gick fel</p> }
      { events.length ? events.map(filteredEvent => <HistoryCard key={filteredEvent._id} filteredEvent={filteredEvent} />)
                        : <h3 className='empty'>Du har inga händelser som redan har ägt rum</h3>
      }
    </div>
  )
}

export default HistoryView