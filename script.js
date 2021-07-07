const photo = document.querySelector('.gallery');

photo.addEventListener('click', (e) => {
  const activeElement = document.querySelector('.gallery__photo--active');
  const clickedElement = e.target.closest('div');
  const mainText = clickedElement.querySelector('.gallery__text-content--main');

  if (activeElement === clickedElement) {
    return;
  }

  setTimeout(() => {
    mainText.style.margin = '100px 0';
  }, 300);

  clickedElement.classList.add('gallery__photo--active');

  if (activeElement) {
    const activeText = activeElement.querySelector('.gallery__text-content--main');

    activeElement.classList.add('gallery__photo--deactive');
    activeText.style.margin = '500px 0';

    setTimeout(() => {
      activeElement.classList.remove('gallery__photo--deactive');
      activeElement.classList.remove('gallery__photo--active');
    }, 500);
  }
});
