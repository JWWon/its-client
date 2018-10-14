import React, { Component } from 'react';
import * as s from './SearchBar.styled';

interface Props {
  handleDismiss: () => void;
}

interface State {
  keyword: string;
}

class SearchBar extends Component<Props, State> {
  public state: State = { keyword: '' };

  public render() {
    return (
      <s.Container>
        <s.BarWrapper>
          <s.IconCircle>
            <s.IconSearch />
          </s.IconCircle>
          <s.InputSearch onChange={this.handleChange} />
          <s.Dismiss onClick={this.props.handleDismiss} />
        </s.BarWrapper>
      </s.Container>
    );
  }

  private handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const { name, value } = e.currentTarget;
    this.setState(prevState => ({ ...prevState, [name]: value }));
  };
}

export default SearchBar;
