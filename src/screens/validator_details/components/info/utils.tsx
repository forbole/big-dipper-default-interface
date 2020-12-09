import { formatMiddleEllipse } from '@utils';

export const dummyData = {
  operatorAddress: 'cosmosvaloper14kn0kk33szpwus9nh8n87fjel8djx0y070ymmj',
  selfDelegateAddress: 'cosmosvaloper14kn0kk33szpwus9nh8n87fjel8djx0y070ymmj',
  maxChangeRate: '2%',
  maxRate: '5%',
};

export const formatData = (data, isDesktop) => {
  // if it's mobile we want to ellipse the string
  if (!isDesktop) {
    const formatOptions = {
      maxLength: 20,
      beginning: 8,
      ending: 8,
    };
    return {
      operatorAddress: formatMiddleEllipse(data.operatorAddress ?? '', formatOptions),
      selfDelegateAddress: formatMiddleEllipse(data.selfDelegateAddress ?? '', formatOptions),
      maxChangeRate: data.maxChangeRate,
      maxRate: data.maxRate,
    };
  }
  return data;
};
