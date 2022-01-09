import { Link } from "react-router-dom"

const OneQuestionPublic = ({question}) => {

    return(
        <div className='question'>
            <Link to={`/question/${question.id}`} className="button">
                {question.question}
            </Link>
            <p>
                <span className="badge bg-secondary">{question.category}</span>
                <span className="badge bg-success">{question.type}</span>
            </p>
        </div>
    )
}

export default OneQuestionPublic