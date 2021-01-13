import {
  useEffect, useState,
} from 'react';
import axios from 'axios';
import { getLanguageValue } from '@utils';
import {
  darkTheme,
  lightTheme,
} from '@styles';
import { KeybaseProfile } from '@models';
import {
  i18n,
  useTranslation,
} from '../../../i18n';

export const useAppHook = () => {
  const { t } = useTranslation('common');
  // =========================
  // theme
  // =========================
  const [themeMode, setMode] = useState('light');
  const theme:any = themeMode === 'dark' ? darkTheme : lightTheme;

  useEffect(() => {
    const isClient = typeof window === 'object';
    if (isClient && window?.matchMedia('(prefers-color-scheme: dark)')?.matches) {
      setMode('dark');
    }
  }, []);

  const toggleThemeMode = () => {
    const value = themeMode === 'light' ? 'dark' : 'light';
    setMode(value);
  };

  const getThemeMode = () => {
    return ({
      value: t(themeMode),
      key: themeMode,
    });
  };

  // =========================
  // language
  // =========================
  const changeLanguage = ({
    key, value,
  }: any) => {
    console.log(`Click Value ${value} with key ${key}`);
    if (i18n.language !== key) {
      i18n.changeLanguage(key);
    }
  };

  const getCurrentLanguage = () => {
    const lang = i18n.language ?? 'en';
    return {
      key: lang,
      value: getLanguageValue(lang),
    };
  };

  return {
    themeMode,
    setMode,
    theme,
    toggleThemeMode,
    changeLanguage,
    getCurrentLanguage,
    getThemeMode,
  };
};

// ================================
// keybase global state
// ================================
export const useKeybaseHook = () => {
  const [keybaseList, setKeybase] = useState({
  });

  const handleSetKeybase = (stateChange: {
    [key: string]: KeybaseProfile;
  }) => {
    setKeybase((prevState) => {
      return ({
        ...prevState, ...stateChange,
      });
    });
  };

  return {
    keybaseList,
    handleSetKeybase,
  };
};

// ================================
// validators map global state
// ================================
/**
 * Initial global hook to fetch the current list of validators.
 * Displays a map with self delegate address
 */
export const useGetValidatorAddressListHook = () => {
  const [validatorsMap, setValidatorsMap] = useState({
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios({
          url: process.env.NEXT_PUBLIC_GRAPHQL_URL,
          method: 'post',
          data: {
            query: VALIDATORS_ADDRESS_LIST_RAW,
          },
        });
        const newState = {
        };

        R.pathOr([], ['data', 'validator'], data).forEach((x) => {
          const formattedData = ValidatorAddressList.fromJson(x);
          newState[formattedData.selfDelegateAddress] = formattedData;
        });
        setValidatorsMap(newState);
      } catch (error) {
        console.error(error.message);
      }
    };

    getData();
  }, []);

  return {
    validators: validatorsMap,
  };
};
