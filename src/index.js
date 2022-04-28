import './main.scss';
import { updateDomWithScore } from './modules/DOMManger';
import { getGameData } from './modules/API';

getGameData().then((data) => updateDomWithScore(data.result))
  .catch((error) => console.log(error));
