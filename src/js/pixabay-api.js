import axios from 'axios';

const API_URL = 'https://pixabay.com/api/';
const API_KEY = '57120606-d69b26f25a6d0d516b33d9d09';
export const IMAGES_PER_PAGE = 15;

export const getImagesByQuery =  async (query, page = 1) => {
  const response = await axios.get(API_URL, {
    params: {
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: IMAGES_PER_PAGE,
      page: page,
      safesearch: true,
      key: API_KEY,
    },
  });
  return response.data;
};

const loadState = () => {
  try {
    return JSON.parse(localStorage.getItem('searchState') || '{}');
  } catch (error) {
    return {};
  }
}

export const isNewSearch = (searchText) => {
  const state = loadState();
  return searchText.toLowerCase() !== state.searchText;
}

export const getNextPage = searchText => {
  const state = loadState();
  state.page = isNewSearch(searchText)
    ? 1
    : (state.page ?? 1) + 1;

  state.searchText = searchText.toLowerCase();
  localStorage.setItem('searchState', JSON.stringify(state));

  return state.page;
}

export const getSavedSearch = () => {
  const state = loadState();
  return state.searchText;
}
