import axios from 'axios';

if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = 'https://api.itskyojeong.com/';
} else {
  axios.defaults.baseURL = 'http://localhost:5000/';
}

export default axios;
