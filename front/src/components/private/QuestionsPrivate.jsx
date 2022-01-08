import { Link } from "react-router-dom"

const QuestionsPrivate = ({ question, deleteQuestion }) => {

    return (
        <div className='question'>
            <Link to={`/private/question/${question.id}`} className="button">
                {question.question}
            </Link>
            <p>
                <span className="badge bg-secondary">{question.category}</span>
                <span className="badge bg-success">{question.type}</span>
            
            {deleteQuestion && (
                <button className="button" onClick={() => deleteQuestion(question.id)}>DELETE</button>
            )}
            </p>
            

        </div>
    )
}

export default QuestionsPrivate