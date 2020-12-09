import React from 'react';
import { ValidatorInfo } from 'big-dipper-default-ui';
import { useInfoHook } from './hooks';

const Info = () => {
  const { handleCopy } = useInfoHook();
  return (
    <ValidatorInfo
      title="Validator Info"
      copyCallback={handleCopy}
      operatorAddress={{
        label: 'Operator Address',
        rawValue: '123456678',
        display: '123...56758',
      }}
      selfDelegateAddress={{
        label: 'Self-Delegate Address',
        rawValue: '123456678',
        display: <p>123...5678</p>,
      }}
      commissionRate={{
        label: 'Commission Rate',
        display: '10%',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna libero, mattis nec ultrices sit amet, pharetra vitae lorem. Quisque pretium pulvinar eros,',
      }}
      maxChangeRate={{
        label: 'Max Change Rate',
        display: '2%',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna libero, mattis nec ultrices sit amet, pharetra vitae lorem. Quisque pretium pulvinar eros,',
      }}
      maxRate={{
        label: 'Max Rate',
        display: '5%',
        description: 'Max Rate Description',
      }}
    />
  );
};

export default Info;
