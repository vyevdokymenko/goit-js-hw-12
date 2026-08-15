import {getImagesByQuery, getNextPage, getSavedSearch, IMAGES_PER_PAGE, isNewSearch} from './js/pixabay-api.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import spriteUrl from './img/sprite.svg';
import {
  clearGallery,
  createGallery,
  hideLoader,
  hideLoadMoreButton,
  showLoader,
  showLoadMoreButton
} from './js/render-functions.js';

const form = document.querySelector('form');
const loadMoreButton = document.querySelector('.load-more');

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

const renderGallery = async (searchText) => {
  try {
    showLoader();
    let nextPage = getNextPage(searchText);
    const data = await getImagesByQuery(searchText, nextPage);
    const images = data.hits;
    if (images.length === 0) {
      hideLoader();
      showError('Sorry, there are no images matching your search query. Please try again!');
      return;
    }
    hideLoader();
    createGallery(images);
    const isShowLoadMore = data.totalHits > nextPage * IMAGES_PER_PAGE;
    if (isShowLoadMore) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
    }
  } catch (error) {
    hideLoader();
    showError(error.message);
  } finally {
    form.reset();
  }
}

form.addEventListener('submit', async e => {
  e.preventDefault();

  const searchText = form.elements['search-text'].value.trim();
  if (!searchText) {
    hideLoader();
    form.reset();
    return;
  }

  if (isNewSearch(searchText)) {
    clearGallery();
  }

  await renderGallery(searchText);
});

loadMoreButton.addEventListener('click', async e => {
  e.preventDefault();
  let savedSearch = getSavedSearch();
  if (savedSearch) {
    await renderGallery(savedSearch);
  }
});
