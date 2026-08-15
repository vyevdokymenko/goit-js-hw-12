import axios from 'axios';

const API_URL = 'https://pixabay.com/api/';
const API_KEY = '57120606-d69b26f25a6d0d516b33d9d09';

export const getImagesByQuery = (query) => {
  return axios.get(API_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 9,
      safesearch: true,
    },
  }).then((response) => {
    return response.data;
  });
};