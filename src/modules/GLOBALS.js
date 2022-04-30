const GAME_ID = 'Rf84Q7Vwn3MEuSOsCWnw';
const getFetchUrl = (id) => `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`;
const getPostUrl = (id) => `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`;
const createInitialDom = () => {
  document.body.insertAdjacentHTML('beforebegin', `<div id="page-container">
      <h1>Leader Board</h1>
      <section id="left">
        <h1 class="recent-score">
          Recent scores
          <button type="submit" id="refresh"><span class="count">0 </span><span class="icon"><span></button>
        </h1>
        <div id="score-list" class="loading">
          <ul>
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
      <footer>
      <h3> Leader Board project <h3>
      <h5>By, Tadesse Alemayehu </h5>
      </footer>
    </div>`);
  return Promise.resolve(true);
};
// export { GAME_ID, getFetchUrl, getPostUrl, createInitialDom };
module.exports = getFetchUrl;