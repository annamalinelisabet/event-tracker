import { Link } from 'react-router-dom'
import './HiddenMenu.css'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../Store/Actions/userActions'
import { clearEvents } from '../../Store/Actions/eventsAction'

const HiddenMenu = ({ setShowMenu }) => {

  const dispatch = useDispatch()
  const userId = useSelector(state => state.user.userId)

  const onClick = () => {
    dispatch(logoutUser())
    dispatch(clearEvents())
  }

  return (
    <div className='Menu' onClick={() => setShowMenu(false)}>
        <div className="menu-bg animate__animated animate__slideInRight">
          <div className='width'>
            <button className='btn' onClick={() => setShowMenu(false)}><i className="fa-solid fa-xmark"></i></button>
          </div>
          <div>
            <Link to={'/events/' + userId}><h3 className='menu-text'>MINA HÄNDELSER</h3></Link>
            <Link to='/new'><h3 className='menu-text'>SKAPA NY HÄNDELSE</h3></Link>
            <Link to={'/history/' + userId}><h3 className='menu-text'>HISTORIK</h3></Link>
            <Link to='/' onClick={onClick}><h3 className='menu-text'>LOGGA UT</h3></Link>
          </div>
        </div>
    </div>
  )
}

export default HiddenMenu