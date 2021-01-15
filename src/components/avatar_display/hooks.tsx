import {
  useContext, useState, useEffect,
} from 'react';
import { GlobalContext } from '@contexts';

export const useAvatarDisplayHook = (address:string) => {
  const [validator, setValidator] = useState(null);

  const globalState = useContext(GlobalContext);

  useEffect(() => {
    const { validators } = globalState;
    if (validators[address]) {
      setValidator(validators[address]);
    }
  }, [address]);

  return {
    validator,
  };
};
