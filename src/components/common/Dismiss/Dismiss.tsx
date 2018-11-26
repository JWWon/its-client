import React from 'react';
import * as s from './Dismiss.styled';

interface Props {
  handleDismiss: (e: React.FormEvent<HTMLDivElement>) => void;
  white?: boolean;
}

const Dismiss: React.SFC<Props> = ({ handleDismiss, white }) => (
  <s.Dismiss onClick={handleDismiss} white={white} />
);

export default Dismiss;
