const PHOTO = document.querySelector('.gallery');

PHOTO.addEventListener('click', (e) => {
  const ACTIVE_ELEMENT = document.querySelector('.gallery__photo--active');
  const CLICKED_ELEMENT = e.target.closest('div');
  const MAIN_TEXT = CLICKED_ELEMENT.querySelector('.gallery__text-content--main');

  if (ACTIVE_ELEMENT === CLICKED_ELEMENT) {
    return;
  }

  setTimeout(() => {
    MAIN_TEXT.style.margin = '100px 0';
  }, 300);

  CLICKED_ELEMENT.classList.add('gallery__photo--active');

  if (ACTIVE_ELEMENT) {
    const ACTIVE_TEXT = ACTIVE_ELEMENT.querySelector('.gallery__text-content--main');

    ACTIVE_ELEMENT.classList.add('gallery__photo--deactive');
    ACTIVE_TEXT.style.margin = '500px 0';

    setTimeout(() => {
      ACTIVE_ELEMENT.classList.remove('gallery__photo--deactive');
      ACTIVE_ELEMENT.classList.remove('gallery__photo--active');
    }, 500);
  }
});
