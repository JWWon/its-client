import { TitleWithBar } from 'components/common';
import React, { Component } from 'react';
import * as s from './InputImage.styled';

interface Props {
  label: string;
  name: string;
  handleImageChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

interface State {
  previewSrc: string | null;
}

class InputImage extends Component<Props, State> {
  public state: State = { previewSrc: '' };

  public render() {
    const { label, name } = this.props;
    const { previewSrc } = this.state;
    return (
      <>
        <TitleWithBar title={label} margin="0" />
        <s.ImageWrapper>
          <s.Input name={name} id={name} onChange={this.handlePreview} />
          <s.Label htmlFor={name}>
            {previewSrc ? (
              <>
                <s.Preview src={previewSrc} />
                <s.Delete onClick={this.handleDelete} />
              </>
            ) : (
              <s.AddIcon />
            )}
          </s.Label>
        </s.ImageWrapper>
      </>
    );
  }

  private handlePreview = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { files } = e.currentTarget;
    if (files && files.length) {
      const file = files[0];
      this.setState({ ...this.state, previewSrc: URL.createObjectURL(file) });
      this.props.handleImageChange(e);
    }
  };

  private handleDelete = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    this.setState({ ...this.state, previewSrc: '' });
  };
}

export default InputImage;
