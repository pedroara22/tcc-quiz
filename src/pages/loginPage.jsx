import React, { useState } from 'react'
import AvisoDeErro from '../components/avisoDeErro'
import AvisoDeSucesso from '../components/avisoDeSucesso'

export default function LoginPage() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username === 'admin' && password === 'admin') {
      setError('')
      setSuccess('Login successful. Redirecting...')
      setTimeout(() => {
        window.location.href = '/app'
      }, 1000)
        
    } else {
      setError('Invalid username or password')
    }
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  return (
    <div id='loginFormDiv'>
      <h1>Login Page Form</h1>
        <label>
          Username:
          <input type="text" name="username" onChange={handleUsernameChange}/>
        </label>
        <label>
          Password:
          <input type="password" name="password" onChange={handlePasswordChange}/>
        </label>
        <button type="submit" onClick={handleSubmit} >Login</button>
        {success?<AvisoDeSucesso aviso={success} />: null}
        {error?<AvisoDeErro aviso={error} /> : null}
    </div>
  )
}