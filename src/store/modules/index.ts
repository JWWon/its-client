import { combineReducers } from 'redux';
import modal, { ModalInterface } from './modal';
import search, { SearchState } from './search';

export interface StoreState {
  modal: ModalInterface;
  search: SearchState;
}

export default combineReducers({ modal, search });
