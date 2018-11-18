import 'api/axios';
import AWS from 'aws-sdk';
import { PureComponent } from 'react';

class Core extends PureComponent {
  public componentDidMount() {
    AWS.config.update({
      region: 'ap-northeast-2',
      accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    });
  }

  public render() {
    return null;
  }
}

export default Core;
