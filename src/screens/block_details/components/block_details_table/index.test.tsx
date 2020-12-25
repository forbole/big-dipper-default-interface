import React from 'react';
import { useTranslation } from 'i18n';
import { mount } from 'enzyme';
import { BlockDetails } from 'big-dipper-default-ui';
import { BaseWrapper } from '@tests/utils/base_wrapper';
import { lightTheme } from '@styles';
import {
  Proposer,
  signatureData,
} from './utils';

describe('NotFound', () => {
  it('correctly renders component', () => {
    const { t } = useTranslation(['blocks', 'activities']);
    const wrapper = mount(
      BaseWrapper({
        component: <BlockDetails
          title="Block # 2,768,644"
          txHash={{
            display: t('txHash'),
            value: '73FCAFE9BAF19BB405086CFFA1C8FEC510486AFAC5CBD48A2F57A3C79ABA1255',
          }}
          time={{
            display: t('timeDisplay'),
            value: '10 Jan 2020, 12:59:27 UTC',
          }}
          noTransactions={{
            display: t('noTransactions'),
            value: '1',
          }}
          proposer={{
            display: t('proposer'),
            value: <Proposer />,
          }}
          signedVotingPower={{
            display: t('signedVotingPower'),
            value: '89%',
          }}
          signatures={{
            display: 'Signatures',
            value: '100 signatures',
            labels: {
              validator: 'Validator',
              votingPower: 'Voting Power',
              votingPowerPercentage: 'Voting Power (Percentage)',
              signStatus: 'Sign Status',
            },
            data: signatureData,
          }}
          desktop
        />,
        theme: lightTheme,
      }),
    );
    expect(wrapper).not.toBeNull();
    expect(wrapper.find(BlockDetails)).toHaveLength(1);
    expect(wrapper.find('h1').first().text()).toEqual('Block # 2,768,644');
  });
});
