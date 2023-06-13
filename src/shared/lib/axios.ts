import axios from 'axios';

// export const API_URL = `${import.meta.env.VITE_URL}`;
const token = import.meta.env.VITE_VITE_DADATA_SECRET_KEY;
const tokenTwo = import.meta.env.VITE_VITE_VITE_DADATA_API_KEY;

const url = `${import.meta.env.VITE_URL}`;
const config = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: token,
  },
};

export class Services {
  getAddresses = async () => {
    await axios
      .get(url, config)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };
}

export const getAddresses = async () => {
  axios
    .get(url, config)
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
};

// export
