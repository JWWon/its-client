/* tslint:disable:jsx-no-lambda */
import React from 'react';

import { District } from '../Search';
import * as s from './CheckDistrict.styled';

interface Props {
  title: string;
  district: District | null;
  handleClick: (e: React.FormEvent<HTMLDivElement>, name: string) => void;
  isCity?: boolean;
}

const CheckDistrict: React.SFC<Props> = ({
  title,
  isCity,
  district,
  handleClick,
}) => (
  <s.Container>
    <s.TitleWrapper>
      <s.Title>{title}</s.Title>
    </s.TitleWrapper>
    <s.ListWrapper>
      {district &&
        Object.keys(district.list).map(name => (
          <s.Data
            isCity={isCity}
            key={name}
            selected={name === district.pointer}
            onClick={(e: React.FormEvent<HTMLDivElement>) =>
              handleClick(e, name)
            }>
            {isCity ? (
              <s.TextWrapper count={district.list[name].count}>
                <s.Name>{name}</s.Name>
                <s.Count>{district.list[name].count}</s.Count>
              </s.TextWrapper>
            ) : (
              <s.Name>{name}</s.Name>
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
