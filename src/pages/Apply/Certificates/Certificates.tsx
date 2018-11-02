/* tslint:disable:no-unused-expression jsx-no-lambda */
import { TitleWithBar } from 'components/common';
import React, { Component } from 'react';
import * as s from './Certificates.styled';

interface Data {
  preview: string;
  file: File;
}

interface State {
  association: Data | null;
  specialist: Data | null;
  invisalign: Data | null;
}

class Certificates extends Component<{}, State> {
  public state: State = {
    association: null,
    specialist: null,
    invisalign: null,
  };

  public render() {
    return (
      <s.Content>
        <TitleWithBar title="자격증 첨부" margin="0" />
        <s.InputWrapper>
          {this.Image('specialist', '치과교정전문의')}
          {this.Image('association', '대한치과교정학회')}
          {this.Image('invisalign', '인비절라인인증의')}
        </s.InputWrapper>
      </s.Content>
    );
  }

  private Image = (nameEn: string, nameKo: string) => (
    <div>
      <s.Image>
        <s.ImageInput name={nameEn} id={nameEn} onChange={this.handleUpload} />
        <s.Label htmlFor={nameEn}>
          {this.state[nameEn] ? (
            <>
              <s.Preview src={this.state[nameEn].preview} />
              <s.Delete
                onClick={(e: React.FormEvent<HTMLDivElement>) =>
                  this.handleDelete(e, nameEn)
                }
              />
            </>
          ) : (
            <s.AddIcon />
          )}
        </s.Label>
      </s.Image>
      <s.Text>{nameKo}</s.Text>
    </div>
  );

  private handleUpload = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, files } = e.currentTarget;
    const reader = new FileReader();

    if (files && files.length) {
      const file = files[0];
      reader.onload = () => {
        const preview = reader.result;
        this.setState(prevState => ({
          ...prevState,
          [name]: { file, preview },
        }));
      };

      reader.readAsDataURL(file);
    }
  };

  private handleDelete = (
    e: React.FormEvent<HTMLDivElement>,
    nameEn: string
  ) => {
    e.preventDefault();
    this.setState(prevState => ({ ...prevState, [nameEn]: null }));
  };
}

export default Certificates;
