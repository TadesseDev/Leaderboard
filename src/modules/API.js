import { setGameId, getUrl } from './GLOBALS.js';

const getGameData = async (gameId) => {
  try {
    const result = await fetch(
      getUrl(gameId), {
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    },
    );
    if (result.ok) {
      console.log(`game fatch with: ${gameId}`);
      const data = await result.json();
      return data;
    }
  } catch (error) {
    return [];
  }
};

const initializeGame = async () => {
  if (localStorage.getItem('savedGame')) {
    return localStorage.getItem('savedGame');
    console.log("getting sved game");
  }
  try {
    const result = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'TadesseAlemayehu leaderBoard',
      }),
    });
    if (result.ok) {
      res.json().then((data) => {
        const gameId = data.result.replaceAll('Game with ID:', '').replaceAll('added.', '').trim();
        setGameId(gameId);
        localStorage.setItem('savedGame', String(GAME_ID));
        resolve(GAME_ID);
      });
    }
  } catch (error) {
    return null
  }
}

const saveNewScore = (data) => {
  fetch(getUrl(GAME_ID), {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(data),
  });
};
export { getGameData, initializeGame, saveNewScore };