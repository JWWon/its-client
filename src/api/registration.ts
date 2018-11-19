import axios from 'axios';

export interface RegistrationInterface {
  name: string;
  phone: string;
  address: string;
  manager: {
    name: string;
    phone: string;
    email: string;
  };
  certificates: {
    specialist: string;
    // association: string;
    // invisalign: string;
  };
}

export const register = async (data: RegistrationInterface) => {
  try {
    console.log(data);
    if (window.confirm('신청하시겠습니까?')) {
      const response = await axios.post('/registrations', data);
      alert('신청되었습니다');
      return response.data;
    }
  } catch (e) {
    throw e;
  }
};
