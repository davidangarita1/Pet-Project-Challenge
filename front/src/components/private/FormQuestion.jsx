import useFormData from '../../hooks/UseFormData'
import { postQuestion } from '../../app/middleware/payloadQuestions';
import { useSelector } from 'react-redux';


const FormQuestion = () => {

    const state =useSelector(state=>state.auth)

    const{form, formData, updateFormData} = useFormData();

    const submitForm = (e) => {
        e.preventDefault();
        postQuestion(formData)
      }

    return(
        <div>
            <h1>Este es un fomulario de preguntas.</h1>

            <form ref={form} onSubmit={submitForm} onChange={updateFormData}>
                <label>Añadir nueva pregunta</label>
                <input required name="question" type="text" placeholder='Ingresa aqui una pregunta'></input>
                <input  required name="userId" hidden type="text" value={state.user.uid} placeholder='Ingresa aqui una pregunta'></input>
                <label className=" font-medium">Tipo</label>
                <select required className="" name="type" defaultValue="Type">
                  <option disabled type="String" value="">Tipo</option>
                  <option type="OPEN">Abierta</option>
                  <option type="OPINION">Opinion</option>
                  <option type="WITH_RESULT">Con resultado</option>
                  <option type="WITH_EVIDENCE">Con evidencia</option>
                </select>
                <label className=" font-medium">Categoria</label>
                <select required name="category"  defaultValue="Category"className="">
                  <option disabled type="Category"  value="">Categoria</option>
                  <option type="TECHNOLOGY_AND_COMPUTER">Tecnologia y computación</option>
                  <option type="SCIENCES">Ciencias</option>
                  <option type="SOFTWARE_DEVELOPMENT">Desarrollo de software</option>
                  <option type="SOCIAL_SCIENCES">Ciencias Sociales</option>
                  <option type="LANGUAGE">Lenguaje</option>
                </select>
                <button type="submit">Enviar</button>
            </form>

        </div>
    )

}

export default FormQuestion