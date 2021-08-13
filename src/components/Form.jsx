import React from 'react'

function Form() {
    return (
        <div>
            <h2>Crear Cita</h2>
            <form >
              <label htmlFor="">Nombre Mascota</label>
              <input 
              type="text"
              name="mascota"
              className="u-full-width"
              placeholder="Nombre de Mascota"
               />

             <label htmlFor="">Nombre del Propietario</label>
              <input 
              type="text"
              name="mascota"
              className="u-full-width"
              placeholder="Nombre del Propietario"
               /> 

             <label htmlFor="">Fecha</label>
              <input 
              type="date"
              name="fecha"
              className="u-full-width"
               /> 

              <label htmlFor="">Hora</label>
              <input 
              type="time"
              name="hora"
              className="u-full-width"
               /> 

            <label htmlFor="">Sintomas</label>
              <textarea 
              className="u-full-width"
              name="sintomas"
              id=""
              cols="30"
              rows="10">

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
