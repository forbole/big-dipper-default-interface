import { AverageBlockTimes } from '@models';

export const averageBlockTimesParser = (data:any) => {
  return (
    AverageBlockTimes.fromJson(data ?? {
    })
  );
};
