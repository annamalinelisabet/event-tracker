import HiddenMenu from '../HiddenMenu/HiddenMenu'
import './TopNav.css'
 import { useState } from 'react'

const TopNav = () => {

  const [showMenu, setShowMenu] = useState(false)
 
  return (
    <nav className='TopNav'>
        <i className="fa-solid fa-bars" onClick={() => setShowMenu(true)}></i>
        {showMenu && <HiddenMenu setShowMenu={setShowMenu}/>}        
    </nav>
  )
}

export default TopNav