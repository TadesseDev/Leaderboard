import { getGameData, saveNewScore } from './API';

// set add new score form event
const addNewScoreEvent = () => {
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

// set the refresh button event
const addRefreshEvent = (updateDomWithScore) => {
  const refresh = document.getElementById('refresh');
  refresh.addEventListener('click', (e) => {
    e.preventDefault();
    const scoreList = document.getElementById('score-list');
    const scoreListContainer = scoreList.getElementsByTagName('ul')[0];
    scoreListContainer.innerHTML = "";
    scoreList.classList.add('loading');
    getGameData('tHhRUwU9PhkQBWkh4fwm')
      .then((data) => updateDomWithScore(data.result))
      .catch((error) => { console.log(error); });
  });
};
export { addNewScoreEvent, addRefreshEvent };