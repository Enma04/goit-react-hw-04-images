import axios from 'axios';

const myKey = '38579369-eeb8272d66c6603b69812822b';
const url = 'https://pixabay.com/api';

export const fetchPixabay = async (search, page=1) => {
  const querty = `/?q=${search}`;
  const params = new URLSearchParams({
      page,
      per_page: 12,
      image_type: "photo",
      orientation: "horizontal",
  });

  return await fetch(`${url}${querty}&key=${myKey}&${params}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    });
};

export const fetchPixabayAxios = async () => {
    return await axios.get(`https://pixabay.com/api/?q=cat&page=1&key=${myKey}&image_type=photo&orientation=horizontal&per_page=12`);
};