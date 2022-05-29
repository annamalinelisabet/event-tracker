import './NotFoundView.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const NotFoundView = () => {

  const navigate = useNavigate()
  const user = useSelector(state => state.user.token)
  const userId = useSelector(state => state.user.userId)

  const handleClick = () => {
    if(user) {
      navigate('/events/' + userId)
    } else {      
      navigate('/')
    }
  }

  return (
    <div className='NotFound'>
      <h2 className='not-header'>Ooops här blev det lite tokigt...</h2>
      <button onClick={handleClick} className='btn'>TILL STARTSIDAN</button>
    </div>
  )
}

export default NotFoundView