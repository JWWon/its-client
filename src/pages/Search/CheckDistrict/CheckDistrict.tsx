import React from 'react';

import { District } from '../Search';
import * as s from './CheckDistrict.styled';

interface Props {
  title: string;
  list: District[];
  hasCount?: boolean;
}

const CheckDistrict: React.SFC<Props> = ({ title, hasCount, list }) => (
  <s.Container>
    <s.TitleWrapper>
      <s.Title>{title}</s.Title>
    </s.TitleWrapper>
    {hasCount ? null : (
      <s.NoCountListWrapper>
        {list.map(data => (
          <s.NoCountData key={data.name} checked={data.checked}>
            <p>{data.name}</p>
          </s.NoCountData>
        ))}
      </s.NoCountListWrapper>
    )}
  </s.Container>
);

CheckDistrict.defaultProps = {
  hasCount: false,
};

export default CheckDistrict;
