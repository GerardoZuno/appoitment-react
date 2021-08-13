import React from 'react'
import {v4 as uuid} from "uuid";


function Form({addAppointment}) {

    const [cita, setCita] = React.useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: '',

    })
    const {mascota, propietario, fecha, hora, sintomas} = cita

    const [error, setError] = React.useState(false)


    const handleChange = (e) => {
          setCita({
              ...cita,
              [e.target.name]: e.target.value

          })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!mascota.trim() || !propietario.trim() || !fecha.trim() || !hora.trim() || !sintomas.trim()){
             setError(true)
             console.log(error)
             return
        }
        setError(false)

        cita.id = uuid()
        addAppointment(cita)
        setCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: '',
    
        })
    }

    return (
        <div>
            <h2>Crear Cita</h2>

            {
                error ? (
                    <p className="alerta-error">
                        Error: Todos los campos son obligatorios 
                    </p>
                )    : null
            }
            <form onSubmit={handleSubmit}>
              <label htmlFor="">Nombre Mascota</label>
              <input 
              type="text"
              name="mascota"
              className="u-full-width"
              placeholder="Nombre de Mascota"
              onChange={handleChange}
              value={mascota}
               />

             <label htmlFor="">Nombre del Propietario</label>
              <input 
              type="text"
              name="propietario"
              className="u-full-width"
              placeholder="Nombre del Propietario"
              onChange={handleChange}
              value={propietario}

               /> 

             <label htmlFor="">Fecha</label>
              <input 
              type="date"
              name="fecha"
              className="u-full-width"
              onChange={handleChange}
              value={fecha}

               /> 

              <label htmlFor="">Hora</label>
              <input 
              type="time"
              name="hora"
              className="u-full-width"
              onChange={handleChange}
              value={hora}

               /> 

            <label htmlFor="">Sintomas</label>
              <textarea 
              className="u-full-width"
              name="sintomas"
              id=""
              cols="30"
              rows="10"
              onChange={handleChange}
              value={sintomas}
              >

               </textarea>

               <button
               type="submit"
               className="u-full-width button-primary"
               
               >Agregar Cita
               </button>

            </form>
        </div>
    )
}

export default Form
