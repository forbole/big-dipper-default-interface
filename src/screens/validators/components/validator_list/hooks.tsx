import { useState } from 'react';
import {
  useQuery, gql,
} from '@apollo/client';
import { useRouter } from 'next/router';
import {
  validatorListParser, slashingParamParser, stabilitiesParser,
} from '@src/graphql/parsers/queries';
import { ValidatorList } from '@models';
import { VALIDATOR_LIST } from '@graphql/queries';
import { generalConfig } from '@src/general_config';

export const useValidatorListHook = () => {
  const router = useRouter();
  const [tabValue, setTabValue] = useState(0);
  const [searchValue, setSearch] = useState('');
  const [validators, setValidators] = useState<ValidatorList[]>([]);

  // ===============================
  // get data
  // ===============================
  useQuery(gql`${VALIDATOR_LIST}`, {
    onCompleted: (data) => {
      const parsedValidators = validatorListParser(data);
      const parsedStabilities = stabilitiesParser(data);
      const parsedSlashing = slashingParamParser(data);
      console.log(parsedSlashing, 'validators');
      // const parsedData = validatorInfoParser(data);
      // setInfo(parsedData);
    },
  });

  // ===============================
  // utils
  // ===============================
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

  return {
    tabValue,
    handleTabChange,
    handleSearchChange,
    handleSearchSubmit,
    searchValue,
    handleRowClick,
    // validatorList,
  };
};
