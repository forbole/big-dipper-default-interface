import axios from 'axios';
import * as R from 'ramda';
import { useEffect } from 'react';
import { KeybaseProfile } from '@models';

export const usdAvatarDisplayHelperHook = (identity: string | null | undefined, globalState) => {
  useEffect(() => {
    const {
      keybaseList, handleSetKeybase,
    } = globalState;

    const fetchData = async () => {
      try {
        if (identity.length === 16) {
          const { data } = await axios.get(`https://keybase.io/_/api/1.0/user/lookup.json?key_suffix=${identity}&fields=basics&fields=pictures`);

          if (data?.status?.code === 0) {
            // const newKeybaseList = R.clone(keybaseList);
            // newKeybaseList[identity] = KeybaseProfile.fromJson(R.pathOr({
            // }, ['them', 0], data));
            // console.log(newKeybaseList, 'new list');
            // keybaseList[identity] = KeybaseProfile.fromJson(R.pathOr({
            // }, ['them', 0], data));
            // console.log(keybaseList, 'well what now');
            // setKeybase(newKeybaseList);
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

    if (identity && keybaseList?.[identity]) {
      console.log('already have!');
    } else {
      fetchData();
    }
  }, [identity]);
};
