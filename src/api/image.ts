import axios from 'axios';

export interface Slide {
  id: string; // Primary key
  type: 'slide' | 'news';
  desktopSrc: string;
  mobileSrc: string;
  alt: string;
  href: string;
}

export interface News extends Slide {
  title: string;
  content: string;
}

const getImages = async (type: 'slide' | 'news') => {
  const response = await axios.get('/images', { params: { type } });
  return response.data;
};

export const getSlides = () => getImages('slide');
export const getNews = () => getImages('news');
