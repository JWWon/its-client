const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://www.잇츠교정.com'
    : 'http://localhost:3000';

export default baseURL;
