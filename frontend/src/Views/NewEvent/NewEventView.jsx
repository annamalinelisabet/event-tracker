import './NewEventView.css'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import axios from '../../axios'
import { useNavigate } from 'react-router-dom'
import TopNav from '../../Components/TopNav/TopNav'
import validation from '../../validation'

const NewEventView = () => {

    const navigate = useNavigate()
    const userId = useSelector(state => state.user.userId)
    const [newEvent, setNewEvent] = useState({
        title: '',
        description: '',
        date: ''
    })

    const [errors, setErrors] = useState({})

    const onChange = e => {
        setNewEvent(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async e => {
        e.preventDefault()
        setErrors(validation(newEvent))

        let token = localStorage.getItem('token')
        const res = await axios.post('events', newEvent, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        if(res.status === 201) {
            navigate('/events/' + userId)
        }
    }

  return (
    <div className='NewEvent'>
        <TopNav />
        <form onSubmit={handleSubmit} className='add-form animate__animated animate__backInDown'>
            <h1 className='form-title'>NY HÄNDELSE</h1>
            <div>
                <label htmlFor="title" id='title' className='input-text'>Rubrik:</label>
                <input type="text" name='title' className='input' onChange={onChange} value={newEvent.title}/>
                {errors.title && <small className='form-error'>{errors.title}</small>}
            </div>
            <div>
                <label htmlFor="description" title='description' className='input-text'>Beskrivning:</label>
                <textarea name="description" rows="6" className='input' onChange={onChange} value={newEvent.description}></textarea>
                {errors.description && <small className='form-error'>{errors.description}</small>}
            </div>
            <div className='date-time-group'>
                <label htmlFor="date" className='input-text' id='date'>Datum:</label>
                <input type="datetime-local" name='date' className='input' onChange={onChange} value={newEvent.date}/>               
                {errors.date && <small className='form-error'>{errors.date}</small>}
            </div>
            <button className='btn btn-save'>SPARA</button>
        </form>
    </div>
  )
}

export default NewEventView