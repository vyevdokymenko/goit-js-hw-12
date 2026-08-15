import { getImagesByQuery } from './js/pixabay-api.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import spriteUrl from './img/sprite.svg';
import { clearGallery, createGallery, hideLoader, showLoader } from './js/render-functions.js';

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  clearGallery();
  showLoader();

  const searchText = form.elements['search-text'].value.trim();
  if (!searchText) {
    hideLoader();
    form.reset();
    return;
  }

  getImagesByQuery(searchText)
    .then(data => {
      const images = data.hits;
      if (images.length === 0) {
        throw new Error('Sorry, there are no images matching your search query. Please try again!');
      }
      hideLoader();
      createGallery(images);
    })
    .catch(error => {
      hideLoader();
      iziToast.show({
        titleColor: '#FFFFFF',
        message: error.message,
        messageColor: '#FFFFFF',
        position: 'topRight',
        transitionIn: 'fadeIn',
        animateInside: false,
        backgroundColor: '#ef4040',
        color: '#fff',
        icon: 'toast-icon',
        class: 'snackbar-toast',
        progressBarColor: '#b51b1b',
        maxWidth: '432px',
        onOpening(instance, toast) {
          const icon = toast.querySelector('.iziToast-icon');
          icon.innerHTML = `
            <svg width="24" height="24" aria-hidden="true">
              <use href="${spriteUrl}#x-octagon"></use>
            </svg>
          `;
        },
      });
    })
    .finally(() => form.reset());
});