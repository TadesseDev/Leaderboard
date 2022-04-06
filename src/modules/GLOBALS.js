const GAME_ID = 'Rf84Q7Vwn3MEuSOsCWnw';
const getFetchUrl = id => `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`;
const getPostUrl = id => `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`;
export { GAME_ID, getFetchUrl, getPostUrl };