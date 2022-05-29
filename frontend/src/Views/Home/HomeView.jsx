import './HomeView.css'
import Login from '../../Components/Login/Login'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const HomeView = () => {

  const user = useSelector(state => state.user.token)
  const userId = useSelector(state => state.user.userId)
  const navigate = useNavigate()

  useEffect(() => {
    if(user) {
      navigate('/events/' + userId)
    }
  }, [user, userId, navigate])

  return (
    <div className='Home'>
      <div className="top-div">
        <p>Logga in för att se DINA kommande händelser</p>
      </div>
      <Login />
    </div>
  )
}

export default HomeView