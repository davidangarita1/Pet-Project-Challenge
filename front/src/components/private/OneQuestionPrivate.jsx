const OneQuestionPrivate = ({ oneQuestion }) => {
    return (
        <div className='question'>
            <p>{oneQuestion.question}</p>
            <p>
                <span className="badge bg-secondary">{oneQuestion.category}</span>
                <span className="badge bg-success">{oneQuestion.type}</span>
            </p>
            {/* {onDelete && (
                <button className="button right" onClick={() => onDelete(question.id)}>DELETE</button>
            )} */}
        </div>
    )
}

export default OneQuestionPrivate