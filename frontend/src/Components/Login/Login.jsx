import './Login.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../Store/Actions/userActions'
import validation from '../../validation'

const Login = () => {

  const dispatch = useDispatch()
  const { loading, error } = useSelector(state => state.user)

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({})

  const onChange = e => {
    setFormData(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    setErrors(validation(formData))
    dispatch(loginUser(formData))
  }

  return (
    <div className='Login'>
        <form className='login-form' onSubmit={handleSubmit}>
            <div className="form-control">
                <input className='input' value={formData.email} onChange={onChange} name='email' type="email" placeholder='Email' />
                {errors.email && <small className='form-error login'>{errors.email}</small>}
                <input className='input' value={formData.password} onChange={onChange} name='password' type="password" placeholder='Lösenord' />
                {errors.password && <small className='form-error login'>{errors.password}</small>}
            </div>
            <button className='btn btn-login'>{loading ? 'Laddar...' : 'LOGGA IN'}</button>
            { !errors.email && !errors.password && error && <small className='form-error login'>Du har fyllt i fel email eller lösenord</small> }
        <Link to='/register'><small className='register-text'>Skapa konto</small></Link>
        </form>
    </div>
  )
}

export default Login