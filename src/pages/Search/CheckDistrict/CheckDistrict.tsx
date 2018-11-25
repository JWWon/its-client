/* tslint:disable:jsx-no-lambda */
import React from 'react';

import { DistrictInterface } from 'store/modules/search';
import * as s from './CheckDistrict.styled';

interface Props {
  title: string;
  district: DistrictInterface | null;
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
        Object.keys(district.names).map(key => (
          <s.Data
            isCity={isCity}
            key={key}
            selected={key === district.pointer}
            onClick={(e: React.FormEvent<HTMLDivElement>) =>
              handleClick(e, key)
            }>
            {isCity ? (
              <s.TextWrapper count={district.names[key].count}>
                <s.Name>{key}</s.Name>
                <s.Count>{district.names[key].count}</s.Count>
              </s.TextWrapper>
            ) : (
              <s.Name>{key}</s.Name>
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
