import { Link } from "react-router-dom"

const QuestionsPublic = ({ question }) => {

    return (
        <div className='question'>
            <div className="card mb-2">
                <div className="card-body">
                    <div className="row">
                        <Link to={`question/${question.id}`}>
                            <h3>{question.question}</h3>
                        </Link>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <span className="badge bg-secondary">{question.category}</span>
                            <span className="badge bg-success">{question.type}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestionsPublic