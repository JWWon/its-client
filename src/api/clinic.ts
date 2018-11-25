import axios from 'axios';
import mobile from 'theme/mobile';

export interface ClinicInterface {
  id: string;
  province: string;
  city: string;
  name: string;
  phone: string;
  address: string;
  landmark: string;
  webpage: string;
  timetable: { [x: string]: string };
  directions: { [x: string]: string };
  certificates: {
    association: boolean;
    invisalign: boolean;
    specialist: {
      chief: string;
      school: string;
      period: {
        startAt: string;
        endAt: string;
      };
      image: string;
    };
  };
  createdAt: string;
  hits: number;
  grade: number; // 2: A, 1: B, 0: C, -1: D
  hidden: boolean;
}

interface Address {
  province: string;
  city: string;
  after?: string;
}

interface Keyword {
  keyword: string;
}

export const searchByAddress = async (params: Address) => {
  try {
    const response = await axios.get('/clinics', { params });
    const data: ClinicInterface[] = response.data;
    return data;
  } catch (e) {
    throw e;
  }
};

export const searchByKeyword = async (params: Keyword) => {
  try {
    const response = await axios.get('/clinics', { params });
    const data: ClinicInterface[] = response.data;
    return data;
  } catch (e) {
    throw e;
  }
};

export const searchById = async (id: string) => {
  try {
    const response = await axios.get(`/clinics/${id}`);
    const data: ClinicInterface = response.data;
    return data;
  } catch (e) {
    throw e;
  }
};

export const getCityList = async (province: string) => {
  try {
    const response = await axios.get('/clinics', { params: { province } });
    const data: ClinicInterface[] = response.data;
    return data;
  } catch (e) {
    throw e;
  }
};

export const getClinicLength = async () => {
  try {
    const response = await axios.get('/clinics', { params: { count: true } });
    const data: number = response.data;
    return data;
  } catch (e) {
    throw e;
  }
};

// tslint:disable-next-line
export const getBanners = async (_params: Address) => {
  try {
    const params = { ..._params, banner: true };
    const response = await axios.get('/clinics', { params });
    const data: ClinicInterface[] = response.data;
    return mobile ? data.slice(0, 2) : data;
  } catch (e) {
    throw e;
  }
};
