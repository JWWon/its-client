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
    <s.ListWrapper>
      {list.map(data => (
        <s.Data
          isCity={isCity}
          key={data.name}
          selected={data.selected}
          onClick={(e: React.FormEvent<HTMLDivElement>) =>
            handleClick(e, data.index)
          }>
          {isCity ? (
            <s.TextWrapper count={data.count}>
              <s.Name>{data.name}</s.Name>
              <s.Count>{data.count}</s.Count>
            </s.TextWrapper>
          ) : (
            <s.Name>{data.name}</s.Name>
          )}
        </s.Data>
      ))}
    </s.ListWrapper>
  </s.Container>
);

CheckDistrict.defaultProps = {
  isCity: false,
};

export default CheckDistrict;
