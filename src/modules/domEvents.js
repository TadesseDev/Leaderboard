import { getGameId } from './GLOBALS';
import { getGameData, saveNewScore } from './API.js';

const addFromEvent = () => {
  const addNewScore = document.getElementById('add-score');
  addNewScore.addEventListener('submit', (e) => {
    e.preventDefault();

    saveNewScore({
      user: e.target.elements[0].value,
      score: e.target.elements[1].value,
    });

    e.target.elements[0].value = '';
    e.target.elements[1].value = '';
  });
};

const addRefreshEvent = (updateDomWithScore) => {
  const refresh = document.getElementById('refresh');
  refresh.addEventListener('click', (e) => {
    e.preventDefault();
    getGameData(getGameId())
      .then((data) => updateDomWithScore(data.result))
      .catch((error) => { console.log(error); });
  });
};
export { addFromEvent, addRefreshEvent };