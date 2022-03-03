import React, { useMemo } from 'react';
import { Empty } from 'antd';
import { Feed } from '@app/components/common/Feed/Feed';
import { RecentActivityItem } from '@app/components/nft-dashboard/recentActivity/recentActivityFeed/RecentActivityItem/RecentActivityItem';
import { Activity } from '@app/api/activity.api';
import * as S from './RecentActivityFeed.styles';

interface RecentActivityFeedProps {
  activity: Activity[];
  hasMore: boolean;
  next: () => void;
}

export const RecentActivityFeed: React.FC<RecentActivityFeedProps> = ({ activity, hasMore, next }) => {
  const activityItems = useMemo(
    () => activity.map((item, index) => <RecentActivityItem key={index} {...item} />),
    [activity],
  );

  return activityItems.length > 0 ? (
    <S.FeedWrapper id="recent-activity-feed">
      <Feed hasMore={hasMore} next={next} target="recent-activity-feed">
        {activityItems}
      </Feed>
    </S.FeedWrapper>
  ) : (
    <Empty />
  );
};
