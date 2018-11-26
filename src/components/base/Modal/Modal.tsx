import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Dismiss from 'components/common/Dismiss';
import { StoreState } from 'store/modules';
import { dismiss, ModalInterface } from 'store/modules/modal';
import * as s from './Modal.styled';

interface Props {
  modal: ModalInterface;
  dismiss: () => void;
}

class Modal extends PureComponent<Props> {
  public render() {
    const { component, label } = this.props.modal;
    return label ? (
      <s.Background>
        <s.Header>
          <s.Label>{label}</s.Label>
          <s.DismissContainer>
            <Dismiss handleDismiss={this.handleDismiss} white />
          </s.DismissContainer>
        </s.Header>
        <s.Wrapper>{component}</s.Wrapper>
      </s.Background>
    ) : null;
  }

  private handleDismiss = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    this.props.dismiss();
  };
}

export default connect(
  ({ modal }: StoreState) => ({ modal }),
  (dispatch: Dispatch) => ({ dismiss: () => dismiss(dispatch) })
)(Modal);
