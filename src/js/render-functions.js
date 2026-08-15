import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader-container');
const showMoreButton = document.querySelector('.load-more-display');
const endOfSearchText = document.querySelector('.end-of-search-display');

const simpleLightbox = new SimpleLightbox(
  '.gallery a',
  {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250
  }
);

export const createGallery = (images) => {
  const galleryItems = [];
  for (const image of images) {
    const {
      webformatURL: preview,
      largeImageURL: original,
      tags: description,
      likes,
      views,
      comments,
      downloads,
    } = image;

    galleryItems.push(`
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img
            class="gallery-image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
        <ul class="img-description">
        <li>
          <p class="desc-name">Likes</p>
          <p class="desc-value">${likes}</p>
        </li>
        <li>
          <p class="desc-name">Views</p>
          <p class="desc-value">${views}</p>
        </li>
        <li>
          <p class="desc-name">Comments</p>
          <p class="desc-value">${comments}</p>
        </li>
        <li>
          <p class="desc-name">Downloads</p>
          <p class="desc-value">${downloads}</p>
        </li>
      </ul>
      </a>
    </li>
  `);
  }
  gallery.insertAdjacentHTML('beforeend', galleryItems.join(''));
  simpleLightbox.refresh();
};

export const clearGallery = () => {
  gallery.innerHTML = '';
};

export const showLoader = () => {
  loader.classList.remove('hidden');
};

export const hideLoader = () => {
  loader.classList.add('hidden');
};

export const showLoadMoreButton = () => {
  showMoreButton.classList.remove('hidden');
  endOfSearchText.classList.add('hidden');
};

export const hideLoadMoreButton = () => {
  showMoreButton.classList.add('hidden');
  endOfSearchText.classList.remove('hidden');
};