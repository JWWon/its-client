/* tslint:disable:jsx-no-lambda */
import React from 'react';

import { District } from '../Search';
import * as s from './CheckDistrict.styled';

interface Props {
  title: string;
  list: { [name: string]: District } | null;
  handleClick: (e: React.FormEvent<HTMLDivElement>, name: string) => void;
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
      {list &&
        Object.keys(list).map(name => (
          <s.Data
            isCity={isCity}
            key={name}
            selected={list[name].selected}
            onClick={(e: React.FormEvent<HTMLDivElement>) =>
              handleClick(e, name)
            }>
            {isCity ? (
              <s.TextWrapper count={list[name].count}>
                <s.Name>{name}</s.Name>
                <s.Count>{list[name].count}</s.Count>
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
