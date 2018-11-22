import React, { PureComponent } from 'react';
import ReactGA from 'react-ga';
import Loadable from 'react-loadable';
import { RouteComponentProps } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

import { Spinner } from 'components/common';

const scrollOptions = {
  duration: 720,
};

const withSplitter = <P extends RouteComponentProps>(
  loadComponent: () => Promise<any>,
  options: object = {}
) => {
  const Component = Loadable({ loader: loadComponent, loading: Spinner });

  const trackPage = (pathname: string) => {
    ReactGA.set({ pathname, ...options });
    ReactGA.pageview(pathname);
    scroll.scrollToTop(scrollOptions);
  };

  const HOC = class extends PureComponent<P> {
    public componentDidMount() {
      const { location } = this.props;
      trackPage(location.pathname);
    }

    public componentDidUpdate(prevProps: P) {
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

export default withSplitter;
