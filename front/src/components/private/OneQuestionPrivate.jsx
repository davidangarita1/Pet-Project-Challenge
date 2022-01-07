const OneQuestionPrivate = ({oneQuestion}) => {

    return(
        <div className='question'>
            <p>{oneQuestion.category}  - <small>{oneQuestion.type}</small></p>
            <p>{oneQuestion.question}</p>
            {/* {onDelete && (
                <button className="button right" onClick={() => onDelete(question.id)}>DELETE</button>
            )} */}
        
        </div>
    )
}

export default OneQuestionPrivate