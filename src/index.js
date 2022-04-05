import './main.css';
import { updateDomWithScore } from './modules/creatDom.js';
import { getGameData, initializeGame } from './modules/API.js'
initializeGame()
  .then(gameId => getGameData(gameId), (error => console.log(error)))
  .then(data => updateDomWithScore(data.result));
