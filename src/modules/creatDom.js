import * as events from './domEvents';
import { initialPageContent } from './GLOBALS.js'
// body content as the template loaded
const createInitialDom = () => {
  document.body.insertAdjacentHTML('beforebegin', initialPageContent);
  return Promise.resolve(true);
};

const createScoreTile = (score) => {
  const li = document.createElement('li');
  li.innerHTML = ` 
              <p>
                <span class="name">${score.user}: </span> <span class="number">${score.score}</span>
              </p>
            `;
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
    const newScore = createScoreTile(score);
    scoreListContainer.appendChild(newScore);
  });
  if (scoreListContainer.childNodes.length < 1) {
    scoreListContainer.innerHTML = '<h1> you have no registered game yet</h1>';
  }
};

// events to trigger once once initial DOM content is loaded
createInitialDom().then((domReady) => {
  if (domReady) {
    events.addNewScoreEvent(updateDomWithScore);
    events.addRefreshEvent(updateDomWithScore);
  }
});

export { createInitialDom, updateDomWithScore };