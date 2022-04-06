import './main.css';
import { updateDomWithScore } from './modules/creatDom.js';
import { getGameData } from './modules/API.js';


getGameData().then((data) => { console.log(data); updateDomWithScore(data.result) })
  .catch(error => console.log(error));
