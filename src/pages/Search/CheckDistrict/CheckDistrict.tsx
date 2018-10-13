/* tslint:disable:jsx-no-lambda */
import React from 'react';

import { District } from '../Search';
import * as s from './CheckDistrict.styled';

interface Props {
  title: string;
  list: District[];
  handleClick: (e: React.FormEvent<HTMLDivElement>, index: number) => void;
  isCity?: boolean;
}

const CheckDistrict: React.SFC<Props> = ({
  title,
  isCity,
  list,
  handleClick,
}) => (
  <s.Container>
    <s.TitleWrapper>
      <s.Title>{title}</s.Title>
    </s.TitleWrapper>
    {isCity ? null : (
      <s.NoCountListWrapper>
        {list.map(data => (
          <s.NoCountData
            key={data.name}
            selected={data.selected}
            onClick={(e: React.FormEvent<HTMLDivElement>) =>
              handleClick(e, data.index)
            }>
            <p>{data.name}</p>
          </s.NoCountData>
        ))}
      </s.NoCountListWrapper>
    )}
  </s.Container>
);

CheckDistrict.defaultProps = {
  isCity: false,
};

export default CheckDistrict;
