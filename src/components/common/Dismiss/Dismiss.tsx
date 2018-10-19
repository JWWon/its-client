import React from 'react';
import * as s from './Dismiss.styled';

interface Props {
  handleDismiss: (e: React.FormEvent<HTMLDivElement>) => void;
}

const Dismiss: React.SFC<Props> = ({ handleDismiss }) => (
  <s.Dismiss onClick={handleDismiss} />
);

export default Dismiss;
