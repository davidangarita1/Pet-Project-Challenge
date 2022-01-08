import { useDispatch, useSelector } from "react-redux"
import { Fragment, useEffect } from "react"
import { getUserQuestion, deleteQuestion } from "../../app/middleware/payloadQuestions"
import QuestionsPrivate from "../../components/private/QuestionsPrivate"

const MyQuestions = () => {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.auth)
    const {
        isLoading,
        myQuestions,
        error
    } = useSelector(state => state.myQuestion)

    useEffect(() => {
        dispatch(getUserQuestion(user.uid));
    }, [user, dispatch]);

    const deleteQuestions=(id)=>{
        dispatch(deleteQuestion(id))
    }  

    return (
        <Fragment>
            {myQuestions
                ? (myQuestions.length > 0
                    ? myQuestions.map((question) => {
                        return (
                            <QuestionsPrivate key={question.id} question={question} deleteQuestion={deleteQuestions} />
                        )
                    })
                    : <p>No hay preguntas para mostrar</p>)
                : null}
            {isLoading && <h1>Cargando...</h1>}
            {error && <h1> Error {error} </h1>}
        </Fragment>
    )
}

export default MyQuestions
