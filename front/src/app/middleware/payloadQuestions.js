import { questionsLoading, questionsLoadSuccess, questionsLoadError } from "../../actions/QuestionsActions";
import { oneQuestionLoadSuccess, oneQuestionLoadError, oneQuestionsLoading, oneQuestionsDeleteAnswer } from "../../actions/OneQuestionActions";
import { myQuestionsLoadSucces, myQuestionsLoading, myQuestionsLoadError, myQuestionDelete } from "../../actions/MyQuestionsActions";
import axios from "axios";

const API_URL = "http://localhost:4003";

export const loadAllQuestion = () => (dispatch) => {

  dispatch(questionsLoading())

  const options = {
    method: 'GET',
    url: `${API_URL}/questions/getAll`,
    headers: { 'Content-Type': 'application/json' }
  };

  axios.request(options).then(function (response) {
    dispatch(questionsLoadSuccess(response.data))
  }).catch(function (error) {
    dispatch(questionsLoadError(error.message))
  });
}


export const loadById = (id) => (dispatch) => {

  dispatch(oneQuestionsLoading())

  const options = {
    method: 'GET',
    url: `${API_URL}/questions/get/${id}`,
    headers: { 'Content-Type': 'application/json' }
  };

  axios.request(options).then(function (response) {
    dispatch(oneQuestionLoadSuccess(response.data))
  }).catch(function (error) {
    dispatch(oneQuestionLoadError(error.message))
  });
}


export const postQuestion = (question, navigate) => {

  const options = {
    method: 'POST',
    url: `${API_URL}/questions/create`,
    headers: { 'Content-Type': 'application/json' },
    data: question
  };

  axios.request(options).then(function (response) {
    navigate("/private/MyQuestions")
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
}


export const postAnswer = (answer) => (dispatch) => {

  const options = {
    method: 'POST',
    url: `${API_URL}/answer/add`,
    headers: { 'Content-Type': 'application/json' },
    data: answer
  };

  axios.request(options).then(function (response) {
    console.log(response.data);
    dispatch(oneQuestionLoadSuccess(response.data))
  }).catch(function (error) {
    console.error(error);
  });
}

export const deleteQuestion = (id) => (dispatch) => {
  dispatch(myQuestionsLoading())

  const options = {
    method: 'DELETE',
    url: `${API_URL}/questions/delete/${id}`
  };

  axios.request(options).then(function (response) {
    dispatch(myQuestionDelete(id))
  }).catch(function (error) {
    console.error(error);
  });
}

export const deleteAnswer = (id) => (dispatch) => {
  dispatch(oneQuestionsLoading())

  const options = {
    method: 'DELETE',
    url: `${API_URL}/answer/delete/${id}`
  };

  axios.request(options).then(function (response) {
    dispatch(oneQuestionsDeleteAnswer(id))
  }).catch(function (error) {
    dispatch(oneQuestionLoadError(error.message))
  });
}

export const getUserQuestion = (userId) => (dispatch) => {

  dispatch(myQuestionsLoading())

  const options = {
    method: 'GET',
    url: `${API_URL}/questions/getOwnerAll/${userId}`,
    headers: { 'Content-Type': 'application/json' }
  };
  axios.request(options).then(function (response) {
    dispatch(myQuestionsLoadSucces(response.data));
  }).catch(function (error) {
    dispatch(myQuestionsLoadError(error.message));
  });
}

export const getQuestionsByCategory = (category) => (dispatch) => {

  dispatch(myQuestionsLoading())

  const options = {
    method: 'GET',
    url: `${API_URL}/questions/filterCategory/${category}`,
    headers: { 'Content-Type': 'application/json' }
  };
  axios.request(options).then(function (response) {
    dispatch(myQuestionsLoadSucces(response.data));
  }).catch(function (error) {
    dispatch(myQuestionsLoadError(error.message));
  });
}