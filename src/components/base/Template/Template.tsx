import React, { ReactNode } from 'react';
import * as S from './Template.styled';

interface Props {
  navbar: ReactNode;
  children: ReactNode;
  footer: ReactNode;
}

const Template: React.SFC<Props> = ({ navbar, children, footer }) => (
  <S.Container>
    <S.Body>{children}</S.Body>
    <S.Navbar>{navbar}</S.Navbar>
    <S.Footer>{footer}</S.Footer>
  </S.Container>
);

export default Template;
