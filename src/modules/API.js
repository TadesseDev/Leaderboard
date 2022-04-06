import { GAME_ID, getFetchUrl, getPostUrl } from './GLOBALS.js';

const getGameData = async () => {
  try {
    const result = await fetch(
      getFetchUrl(GAME_ID), {
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    },
    );
    if (result.ok) {
      const data = await result.json();
      return data;
    }
    else
      return { result: [] };
  } catch (error) {
    console.log('fant featch data', error);
    return { result: [] };
  }
};
const saveNewScore = data => {
  fetch(getPostUrl(GAME_ID), {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(data),
  });
};
export { getGameData, saveNewScore };