export const getAddressRole = (address: string): 'validator' | 'user' | null => {
  if (address.includes('desmosvalcons')) {
    return 'validator';
  }
  if (address.includes('desmos')) {
    return 'user';
  }
  return null;
};
