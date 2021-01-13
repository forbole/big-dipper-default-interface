import { AverageBlockTimes } from '@models';

export const averageBlockTimesParser = (data:any):AverageBlockTimes => {
  return (
    AverageBlockTimes.fromJson(data ?? {
    })
  );
};
