import React from 'react';
import useFormData from '../../hooks/UseFormData'

const FormUsuario = ({ person, editProfile }) => {

    const { form, formData, updateFormData } = useFormData();

    const submitForm = (e) => {
        e.preventDefault();
        console.log(formData)
    }

    return (
        <div>
            <h1>Actualización de los datos personales</h1>

            <form ref={form} onSubmit={submitForm} onChange={updateFormData}>
                <label>Datos Personales</label>
                <input
                    name="nombre"
                    value={person.name}
                    onChange={updateFormData}
                    placeholder='Ingrese Nombre'
                />
                <input
                    name="apellido"
                    value={person.lastName}
                    onChange={updateFormData}
                    placeholder='Ingrese Pellido'
                />
                <button onClick={() => editProfile(false)} className="btn1 btn-dark" type="button">Actualizar</button>
            </form>
        </div>
    )

}

export default FormUsuario;