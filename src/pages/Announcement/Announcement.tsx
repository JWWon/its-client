import { Section } from 'components/common';
import _ from 'lodash';
import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { scroller } from 'react-scroll';

import { AnnouncementInterface, getAnnouncement } from 'api/announcement';
import { getHashFromURL } from 'src/lib/functions/url';
import * as s from './Announcement.styled';
import Content from './Content';

interface ContentObj {
  [id: string]: AnnouncementInterface;
}

interface State {
  pointer: string | null;
  contentObj: ContentObj;
}

class Announcement extends Component<RouteComponentProps, State> {
  public state: State = { pointer: null, contentObj: {} };
  private unlisten: (location?: Location) => void;

  public async componentDidMount() {
    const { history, location } = this.props;
    await this.getAnnouncementFromAPI();
    await this.handleToggleByURL(location);
    this.unlisten = history.listen(this.handleToggleByURL);
  }

  public componentWillUnmount() {
    this.unlisten();
  }

  public render() {
    const { contentObj, pointer } = this.state;
    return (
      <Section
        title="잇츠교정의 선물"
        subtitle="무분별한 허위/과대 광고는 지양합니다. 잇츠교정은 건강한 사회를 지향합니다."
        handleDismiss={this.handleDismiss}>
        <s.ShadowBox single>
          {Object.keys(contentObj).map(title => {
            const content = contentObj[title];
            return (
              <Content
                key={content.id}
                pointer={pointer}
                content={content}
                handleClick={this.handleClick}
              />
            );
          })}
        </s.ShadowBox>
      </Section>
    );
  }

  private getAnnouncementFromAPI = async () => {
    let contentObj: ContentObj = {};
    const list = await getAnnouncement();
    _.forEach(list, (announcement: AnnouncementInterface) => {
      contentObj = {
        ...contentObj,
        [announcement.id]: announcement,
      };
    });
    this.setState({ contentObj });
  };

  // *** HANDLE EVENT
  private handleToggleByURL = async (location: any) => {
    const pointer = getHashFromURL(location);
    await this.setState({ pointer });
    scroller.scrollTo(pointer, { duration: 800, smooth: true, offset: -60 });
  };

  private handleClick = async (
    e: React.MouseEvent<HTMLDivElement>,
    id: string
  ) => {
    const { history } = this.props;
    const isSamePointer = this.state.pointer === id;
    history.replace(`/announcement${isSamePointer ? '' : `#${id}`}`);
  };

  private handleDismiss = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    this.props.history.push('/');
  };
}

export default Announcement;
