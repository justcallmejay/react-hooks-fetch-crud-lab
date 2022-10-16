import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {

const [questions, setQuestions] = useState([])

//Display items
useEffect(() => {
  fetch('http://localhost:4000/questions')
  .then((res) => (res.json()))
  .then((questions) => setQuestions(questions));
}, []);

function handleDeleteQuestion(deleteQuestion) {
const deletedQuestion = questions.filter((question) => question.id !== deleteQuestion.id)
setQuestions(deletedQuestion)
}

function handleUpdateQuestion(updateQuestion) {
  const updatedQuestion = questions.map((question) => {
    if (question.id === updateQuestion.id) {
      return updateQuestion;
    } else {
      return question
    }
  });
  setQuestions(updatedQuestion)
}

console.log(questions)

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((questions, index) => {
          return (
        <QuestionItem 
        question={questions} key={index} onDeleteQuestion={handleDeleteQuestion} onUpdateQuestion={handleUpdateQuestion}/>
)})}
        </ul>
    </section>
  );
}

export default QuestionList;
