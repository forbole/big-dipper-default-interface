import { getLanguageValue } from '@utils';

export const getLanguageList = () => {
  const langaugeList = ['en'];
  return langaugeList.map((x) => ({
    key: x,
    value: getLanguageValue(x),
  }));
};
