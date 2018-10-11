import React from 'react';
import * as s from './CheckAddress.styled';

interface Data {
  name: string;
  count?: number;
}

interface Props {
  title: string;
  list: Data[];
}

const CheckAddress: React.SFC<Props> = ({ title, list }) => (
  <s.Container>
    <s.TitleWrapper>
      <s.Title>{title}</s.Title>
    </s.TitleWrapper>
    <s.ListWrapper>
      {list.map(
        data =>
          data.count ? null : (
            <s.NoCountData key={data.name}>{data.name}</s.NoCountData>
          )
      )}
    </s.ListWrapper>
  </s.Container>
);

export default CheckAddress;
