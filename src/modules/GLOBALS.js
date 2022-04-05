let GAME_ID = null;
const setGameId = (id) => { GAME_ID = id; };
const getUrl = (id) => `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`;
export { GAME_ID, setGameId, getUrl };