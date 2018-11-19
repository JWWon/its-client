import { TitleWithBar } from 'components/common';
import React, { Component } from 'react';
import * as s from './Input.styled';

interface Props {
  label: string;
  name: string;
  placeholder: string;
  handleChange: (e: React.FormEvent<HTMLInputElement> | string) => void;
}

interface State {
  email_head: string;
  email_tail: string;
}

class Input extends Component<Props, State> {
  public state: State = { email_head: '', email_tail: '' };

  public render() {
    const { label } = this.props;
    return (
      <s.Content>
        <TitleWithBar title={label} margin="0" />
        <s.InputWrapper>
          <s.Short>{this.InputBox()}</s.Short>
        </s.InputWrapper>
      </s.Content>
    );
  }

  private InputBox = () => {
    const { name, placeholder } = this.props;
    switch (name) {
      case 'email':
        return (
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
        );
      case 'phone':
        return (
          <s.Input
            placeholder={placeholder}
            name={name}
            type="tel"
            onChange={this.props.handleChange}
          />
        );
      default:
        return (
          <s.Input
            placeholder={placeholder}
            name={name}
            type="text"
            onChange={this.props.handleChange}
          />
        );
    }
  };

  private handleEmailChange = async (e: React.FormEvent<HTMLInputElement>) => {
    e.persist();
    const { name, value } = e.currentTarget;
    await this.setState(prevState => ({ ...prevState, [name]: value }));

    const { email_head, email_tail } = this.state;
    const event: React.FormEvent<HTMLInputElement> = {
      ...e,
      currentTarget: {
        ...e.currentTarget,
        name: 'email',
        value: `${email_head}@${email_tail}`,
      },
    };

    this.props.handleChange(event);
  };
}

export default Input;
