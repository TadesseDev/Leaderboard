import './main.css';
import createInitialDom from './modules/creatDom.js';
import { getGameData, initializeGame } from './modules/API.js'

createInitialDom();
initializeGame().then(gameId => getGameData(gameId), (error => console.log(error)));;
