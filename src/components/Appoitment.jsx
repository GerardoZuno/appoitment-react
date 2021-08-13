import React from "react";
import PropTypes from 'prop-types'


function Appoitment({cita, deleteAppoitement}) {

  return (
    <div className="cita">
      <p>Mascota: <span>{cita.mascota} </span></p>
      <p>Propietario: <span>{cita.propietario} </span></p>
      <p> Fecha: <span>{cita.fecha} </span> </p>
      <p>  Hora: <span>{cita.hora} </span> </p>
       <p> Sintomas: <span>{cita.sintomas} </span> </p>
       <button 
       className="button eliminar u-full-width"
       onClick={() =>deleteAppoitement(cita.id)}
       >
        Eliminar &times;
       </button>



      
    </div>
  );
}


Appoitment.propTypes = {
    deleteAppoitement: PropTypes.func.isRequired,
    cita: PropTypes.object.isRequired

}
export default Appoitment;
