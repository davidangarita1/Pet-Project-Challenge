import { Link } from "react-router-dom"

const QuestionsPublic = ({question}) => {  

    return(
        <div className='question'>
            <Link to={`/question/${question.id}`} className="button">
                {question.question}
            </Link>
            <p>
                <span class="badge bg-secondary">{question.category}</span>
                <span class="badge bg-success">{question.type}</span>
            </p>
        </div>
    )
}

export default QuestionsPublic