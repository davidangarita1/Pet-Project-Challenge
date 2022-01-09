import React, { Fragment } from 'react';
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { loadAllQuestion } from '../../app/middleware/payloadQuestions';
import QuestionPublic from '../../components/public/QuestionsPublic';

const QuestionsPagePublic = () => {
    const dispatch = useDispatch()
    const { isLoading, questions, error } = useSelector(state => state.question)


    useEffect(() => {
        dispatch(loadAllQuestion())
    }, [dispatch])


    return (
        <Fragment>
            {questions && questions.map((question) => {
                return (
                    <QuestionPublic key={question.id} question={question} />
                )})}
            {isLoading && <h1>Cargando...</h1>}
            {error && <h1>Error {error}</h1>}
        </Fragment>
    )
}

export default QuestionsPagePublic
