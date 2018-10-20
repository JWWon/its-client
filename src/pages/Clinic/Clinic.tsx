import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { ClinicInterface } from 'api/clinic';
import { Section } from 'components/common';

interface Props extends RouteComponentProps<any> {}

class Clinic extends Component<Props> {
  public render() {
    const clinic: ClinicInterface = this.props.location.state;
    return (
      <Section title={clinic.name}>
        <p>hello</p>
      </Section>
    );
  }
}

export default Clinic;
