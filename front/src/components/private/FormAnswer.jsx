import useFormData from '../../hooks/UseFormData'
import { postAnswer } from '../../app/middleware/payloadQuestions';
import { useSelector } from 'react-redux';

const FormAnswer = ({idQuestion}) => {

    const state =useSelector(state=>state.auth)

    const{form, formData, updateFormData} = useFormData();

    const submitForm = (e) => {
        e.preventDefault();
        postAnswer(formData)
      }

    return(

        <div>
            <form ref={form} onSubmit={submitForm} onChange={updateFormData}>
                <h1>Respuestas</h1>
                <label>Añade tu respuesta.</label>
                <input required name="answer" type="text" placeholder='Ingresa aqui una respuesta'></input>
                <input hidden name="userId" type="text" value={state.user.uid} ></input>
                <input hidden name="questionId" type="text" value={idQuestion} ></input>
                <button type="submit">Enviar Respuesta</button>
            </form>
        </div>

    )

}

export default FormAnswer