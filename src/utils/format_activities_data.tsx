import { LatestActivity } from '@models';
import { ActivityMessage } from '@components';
import { formatMiddleEllipse } from '@utils';
import moment from 'moment';

/**
 * Helper function to help parse and format data to be useable with UI
 * @param data
 */
export const formatActivitiesData = (data: LatestActivity[]) => {
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
        <ActivityMessage />,
      ],
    });
  });
};
