import { TitleWithBar } from 'components/common';
import React, { Component, ReactNode } from 'react';
import * as s from './Input.styled';

interface Props {
  title: string;
  children?: ReactNode;
  meta?: {
    placeholder: string;
    name: string;
    type: 'text' | 'tel' | 'number' | 'email';
  };
  handleChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  handleEmailChange?: (email: string) => void;
}

interface State {
  email_head: string;
  email_tail: string;
}

class Input extends Component<Props, State> {
  public state: State = { email_head: '', email_tail: '' };

  public render() {
    const { title, children, meta, handleChange } = this.props;
    return (
      <s.Content>
        <TitleWithBar title={title} margin="0" />
        <s.InputWrapper>
          {meta ? (
            <s.Short>
              {meta.type !== 'email' ? (
                <s.Input
                  placeholder={meta.placeholder}
                  name={meta.name}
                  type={meta.type}
                  onChange={handleChange}
                />
              ) : (
                <>
                  <s.Input
                    placeholder="example"
                    name="email_head"
                    type="text"
                    onChange={this.handleEmailChange}
                  />
                  <s.At>@</s.At>
                  <s.Input
                    placeholder="company.com"
                    name="email_tail"
                    type="text"
                    onChange={this.handleEmailChange}
                  />
                </>
              )}
            </s.Short>
          ) : (
            children
          )}
        </s.InputWrapper>
      </s.Content>
    );
  }

  private handleEmailChange = async (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    await this.setState(prevState => ({ ...prevState, [name]: value }));

    const { handleEmailChange } = this.props;
    const { email_head, email_tail } = this.state;

    if (handleEmailChange) handleEmailChange(`${email_head}@${email_tail}`);
  };
}

export default Input;
