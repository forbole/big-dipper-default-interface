import { useRouter } from 'next/router';
import { useState } from 'react';
import copy from 'copy-to-clipboard';
import { toast } from 'react-toastify';
import {
  useQuery, gql,
} from '@apollo/client';
import { useGetScreenSizeHook } from '@hooks';
import { VALIDATOR_INFO } from '@graphql/queries';
import { validatorInfoParser } from '@src/graphql/parsers/queries';
import { ValidatorInfo } from '@models';
import { formatData } from './utils';

export const useInfoHook = (t:any) => {
  const router = useRouter();
  const { isDesktop } = useGetScreenSizeHook();
  const [info, setInfo] = useState<ValidatorInfo>(ValidatorInfo.fromJson({
  }));

  console.log('validator', router?.query?.validator);

  // ===============================
  // get data
  // ===============================
  useQuery(gql`${VALIDATOR_INFO}`, {
    variables: {
      address: router?.query?.validator ?? null,
    },
    onCompleted: (data) => {
      const parsedData = validatorInfoParser(data);
      setInfo(parsedData);
    },
  });

  // ===============================
  // get utils
  // ===============================
  const handleCopy = (value:string) => {
    copy(value);
    toast(`${t('common:copied')}!`);
  };

  return {
    handleCopy,
    isDesktop,
    info: formatData(info, isDesktop),
  };
};
