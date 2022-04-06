import * as events from './domEvents.js';

const initialPageContent = `    <div id="page-container">
      <h1>LeaderBoard</h1>
      <section id="left">
        <h1 class="recent-score">
          Recent score
          <button type="submit" id="refresh">Refresh</button>
        </h1>
        <div id="score-list">
          <ul>
          <h1> loading user data</h1>
          </ul>
        </div>
      </section>
      <section id="right">
        <h1>Add your score</h1>
        <form action="#" method="post" id="add-score">
          <input type="text" placeholder="Yor name" />
          <input type="number" placeholder="Yor score" />
          <button type="submit" class="add-score">Submit</button>
        </form>
      </section>
    </div>`;
const createInitialDom = () => {
  document.body.innerHTML = '';
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

const updateDomWithScore = (scores) => {
  const scoreListContainer = document.getElementById('score-list').getElementsByTagName('ul')[0];
  scoreListContainer.innerHTML = '';
  scores.forEach((score) => {
    const newScore = createScoreTile(score);
    scoreListContainer.appendChild(newScore);
  });
  if (scoreListContainer.childNodes.length < 1) {
    scoreListContainer.innerHTML = '<h1> you have no registered game yet</h1>';
  }
};

createInitialDom().then((domReady) => {
  if (domReady) {
    events.addNewScoreEvent(updateDomWithScore);
    events.addRefreshEvent(updateDomWithScore);
  }
});

export { createInitialDom, updateDomWithScore };