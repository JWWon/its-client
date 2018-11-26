import produce from 'immer';
import { ReactNode } from 'react';
import { Dispatch } from 'redux';
import { handleActions } from 'redux-actions';

export interface ModalInterface {
  label: string;
  component: ReactNode;
}

// *** ACTION TYPE
const SHOW_MODAL = 'modal/CREATE_MODAL';
const DISMISS_MODAL = 'modal/DISMISS_MODAL';

// *** ACTION FUNCTION
export const show = (payload: ModalInterface) => (dispatch: Dispatch) => {
  dispatch({ type: SHOW_MODAL, payload });
};

export const dismiss = (dispatch: Dispatch) => {
  dispatch({ type: DISMISS_MODAL });
};

// *** INITIAL STATE
const initState: ModalInterface = {
  label: '',
  component: null,
};

// *** REDUCER
export default handleActions<ModalInterface, any>(
  {
    [SHOW_MODAL]: (state, action) =>
      produce(state, draft => {
        draft.label = action.payload.label;
        draft.component = action.payload.component;
      }),
    [DISMISS_MODAL]: state =>
      produce(state, draft => {
        draft.label = '';
        draft.component = null;
      }),
  },
  initState
);
