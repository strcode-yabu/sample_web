'use strict';

{
  const buttonNaviOpen = document.getElementById('navi_button__open');
  const buttonNaviClose = document.getElementById('navi_button__close');
  const dialogNaviMenu = document.getElementById('navi_menu');

  buttonNaviOpen.addEventListener('click', () => {
    dialogNaviMenu.showModal();
  });

  buttonNaviClose.addEventListener('click', () => {
    dialogNaviMenu.close();
  });

  dialogNaviMenu.addEventListener('click', event => {
    if (event.target === dialogNaviMenu) {
      dialogNaviMenu.close();
    }
  });

  for (const link of dialogNaviMenu.querySelectorAll('a[href]')) {
    link.addEventListener('click', () => {
      dialogNaviMenu.close();
    });
  }
}
