import axios from 'axios';

if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = 'https://www.itskyojeong.com/api';
} else {
  axios.defaults.baseURL = 'localhost:8000/';
}

export default axios;
