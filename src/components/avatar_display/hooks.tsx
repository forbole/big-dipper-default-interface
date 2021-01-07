import axios from 'axios';
import * as R from 'ramda';
import { useEffect } from 'react';
import { KeybaseProfile } from '@models';

export const usdAvatarDisplayHelperHook = (identity: string | null | undefined, keybaseList: {
  [ key: string ]: KeybaseProfile
}) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (identity.length === 16) {
          const { data } = await axios.get(`https://keybase.io/_/api/1.0/user/lookup.json?key_suffix=${identity}&fields=basics&fields=pictures`);
          console.log(identity, 'the id');
          console.log(data, 'data');

          if (data?.status?.code === 0) {
            // wingman
            // might need to set state
            keybaseList[identity] = KeybaseProfile.fromJson(R.pathOr({
            }, ['them', 0], data));
          }
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    if (identity && keybaseList?.[identity]) {
      console.log('already have!');
    } else {
      fetchData();
    }
  }, [identity]);
};
