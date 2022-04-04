import _ from 'lodash';
import './main.css';
function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());