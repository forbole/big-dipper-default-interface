export const getAddressRole = (address = ''): 'validator' | 'user' | null => {
  if (new RegExp(/^(desmosvalcons|desmosvaloper)/).test(address)) {
    return 'validator';
  }
  if (new RegExp(/^(desmos)/).test(address)) {
    return 'user';
  }
  return null;
};
