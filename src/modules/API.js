import { GAME_ID, setGameId, getUrl } from './GLOBALS.js'
const getGameData = async (gameId) => {
  const result = await fetch(
    getUrl(gameId), {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (result.ok) {
    console.log('game fatch with: ' + gameId);
    const data = await result.json();
    console.log(data.result);
  }
  else
    result.json().then(data => { console.log(data.result) })
}

const initializeGame = () => new Promise((resolve, reject) => {
  if (localStorage.getItem('savedGame')) {
    setGameId(localStorage.getItem('savedGame'))
    resolve(GAME_ID);
    return;
  }
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "name": "TadesseAlemayehu leaderBoard"
    })
  }).then(res => {
    if (res.ok) {
      res.json().then(data => {
        const gameId = data.result.replaceAll('Game with ID:', "").replaceAll('added.', "").trim();
        setGameId(gameId);
        console.log('game created with: ' + GAME_ID);
        localStorage.setItem('savedGame', String(GAME_ID));
        resolve(GAME_ID);
      });
    }
  }).catch(error => { reject(error) });
});

const saveNewScore = data => {
  fetch(getUrl(GAME_ID), {
    method: 'POST',
    mode: 'cors',
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data)
  })
}
export { getGameData, initializeGame, saveNewScore };