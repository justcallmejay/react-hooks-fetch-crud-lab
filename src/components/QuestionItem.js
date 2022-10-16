import React from "react";

function QuestionItem({ question, onDeleteQuestion, onUpdateQuestion }) {

  const { id, prompt, answers, correctIndex } = question;

  console.log(answers)
  console.log(id)

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

//Delete db.json data to get program to run
function handleUpdate(e) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        correctIndex: parseInt(e.target.value)
      }),
    })
    .then((res) => res.json())
    .then((newQuestion) => onUpdateQuestion(newQuestion))
  }

function handleDelete() {
  fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    })
    .then((res) => res.json())
    .then(()=> onDeleteQuestion(question))
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleUpdate}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
