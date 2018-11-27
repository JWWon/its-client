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
const SEARCH_CLINIC = 'search/SEARCH_CLINIC';
const REMOVE_RESULTS = 'search/REMOVE_RESULTS';

// *** ACTION FUNCTION
export const selectProvince = (province?: string, city?: string) => async (
  dispatch: Dispatch
) => {
  const pointer = province || Object.keys(provinceCity)[0];
  const cityNames = await getCityNames(pointer);
  const payload = {
    pointer,
    cities: { names: cityNames, pointer: city || null },
  };
  dispatch({ type: SET_PROVINCE, payload });
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
      await selectProvince(province, city)(dispatch);
      list = await searchByAddress({ province, city });
      banners = await getBanners({ province, city });
      param = `${province} ${city}`;
      break;
    default:
      list = [];
      banners = [];
      param = '';
  }
  const payload = { search: { type, param, banners, list } };
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

  return {
    provinces: { names, pointer: null },
    cities: { names: {}, pointer: null },
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
    [SEARCH_CLINIC]: (state, action) =>
      produce(state, draft => {
        draft.search = action.payload.search;
      }),
    [REMOVE_RESULTS]: state =>
      produce(state, draft => {
        draft.search = null;
      }),
  },
  setInitState()
);
