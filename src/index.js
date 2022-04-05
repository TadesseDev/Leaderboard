import './main.css';
import './modules/creatDom.js';
import { getGameData, initializeGame } from './modules/API.js'
initializeGame().then(gameId => getGameData(gameId), (error => console.log(error)));;
