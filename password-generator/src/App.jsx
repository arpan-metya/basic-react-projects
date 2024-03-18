import { useState, useEffect, useCallback, useRef } from 'react'
import { GeneratePassword } from "js-generate-password";
import PassGen from './PassGen'

export default function App() {
  const [password, setPassword] = useState('')
  const [config, setConfig] = useState({
    length: 8,
    symbols: false,
    numbers: false
  })
  const passwordRef = useRef(null)

  const passwordGenerate = useCallback(() => {
    setPassword(GeneratePassword(config))
  }, [config, setPassword])

  useEffect(() => {
    passwordGenerate()
  }, [config, passwordGenerate])

  const handleClick = useCallback((evt) => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  const handlePassword = (evt) => {
    setPassword(evt.target.value)
  }

  const handleConfig = (evt) => {
    const newConfig = {
      [evt.target.name]: evt.target.type === 'checkbox' ?
        evt.target.checked : evt.target.value
    }
    setConfig(oldConfig => ({ ...oldConfig, ...newConfig }))
  }


  return (
    <div className='flex flex-col items-center gap-10 mt-7'>
      <h1 className='text-4xl'>Password Generator</h1>
      <PassGen
        config={config}
        password={password}
        passwordRef={passwordRef}
        handleClick={handleClick}
        handlePassword={handlePassword}
        handleConfig={handleConfig} />
    </div>
  )
}
