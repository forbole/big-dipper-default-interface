import { useState } from 'react';
import {
  useQuery, gql,
} from '@apollo/client';
import { useRouter } from 'next/router';
import { validatorListParser } from '@src/graphql/parsers/queries';
import { ValidatorList } from '@models';
import { VALIDATORLIST } from '@graphql/queries';
import { generalConfig } from '@src/general_config';

export const useValidatorListHook = () => {
  const router = useRouter();
  const [tabValue, setTabValue] = useState(0);
  const [searchValue, setSearch] = useState('');

  const handleTabChange = (_event:any, newValue: number) => {
    setTabValue(newValue);
  };

  const handleSearchChange = (e:any) => {
    setSearch(e?.target?.value);
  };

  const handleSearchSubmit = (e:any) => {
    e.preventDefault();
    console.log(`searched with values: ${searchValue}`);
  };

  const handleRowClick = (data:any) => {
    if (data?.operatorAddress) {
      router.push(`/validators/${data.operatorAddress}`);
    }
  };

  const [validatorList, setValidatorList] = useState<ValidatorList>(ValidatorList.fromJson({
  }));

  useQuery(gql`${VALIDATORLIST}`, {
    pollInterval: generalConfig.pollInterval.default,
    notifyOnNetworkStatusChange: true,
    onCompleted: (data) => {
      setValidatorList(validatorListParser(data));
      console.log('data', data);
      console.log('complete');
    },

  });
  console.log('validatorList2', validatorList);

  return {
    tabValue,
    handleTabChange,
    handleSearchChange,
    handleSearchSubmit,
    searchValue,
    handleRowClick,
    validatorList,
  };
};
