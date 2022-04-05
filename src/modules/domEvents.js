import { saveNewScore } from './API.js'
const addFromEvent = () => {
  const addNewScore = document.getElementById('add-score');
  addNewScore.addEventListener('submit', function (e) {
    e.preventDefault();

    saveNewScore({
      "user": e.target.elements[0].value,
      "score": e.target.elements[1].value
    });

    e.target.elements[0].value = "";
    e.target.elements[1].value = "";
    console.log('cant submit')
  });
}

export { addFromEvent }