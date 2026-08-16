import {getImagesByQuery, IMAGES_PER_PAGE} from './js/pixabay-api.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import spriteUrl from './img/sprite.svg';
import {
  clearGallery,
  createGallery, hideEndOfSearchText,
  hideLoader,
  hideLoadMoreButton, showEndOfSearchText,
  showLoader,
  showLoadMoreButton
} from './js/render-functions.js';

const form = document.querySelector('.search-form');
const loadMoreButton = document.querySelector('.load-more-button');

let page = 1;
let searchQuery = '';

const showError = message => {
  iziToast.show({
    titleColor: '#FFFFFF',
    message,
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
};

const renderGallery = async (query) => {
  try {
    hideLoadMoreButton();
    hideEndOfSearchText();
    showLoader();

    const data = await getImagesByQuery(query, page);
    const images = data.hits;

    hideLoader();

    if (images.length === 0) {
      showError('Sorry, there are no images matching your search query. Please try again!');
      return;
    }

    createGallery(images);

    const hasMoreResults = data.totalHits > page * IMAGES_PER_PAGE;
    if (hasMoreResults) {
      showLoadMoreButton();
    } else {
      showEndOfSearchText();
    }

    page++;
  } catch (error) {
    hideLoader();
    showError(error.message);
  }
}

const scrollGallery = () => {
  const galleryItem = document.querySelector('.gallery-item');
  const { height } = galleryItem.getBoundingClientRect();

  window.scrollBy({
    top: height * 2,
    behavior: 'smooth',
  });
};

form.addEventListener('submit', async e => {
  e.preventDefault();

  const searchText = form.elements['search-input'].value.trim().toLowerCase();

  if (!searchText) {
    hideLoader();
    form.reset();
    return;
  }

  const isNewSearch = searchText !== searchQuery;
  if (isNewSearch) {
    page = 1;
    clearGallery();
  }
  searchQuery = searchText;
  await renderGallery(searchQuery);
  form.reset();
});


loadMoreButton.addEventListener('click', async e => {
  e.preventDefault();
  await renderGallery(searchQuery);
  scrollGallery();
});
