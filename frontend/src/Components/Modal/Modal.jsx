import './Modal.css'
import { deleteEventById } from '../../Store/Actions/eventsAction'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Modal = ({ setShowModal, id }) => {
    
    const dispatch = useDispatch()
    const userId = useSelector(state => state.user.userId)
    
    return (
        <div className='Modal' onClick={() => setShowModal(false)}>
            <div className="modal-card animate__animated animate__flipInX">
                <h3 className='modal-text'>Är du säker på att du vill radera den här kommande händelsen?</h3>
                <div className="btn-group">
                    <Link to={'/events/' + userId}><button onClick={() => dispatch(deleteEventById(id))} className='btn yes'>JA</button></Link>
                    <button onClick={() => setShowModal(false)} className='btn no'>NEJ</button>
                </div>
            </div>
        </div>
    )
}

export default Modal