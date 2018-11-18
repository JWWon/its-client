import { Section } from 'components/common';
import produce from 'immer';
import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

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
    list.forEach((announcement: AnnouncementInterface) => {
      contentObj = {
        ...contentObj,
        [announcement.id]: announcement,
      };
    });
    this.setState({ contentObj });
  };

  // *** HANDLE EVENT
  private handleToggleByURL = (location: any) => {
    const { contentObj } = this.state;
    const pointer = getHashFromURL(location) || Object.keys(contentObj)[0];
    this.setState({ pointer });
  };

  private handleClick = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    this.setState(prevState =>
      produce(prevState, (draft: State) => {
        draft.pointer = id;
      })
    );
    this.props.history.replace(`/announcement#${id}`);
  };

  private handleDismiss = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    this.props.history.push('/');
  };
}

export default Announcement;
