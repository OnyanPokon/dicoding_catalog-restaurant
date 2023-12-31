import routes from '../routes/routes';
import UrlParser from '../routes/url_parser';
import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this.initialAppshell();
  }

  initialAppshell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
    const skipToContent = document.querySelector('.skip-link');
    skipToContent.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#main').focus();
    });
  }
}

export default App;
