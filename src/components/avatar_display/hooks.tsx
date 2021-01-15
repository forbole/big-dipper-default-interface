import {
  useContext, useState, useEffect,
} from 'react';
import { GlobalContext } from '@contexts';
import { ValidatorAddressList } from '@models';

export const useAvatarDisplayHook = (address:string) => {
  const [validator, setValidator] = useState<ValidatorAddressList>(null);

  const globalState = useContext(GlobalContext);
  const {
    validators = {
    },
  } = globalState;

  useEffect(() => {
    if (validators[address]) {
      setValidator(validators[address]);
    }
  }, [address, validators]);

  return {
    validator,
  };
};
