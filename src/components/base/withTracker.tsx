import React, { PureComponent } from 'react';
import ReactGA from 'react-ga';
import { RouteComponentProps } from 'react-router-dom';

const withTracker = <P extends RouteComponentProps>(
  Component: React.ComponentType<P>,
  options: object = {}
) => {
  const trackPage = (page: string) => {
    ReactGA.set({
      page,
      ...options,
    });
    ReactGA.pageview(page);
  };

  const HOC = class extends PureComponent<RouteComponentProps> {
    public componentDidMount() {
      const page = this.props.location.pathname;
      trackPage(page);
    }

    public componentDidUpdate(prevProps: RouteComponentProps) {
      const currentPage = prevProps.location.pathname;
      const nextPage = this.props.location.pathname;
      if (currentPage !== nextPage) trackPage(nextPage);
    }

    public render() {
      return <Component {...this.props} />;
    }
  };

  return HOC;
};

export default withTracker;
