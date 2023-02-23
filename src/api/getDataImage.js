import axios from 'axios';
const API_KEY = '33148829-cc4d08839fd1b6c92d312a1a4';

const imagesApi = axios.create({
  baseURL: 'https://pixabay.com/api/',

  params: {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  },
});

export const getImage = async (query, page = 1) => {
  const { data } = await imagesApi.get('', {
    params: {
      q: query,
      page,
    },
  });

  return data.hits;
};
