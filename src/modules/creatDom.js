import { createInitialDom } from './GLOBALS.js'
import { getGameData, saveNewScore } from './API';

const createSingleScoreCard = (score) => {
  const li = document.createElement('li');
  li.innerHTML = `<p><span class="name">${score.user}: </span> <span class="number">${score.score}</span></p>`;
  return li;
};

// once score is ready, update the dom with the given list of scores
const updateDomWithScore = (scores) => {
  const scoreList = document.getElementById('score-list');
  const scoreListContainer = scoreList.getElementsByTagName('ul')[0];
  const count = document.getElementsByClassName('count')[0];
  count.innerHTML = `${scores.length} `;
  scoreList.classList.remove('loading');
  scores.forEach((score) => {
    const newScore = createSingleScoreCard(score);
    scoreListContainer.appendChild(newScore);
  });
  if (scoreListContainer.childNodes.length < 1) {
    scoreListContainer.innerHTML = '<h1> you have no registered game yet</h1>';
  }
};

// events to trigger once once initial DOM content is loaded
createInitialDom().then((domReady) => {
  if (domReady) {
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
    const refresh = document.getElementById('refresh');
    refresh.addEventListener('click', (e) => {
      e.preventDefault();
      const scoreList = document.getElementById('score-list');
      const scoreListContainer = scoreList.getElementsByTagName('ul')[0];
      scoreListContainer.innerHTML = '';
      scoreList.classList.add('loading');
      getGameData('tHhRUwU9PhkQBWkh4fwm')
        .then((data) => updateDomWithScore(data.result))
        .catch((error) => { console.log(error); });
    });
  }
});

export { updateDomWithScore };