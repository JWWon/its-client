import produce from 'immer';
import { Dispatch } from 'redux';
import { handleActions } from 'redux-actions';

import {
  ClinicInterface,
  getBanners,
  getCityNames,
  NameInterface,
  searchByAddress,
  searchByKeyword,
} from 'api/clinic';
import { provinceCity } from 'lib/constant/address';

// *** ACTION TYPE
const SET_PROVINCE = 'search/SET_PROVINCE';
const SET_CITY = 'search/SET_CITY';
const SEARCH_CLINIC = 'search/SEARCH_CLINIC';
const REMOVE_RESULTS = 'search/REMOVE_RESULTS';

// *** ACTION FUNCTION
export const selectProvince = (province?: string) => async (
  dispatch: Dispatch
) => {
  const pointer = province || Object.keys(provinceCity)[0];
  const cityNames = await getCityNames(pointer);
  const payload = {
    pointer,
    cities: { names: cityNames, pointer: null },
  };
  dispatch({ type: SET_PROVINCE, payload });
};

export const selectCity = (city: string) => async (dispatch: Dispatch) => {
  const payload = { pointer: city };
  dispatch({ type: SET_CITY, payload });
};

export const searchClinic = (query: any) => async (dispatch: Dispatch) => {
  const { type } = query; // URL QUERY
  let param: string;
  let list: ClinicInterface[];
  let banners: ClinicInterface[];
  switch (type) {
    case 'keyword':
      const keyword = query.q;
      list = await searchByKeyword({ keyword });
      banners = [];
      param = keyword;
      break;
    case 'address':
      const { province, city } = query;
      list = await searchByAddress({ province, city });
      banners = await getBanners({ province, city });
      param = `${province} ${city}`;
      break;
    default:
      list = [];
      banners = [];
      param = '';
  }
  const payload = { type, param, banners, list };
  dispatch({ type: SEARCH_CLINIC, payload });
};

export const removeResults = (dispatch: Dispatch) => {
  dispatch({ type: REMOVE_RESULTS });
};

// *** INITIAL STATE
export interface DistrictInterface {
  names: NameInterface;
  pointer: string | null; // DISTRICT NAME
}

export interface SearchState {
  search: {
    type: 'keyword' | 'address';
    param: string;
    banners: ClinicInterface[];
    list: ClinicInterface[];
  } | null;
  provinces: DistrictInterface;
  cities: DistrictInterface;
}

const setInitState = () => {
  // provinces
  const names: NameInterface = {};
  for (const key in provinceCity) {
    if (key) names[key] = {};
  }
  const pointer: string = Object.keys(names)[0];
  // cities
  const cityNames: NameInterface = {};
  for (const key in provinceCity[pointer]) {
    if (key) cityNames[key] = { count: 0 };
  }

  return {
    provinces: { names, pointer },
    cities: { names: cityNames, pointer: null },
    search: null,
  } as SearchState;
};

// *** REDUCER
export default handleActions<SearchState, any>(
  {
    [SET_PROVINCE]: (state, action) =>
      produce(state, draft => {
        draft.provinces.pointer = action.payload.pointer;
        draft.cities = action.payload.cities;
      }),
    [SET_CITY]: (state, action) =>
      produce(state, draft => {
        draft.cities.pointer = action.payload.pointer;
      }),
    [SEARCH_CLINIC]: (state, action) =>
      produce(state, draft => {
        draft.search = action.payload;
      }),
    [REMOVE_RESULTS]: state =>
      produce(state, draft => {
        draft.search = null;
      }),
  },
  setInitState()
);
