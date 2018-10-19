import { Dismiss } from 'components/common';
import React, { Component } from 'react';
import * as s from './SearchBar.styled';

interface Props {
  handleSumbitKeyword: (
    e: React.FormEvent<HTMLFormElement>,
    keyword: string
  ) => void;
  handleDismiss: () => void;
}

interface State {
  keyword: string;
}

class SearchBar extends Component<Props, State> {
  public state: State = { keyword: '' };

  public render() {
    const { keyword } = this.state;
    return (
      <s.Container>
        <s.FormBar onSubmit={this.handleSubmit}>
          <s.IconCircle>
            <s.IconSearch />
          </s.IconCircle>
          <s.InputSearch onChange={this.handleChange} value={keyword} />
          <Dismiss handleDismiss={this.handleDismissExtend} />
        </s.FormBar>
      </s.Container>
    );
  }

  private handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    this.setState(prevState => ({ ...prevState, [name]: value }));
  };

  private handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    this.props.handleSumbitKeyword(e, this.state.keyword);
  };

  private handleDismissExtend = () => {
    this.props.handleDismiss();
    this.setState({ keyword: '' });
  };
}

export default SearchBar;
