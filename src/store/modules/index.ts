import { combineReducers } from 'redux';
import search, { SearchState } from './search';

export interface StoreState {
  search: SearchState;
}

export default combineReducers({ search });
