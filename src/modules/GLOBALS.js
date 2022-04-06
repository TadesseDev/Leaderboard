let GAME_ID = null;
const getGameId = () => GAME_ID;
const setGameId = (id) => { GAME_ID = id; };
const getUrl = (id) => `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`;
export { getGameId, setGameId, getUrl };