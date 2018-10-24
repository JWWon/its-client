import { TitleWithBar } from 'components/common';
import React, { ReactNode } from 'react';
import * as s from './Input.styled';

interface ContentInterface {
  title: string;
  children?: ReactNode;
  meta?: {
    placeholder: string;
    name: string;
    type: 'text' | 'tel' | 'number' | 'email';
  };
  handleChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

const Input: React.SFC<ContentInterface> = ({
  title,
  children,
  meta,
  handleChange,
}) => (
  <s.Content>
    <TitleWithBar title={title} margin="0" />
    <s.InputWrapper>
      {meta ? (
        <s.Input
          placeholder={meta.placeholder}
          name={meta.name}
          type={meta.type}
          onChange={handleChange}
        />
      ) : (
        children
      )}
    </s.InputWrapper>
  </s.Content>
);

export default Input;
