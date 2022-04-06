import './main.css';
import { updateDomWithScore } from './modules/creatDom';
import { getGameData } from './modules/API';

getGameData().then((data) => { console.log(data); updateDomWithScore(data.result); })
  .catch((error) => console.log(error));
