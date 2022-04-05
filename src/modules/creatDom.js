
import * as events from './domEvents.js';
const initialPageContent = `    <div id="page-container">
      <h1>LeaderBoard</h1>
      <section id="left">
        <h1 class="recent-score">
          Recent score
          <button type="submit" id="referesh">Refresh</button>
        </h1>
        <div id="score-list">
          <ul>
            <li>
              <p>
                <span class="name">Name: </span> <span class="number">100</span>
              </p>
            </li>
            <li>
              <p>
                <span class="name">Name: </span> <span class="number">20</span>
              </p>
            </li>
            <li>
              <p>
                <span class="name">Name: </span> <span class="number">50</span>
              </p>
            </li>
            <li>
              <p>
                <span class="name">Name: </span> <span class="number">78</span>
              </p>
            </li>
            <li>
              <p>
                <span class="name">Name: </span>
                <span class="number">12.5</span>
              </p>
            </li>
            <li>
              <p>
                <span class="name">Name: </span> <span class="number">77</span>
              </p>
            </li>
            <li>
              <p>
                <span class="name">Name: </span> <span class="number">42</span>
              </p>
            </li>
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

createInitialDom().then(domReady => {
  if (domReady) {
    events.addFromEvent();
  }
});

export default createInitialDom;