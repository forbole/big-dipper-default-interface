import { LatestActivity } from '@models';
import { formatMiddleEllipse } from '@utils';
import moment from 'moment';

export const formatLatestActivitiesData = (data: LatestActivity[]) => {
  return data.map((x) => {
    return ({
      hash: {
        value: x.hash,
        display: `#${formatMiddleEllipse(x.hash, {
          beginning: 7,
          ending: 5,
        })}`,
      },
      timestamp: moment(x.timestamp).format('DD MMM YYYY, HH:mm'),
      success: x.success,
      messages: [
        <div>one message</div>,
        <div>two message</div>,
      ],
    });
  });
};
