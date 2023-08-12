import { useState } from 'react'
import BodyNewsLetter from './components/BodyNewsLetter.jsx'
import ThanksNewsLetter from './components/ThanksNewLetter.jsx'
import FormDetail from './components/FormDetail.jsx'




export default function App() {
  const [ email, setEmail] = useState('')
  const [open, setOpen] = useState(true)
  const [error, setError] = useState(false)



  function handleSubmit(e){
    e.preventDefault()
    if(!email) {
      setError(true)
      return;
    }
    if(!email.includes('.')){
      setError(true)
      return;
    };
    if(!email.includes('@')) {
      setError(true)
      return;
    }
    // const error = !email.includes('@') || !email.includes('.')
    
    onSubmit()
    

  }

  function onSubmit(){
    setOpen(false)
  }
  
  return (
      <div>
        {open && <BodyNewsLetter>
                  <FormDetail
                  handleSubmit={handleSubmit} 
                  email={email}
                  error={error} 
                  setEmail= {setEmail}
                  setError={setError}/>
                </BodyNewsLetter>}
        {!open && <ThanksNewsLetter email={email}/>}
      </div>
    )
  }
  
  










