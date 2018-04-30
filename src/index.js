import _ from 'lodash';
import printMe from './print.js';

function component() {
    var element = document.createElement('div'); // Crea un elemento div
    var btn = document.createElement('button');
    // <Ya no!!> Lodash, currently included via a script, is required for this line to work
    // Ahora es importado
    element.innerHTML = _.join(['Hello', 'webpack'], ' '); 
    //  "Hello webpack"

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);

    return element;
  }
  
document.body.appendChild(component());