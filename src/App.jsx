import React, {useState, useEffect} from 'react'
import Appoitment from './components/Appoitment'
import Form from './components/Form'

const App = () => {



  let initialAppoitments = JSON.parse(localStorage.getItem('citas'))
  if(!initialAppoitments){
    initialAppoitments = []
  }

  const [citas, setCitas] = useState([initialAppoitments])


  const addAppointment = (cita) => {
    setCitas([
      ...citas, cita
    ])
  }

  useEffect(() =>{
    if(initialAppoitments){
      localStorage.setItem('citas', JSON.stringify(citas))
    }else{
      localStorage.setItem('citas', JSON.stringify([]))
    }
  }, [citas, initialAppoitments])

  const deleteAppoitement = (id) => {
      const newAppoitements = citas.filter(cita => cita.id !== id)
      setCitas(newAppoitements)
  }

  return (
    <>
    <h1>Appointment App</h1> 

    <div className="container">
      <div className="row">
        <div className="one-half column">
          <Form
          addAppointment={addAppointment}
          />
        </div>
        <div className="one-half column">
          {
            citas.length !==0 ? (
              <h2>Administra tus Citas</h2>

            ) :  (<h2>Agrega nueva Cita</h2>) 
          }
          {
            citas.map((cita) =>(
              <Appoitment
              key={cita.id}
              cita={cita}
              deleteAppoitement={deleteAppoitement}
              />
            ))
          }
        </div>
         

      </div>
    </div>
    </>
  )
}

export default App
