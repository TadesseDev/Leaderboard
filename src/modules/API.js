const getGameData = async (gameId) => {
  const result = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`, {
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

const initializeGame = () => {
  console.log('game found');
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "name": "TadesseAlemayehu learBoard"
    })
  }).then(res => {
    if (res.ok) {
      res.json().then(data => {
        const gameId = data.result.replaceAll('Game with ID:', "").replaceAll('added.', "").trim();
        console.log('game created with: ' + gameId);
        getGameData(gameId);
      });
    }
  }).catch(error => { console.log(error, 'fetch fail') });
}
export { getGameData, initializeGame };