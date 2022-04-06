import * as events from './domEvents';
// body content as the template loaded
const initialPageContent = `    <div id="page-container">
      <h1>LeaderBoard</h1>
      <section id="left">
        <h1 class="recent-score">
          Recent score
          <button type="submit" id="refresh"><span class="count">0 </span><span class="icon"><span></button>
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
          <input type="text" placeholder="Yor name" required/>
          <input type="number" placeholder="Yor score" required/>
          <button type="submit" class="add-score">Submit</button>
        </form>
      </section>
    </div>`;
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
  const scoreListContainer = document.getElementById('score-list').getElementsByTagName('ul')[0];
  const count = document.getElementsByClassName('count')[0];
  count.innerHTML = scores.length + " ";
  console.log(count);
  scoreListContainer.innerHTML = '';
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