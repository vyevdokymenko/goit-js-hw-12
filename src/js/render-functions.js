import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreButton = document.querySelector('.load-more-button');
const endOfSearchText = document.querySelector('.end-of-search');

const simpleLightbox = new SimpleLightbox(
  '.gallery a',
  {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250
  }
);

const createGalleryItem = ({
                             webformatURL: preview,
                             largeImageURL: original,
                             tags: description,
                             likes,
                             views,
                             comments,
                             downloads,
                           }) => `
  <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img
            class="gallery-image"
            src="${preview}"
            alt="${description}"
        />
        <ul class="gallery-stats">
          <li class="gallery-stat">
            <p class="gallery-stat-label">Likes</p>
            <p class="gallery-stat-value">${likes}</p>
          </li>
          <li class="gallery-stat">
            <p class="gallery-stat-label">Views</p>
            <p class="gallery-stat-value">${views}</p>
          </li>
          <li class="gallery-stat">
            <p class="gallery-stat-label">Comments</p>
            <p class="gallery-stat-value">${comments}</p>
          </li>
          <li class="gallery-stat">
            <p class="gallery-stat-label">Downloads</p>
            <p class="gallery-stat-value">${downloads}</p>
          </li>
        </ul>
      </a>
    </li>
`;

export const createGallery = images => {
  const galleryItems = [];
  for (const image of images) {
    galleryItems.push(createGalleryItem(image));
  }
  gallery.insertAdjacentHTML('beforeend', galleryItems.join(''));
  simpleLightbox.refresh();
};

export const clearGallery = () => {
  gallery.innerHTML = '';
};

export const showLoader = () => {
  loader.classList.remove('is-hidden');
};

export const hideLoader = () => {
  loader.classList.add('is-hidden');
};

export const showLoadMoreButton = () => {
  loadMoreButton.classList.remove('is-hidden');
};

export const hideLoadMoreButton = () => {
  loadMoreButton.classList.add('is-hidden');
};

export const showEndOfSearchText = () => {
  endOfSearchText.classList.remove('is-hidden');
};

export const hideEndOfSearchText = () => {
  endOfSearchText.classList.add('is-hidden');
};