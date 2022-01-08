import React, { useState } from 'react';
import useFormData from '../../hooks/UseFormData'
import { postAnswer } from '../../app/middleware/payloadQuestions';
import { useSelector, useDispatch } from 'react-redux';

const FormAnswer = ({ idQuestion }) => {

    const dispatch = useDispatch();
    const state = useSelector(state => state.auth)
    const { form, formData, updateFormData } = useFormData()
    const [alert, setAlert] = useState(false)

    const validator = (e) => {
        e.preventDefault()
        formData.answer.length < 15 ? setAlert(true) : submitForm()
    }

    const submitForm = () => {
        setAlert(false)
        dispatch(postAnswer(formData))
        form.current.reset()
    }

    return (
        <div>
            <form ref={form} onSubmit={validator} onChange={updateFormData}>
                <h1>Respuestas</h1>
                <label>Añade tu respuesta.</label>
                <input required name="answer" type="text" placeholder='Ingresa aqui una respuesta'></input>
                <input hidden name="userId" type="text" defaultValue={state.user.uid} ></input>
                <input hidden name="questionId" type="text" defaultValue={idQuestion} ></input>
                {alert && <div className="alert alert-danger" role="alert">El mensaje debe tener mas de 15 caracteres.</div>}
                <button type="submit">Enviar Respuesta</button>
            </form>
        </div>

    )

}

export default FormAnswer