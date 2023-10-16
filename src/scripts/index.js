import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import App from './views/app';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#main'),

});

console.log('working entry');
