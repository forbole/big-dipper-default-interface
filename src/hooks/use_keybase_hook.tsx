import axios from 'axios';
import * as R from 'ramda';
import { useEffect } from 'react';
import { KeybaseProfile } from '@models';

export const useKeybaseHook = (identity: string | null | undefined, globalState) => {
  useEffect(() => {
    const {
      keybaseList, handleSetKeybase,
    } = globalState;
    const fetchData = async () => {
      try {
        if (identity?.length === 16) {
          const { data } = await axios.get(`https://keybase.io/_/api/1.0/user/lookup.json?key_suffix=${identity}&fields=basics&fields=pictures`);

          if (data?.status?.code === 0 && data?.them?.length > 0) {
            handleSetKeybase({
              [identity]: KeybaseProfile.fromJson(R.pathOr({
              }, ['them', 0], data)),
            });
          }
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    if (identity && !keybaseList?.[identity]) {
      fetchData();
    }
  }, [identity]);
};
