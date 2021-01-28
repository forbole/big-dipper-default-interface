import Link from 'next/link';
import { ValidatorInfo } from '@models';
import {
  formatMiddleEllipse, convertNumber,
} from '@utils';

export const formatData = (data: ValidatorInfo, isDesktop) => {
  const formatOptions = {
    beginning: 8,
    ending: 8,
  };
  return {
    operatorAddress: {
      raw: data.operatorAddress,
      display: !isDesktop
        ? formatMiddleEllipse(data.operatorAddress ?? '', formatOptions)
        : data.operatorAddress,
    },
    selfDelegateAddress: {
      raw: data.selfDelegateAddress,
      display: (
        <Link href={`/accounts/${data.selfDelegateAddress}`}>
          <a>
            <p>
              {!isDesktop
                ? formatMiddleEllipse(data.selfDelegateAddress ?? '', formatOptions)
                : data.selfDelegateAddress}
            </p>
          </a>
        </Link>
      ),
    },
    maxChangeRate: convertNumber(data.maxChangeRate, {
      suffix: '%',
      format: '0.00',
    }).display,
    maxRate: convertNumber(data.maxRate, {
      suffix: '%',
      format: '0.00',
    }).display,
    commissionRate: convertNumber(data.commissionRate, {
      suffix: '%',
      format: '0.00',
    }).display,
  };
};
