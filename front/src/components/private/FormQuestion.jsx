import useFormData from '../../hooks/UseFormData'
import { postQuestion } from '../../app/middleware/payloadQuestions';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'

const FormQuestion = () => {

  const navigate = useNavigate();
  const state = useSelector(state => state.auth)

  const { form, formData, updateFormData } = useFormData();

  const submitForm = (e) => {
    e.preventDefault();
    
    postQuestion(formData, navigate)
    form.current.reset();

    swal({ title: "Pregunta guardada", text: "Click en el botón Ok!", icon: "success"});
  }

  return (
    <div disabled={!state.user}>
      <form ref={form} onSubmit={submitForm} onChange={updateFormData}>

        <label>Añadir nueva pregunta</label>

        <input required name="question" type="text" placeholder='Ingresa aqui una pregunta'></input>
        <input required name="userId" hidden type="text" defaultValue={state.user.uid} placeholder='Ingresa un userId'></input>
        <input  required name="email" hidden type="text" defaultValue={state.user.email} placeholder='Ingresa aqui un email aqui'></input>

        <label className=" font-medium">Tipo</label>
        <select required className="" name="type" defaultValue="OPEN">
          <option disabled type="String" value="">Tipo</option>
          <option value="OPEN">Abierta</option>
          <option value="OPINION">Opinion</option>
          <option value="WITH_RESULT">Con resultado</option>
          <option value="WITH_EVIDENCE">Con evidencia</option>
        </select>

        <label className=" font-medium">Categoria</label>
        <select required name="category" defaultValue="TECHNOLOGY_AND_COMPUTER" className="">
          <option type="String" value="TECHNOLOGY_AND_COMPUTER">Tecnologia y computación</option>
          <option type="String" value="SCIENCES">Ciencias</option>
          <option type="String" value="SOFTWARE_DEVELOPMENT">Desarrollo de software</option>
          <option type="String" value="SOCIAL_SCIENCES">Ciencias Sociales</option>
          <option type="String" value="LANGUAGE">Lenguaje</option>
        </select>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )

}

export default FormQuestion