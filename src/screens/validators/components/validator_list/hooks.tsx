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
import { parse } from 'dotenv/types';

export const useValidatorListHook = () => {
  const router = useRouter();
  const [tabValue, setTabValue] = useState(0);
  const [searchValue, setSearch] = useState('');
  const [state, setState] = useState<{
    validators: ValidatorList[];
    bonded: number;
    signedBlockWindow: number;
  }>({
    validators: [],
    bonded: 0,
    signedBlockWindow: 0,
  });

  // ===============================
  // get data
  // ===============================
  useQuery(gql`${VALIDATOR_LIST}`, {
    onCompleted: (data) => {
      const parsedValidators = validatorListParser(data);
      const parsedStabilities = stabilitiesParser(data);
      const parsedSlashing = slashingParamParser(data);
      setState({
        validators: parsedValidators,
        bonded: parsedStabilities.bondedTokens,
        signedBlockWindow: parsedSlashing.signedBlockWindow,
      });
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
