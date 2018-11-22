import 'api/axios';
import AWS from 'aws-sdk';
import { PureComponent } from 'react';
import ReactGA from 'react-ga';

class Core extends PureComponent {
  public componentDidMount() {
    // SETTING AWS CONFIG
    AWS.config.update({
      region: 'ap-northeast-2',
      accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    });
    // SETTING GOOGLE ANALYTICS
    ReactGA.initialize('UA-129416739-1', { debug: false });
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  public render() {
    return null;
  }
}

export default Core;
