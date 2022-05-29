import './HistoryCard.css'
import moment from 'moment'
import 'moment/locale/sv'
import { useState } from 'react'

const EventCard = ({ filteredEvent }) => {

  const d = new Date(filteredEvent.date)
  const time = d.toLocaleString()
  moment.locale('sv')

  const [showDetails, setShowDetails] = useState(false)

  return (
    <div onClick={() => setShowDetails(!showDetails)} className='History animate__animated animate__fadeInUp'>
      <h2 className='card-title'>{filteredEvent.title}</h2>
      { showDetails && 
      <div className="hidden-card animate__animated animate__fadeIn animate__fast">        
        <small className='detail-date'>{moment(time).format('LLLL')}</small>
        <p className='detail-text'>{filteredEvent.description}</p>
      </div> 
      } 

    </div>
  )
}

export default EventCard