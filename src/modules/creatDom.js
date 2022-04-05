const leadBoard = document.createElement('div');
leadBoard.setAttribute('id', 'lead-board-container');

const initialPageContent = `    <div id="page-container">
      <h1>LeaderBoard</h1>
      <section id="left">
        <div class="recent-score">
          <h1>Recent score</h1>
          <button type="submit" id="referesh">Refresh</button>
        </div>
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
        <form action="#" method="post">
          <input type="text" placeholder="Yor name" />
          <input type="text" placeholder="Yor score" />
          <button type="submit" class="add-score">Submit</button>
        </form>
      </section>
    </div>`
const createInitialDom = () => {
  document.body.insertAdjacentHTML("beforebegin", initialPageContent);
  console.log('function imported');
}

export { createInitialDom }; 