import React from 'react';
import { connect } from 'react-redux';
import { compose, Dispatch } from 'redux';
import { ModalInterface, show } from 'store/modules/modal';

export interface ShowModal {
  show: (payload: ModalInterface) => void;
}

type HOC<PWrapped, PHoc> =
  | React.ComponentClass<PWrapped & PHoc>
  | React.SFC<PWrapped & PHoc>;

const withModal = <P, S>(Component: HOC<P, ShowModal>): React.SFC<P> => (
  props: P & ShowModal
) => <Component {...props} />;

const composedHOC = compose(
  connect(
    null,
    (dispatch: Dispatch) => ({
      show: (payload: ModalInterface) => show(payload)(dispatch),
    })
  ),
  withModal
);
export default composedHOC;
