const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._togleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _togleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('slide');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('slide');
  },

};

export default DrawerInitiator;
