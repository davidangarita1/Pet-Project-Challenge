import { useSelector } from 'react-redux';

const ViewAnswer = ({ answer, deleteAnswer }) => {
    const state = useSelector(state => state.auth)

    return (
        <div className='question'>
            <p>{answer.answer}</p>
            <div>
                {state.user.uid === answer.userId ? (deleteAnswer && (
                    <button className="button right" onClick={() => deleteAnswer(answer.id)}>DELETE</button>
                )) : null}
            </div>

        </div>
    )
}

export default ViewAnswer