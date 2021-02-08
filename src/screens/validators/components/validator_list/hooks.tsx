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
import { parseValidators } from './utils';

export const useValidatorListHook = (t:any) => {
  const router = useRouter();
  const [tabValue, setTabValue] = useState(0);
  const [searchValue, setSearch] = useState('');
  const [state, setState] = useState<{
    validators: ValidatorList[];
    bonded: number;
    signedBlockWindow: number;
    inactiveIndex: number; // helper to deal with tab switch lag
  }>({
    validators: [],
    bonded: 0,
    signedBlockWindow: 0,
    inactiveIndex: 1,
  });

  // ===============================
  // get data
  // ===============================
  useQuery(gql`${VALIDATOR_LIST}`, {
    onCompleted: (data) => {
      const parsedValidators = validatorListParser(data);
      const parsedStabilities = stabilitiesParser(data);
      const parsedSlashing = slashingParamParser(data);
      setState((prevState) => ({
        ...prevState,
        validators: parsedValidators,
        bonded: parsedStabilities.bondedTokens,
        signedBlockWindow: parsedSlashing.signedBlockWindow,
      }));
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

  const handleLoadMoreInactive = () => {
    if (state.validators.length) {
      setState((prevState) => ({
        ...prevState,
        inactiveIndex: prevState.inactiveIndex + 1,
      }));
    }
  };

  return {
    tabValue,
    handleTabChange,
    handleSearchChange,
    handleSearchSubmit,
    handleLoadMoreInactive,
    searchValue,
    handleRowClick,
    validators: parseValidators(t, state, {
      inactiveIndex: state.inactiveIndex,
    }),
  };
};
