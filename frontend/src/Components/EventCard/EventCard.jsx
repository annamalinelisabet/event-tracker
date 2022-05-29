import './EventCard.css'
import { Link } from 'react-router-dom'
import moment from 'moment'
import 'moment/locale/sv'

const EventCard = ({ filteredEvent }) => {

  const d = new Date(filteredEvent.date)
  const time = d.toLocaleString()
  moment.locale('sv')

  return (
    <div className='EventCard animate__animated animate__fadeInUp'>
      <div className="card">
        <div>
          <h2 className='card-title'>{filteredEvent.title}</h2>
          <small className='card-time'>{moment(time).fromNow()}</small>
        </div>
        <Link className='link' to={`/events/detail/${filteredEvent._id}`}><i className="fa-solid fa-circle-info"></i></Link>
      </div>
    </div>
  )
}

export default EventCard