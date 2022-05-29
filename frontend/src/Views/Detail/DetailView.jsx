import './DetailView.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getEventById } from '../../Store/Actions/eventAction'
import { useParams, useNavigate } from 'react-router-dom'
import TopNav from '../../Components/TopNav/TopNav'
import moment from 'moment'
import 'moment/locale/sv'
import Modal from '../../Components/Modal/Modal'



const DetailView = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  const { data, date, loading, error } = useSelector(state => state.event)
  const [showModal, setShowModal] = useState(false)

  const d = new Date(date)
  const time = d.toLocaleString()
  moment.locale('sv')

  useEffect(() => {
    dispatch(getEventById(id))
  }, [dispatch, id])



  const template = ( data &&
      <div className='detail-wrapper'>
        <i className="fa-solid fa-arrow-left" onClick={() => navigate(-1)}></i>
        <div className=' animate__animated animate__bounceInRight'>
          <h1 className='detail-title'>{data.title}</h1>
          <small className='detail-date'>{moment(time).format('LLLL')}</small>
          <p className='detail-text'>{data.description}</p>
        </div>
        <div className='trash-width'>
          <i className="fa-solid fa-trash-can" onClick={() => setShowModal(true)}></i>
        </div>
      </div>
    )
    
    return (
      <div className='Detail'>
      <TopNav />
      { template }
      { loading && <p className='loading'>Laddar...</p>}
      { error && <p className='error'>Ojdå något gick fel...</p>}         
      { showModal && <Modal setShowModal={setShowModal} id={id}/> }
    </div>
  )
}

export default DetailView