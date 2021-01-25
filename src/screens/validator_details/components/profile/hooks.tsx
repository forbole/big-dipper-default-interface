import {
  useState, useContext,
} from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import {
  useQuery, gql,
} from '@apollo/client';
import { GlobalContext } from '@contexts';
import { useKeybaseHook } from '@hooks';
import { VALIDATOR_PROFILE } from '@graphql/queries';
import { validatorProfileParser } from '@src/graphql/parsers/queries';
import { ValidatorProfile } from '@models';
import { formatProfileData } from './utils';

export const useProfileHook = () => {
  const router = useRouter();
  const globalState = useContext(GlobalContext);
  const [profile, setProfile] = useState<ValidatorProfile>(ValidatorProfile.fromJson({
  }));

  // ===============================
  // get data
  // ===============================
  useQuery(gql`${VALIDATOR_PROFILE}`, {
    variables: {
      address: router?.query?.validator ?? null,
    },
    onCompleted: (data) => {
      const parsedData = validatorProfileParser(data);
      if (parsedData) {
        setProfile(parsedData);
      } else {
        router.push('/404');
      }
    },
  });

  useKeybaseHook(profile?.identity, globalState);
  const { keybaseList } = globalState;
  const verifiedUser = keybaseList?.[profile?.identity];

  return {
    profile: formatProfileData(
      profile?.validatorAddress ?? R.pathOr('', ['query', 'validator'], router),
      profile,
      verifiedUser,
    ),
  };
};
