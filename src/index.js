import './main.css';
import createInitialDom from './modules/creatDom.js';
import { getGameData, initializeGame } from './modules/API.js'

createInitialDom();
initializeGame();