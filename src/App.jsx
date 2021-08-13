import React from 'react'
import Form from './components/Form'

const App = () => {
  return (
    <>
    <h1>Appointment App</h1> 

    <div className="container">
      <div className="row">
        <div className="one-half column">
          <Form />
        </div>
        <div className="one-half column"></div>
         

      </div>
    </div>
    </>
  )
}

export default App
