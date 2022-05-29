import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../Store/Actions/userActions'
import validation from '../../validation'

const RegisterView = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {loading, error} = useSelector(state => state.user)
  const user = useSelector(state => state.user.token)
  const userId = useSelector(state => state.user.userId)


  const [formData, setRegisterUser] = useState({
    firstName: '',
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({})

  useEffect(() => {
    if(user) {
      navigate('/events/' + userId)
    }
  }, [user, userId, navigate])

  const onChange = e => {
    setRegisterUser(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    setErrors(validation(formData))
    dispatch(registerUser(formData))
  }

  return (
    <div className='Login'>
        <form className='register-form' onSubmit={handleSubmit}>
            <div className="form-control">
                <h1 className='form-title'>REGISTRERA</h1>
                <div>
                  <label htmlFor="firstName" id='firstName' className='input-text'>Förnamn:</label>
                  <input className='input' value={formData.firstName} onChange={onChange} name='firstName' type="text" />
                  {errors.firstName && <small className='form-error login'>{errors.firstName}</small>}
                </div>
                <div>
                  <label htmlFor="email" id='email' className='input-text'>Email:</label>
                  <input className='input' value={formData.email} onChange={onChange} name='email' type="email"  />
                  {errors.email && <small className='form-error login'>{errors.email}</small>}
                </div>
                <div>
                  <label htmlFor="password" id='password' className='input-text'>Lösenord:</label>
                  <input className='input' value={formData.password} onChange={onChange} name='password' type="password"  />
                  {errors.password && <small className='form-error login'>{errors.password}</small>}
                </div>
            </div>
            <button className='btn btn-register'>{loading ? 'Laddar...' : 'SKAPA KONTO'}</button>
            { !errors.firstName && !errors.email && !errors.password && error && <small className='form-error login'>Emailen finns redan registrerad</small> }
        <Link to='/'><small className='register-text'>Tillbaka till inloggning</small></Link>
        </form>
    </div>
  )
}

export default RegisterView