import { LATEST_ACTIVITIES } from '@graphql/queries';
import { gql } from '@apollo/client';

export const LATEST_ACTIVITIES_MOCK_DATA = (variables?: {
  limit?: number, offset?: number, height?: number
}) => {
  const {
    limit = 10,
    offset,
    height,
  } = variables ?? {
  };

  const formatVariables:any = {
  };

  if (limit !== undefined) {
    formatVariables.limit = limit;
  }
  if (offset !== undefined) {
    formatVariables.offset = offset;
  }
  if (height !== undefined) {
    formatVariables.height = height;
  }

  return (
    [
      {
        request: {
          query: gql`${LATEST_ACTIVITIES}`,
          variables: formatVariables,
        },
        result: {
          data: {
            transaction: [
              {
                block: {
                  timestamp: '2020-10-24T01:02:08',
                },
                hash: 'AF262C570A577A730D8BE900AABFAFC71F9E37F27182A4E6DB0C599E0FD003C6',
                height: 273251,
                messages: [
                  {
                    type: 'cosmos-sdk/MsgSend',
                    value: {
                      amount: [
                        {
                          denom: 'udaric',
                          amount: '10000000',
                        },
                      ],
                      to_address: 'desmos1usxulamszd7myr0fa9g0klk3gv906tqglq8m8w',
                      from_address: 'desmos1dzn2s7l0wm9kekyazcnhapu8j95n90efmcmrad',
                    },
                  },
                ],
                success: true,
              },
              {
                block: {
                  timestamp: '2020-10-24T01:02:08',
                },
                hash: 'B75A16C113E7D85B78D98E23AB300EC3221C693EEA830DE2F1E6A95C6E8D81D6',
                height: 268574,
                messages: [
                  {
                    type: 'cosmos-sdk/MsgSend',
                    value: {
                      amount: [
                        {
                          denom: 'udaric',
                          amount: '10000000',
                        },
                      ],
                      to_address: 'desmos1ayllr4gpv7lqnkpr7uwtz7u494p88aeqkaagf4',
                      from_address: 'desmos1dzn2s7l0wm9kekyazcnhapu8j95n90efmcmrad',
                    },
                  },
                ],
                success: true,
              },
              {
                block: {
                  timestamp: '2020-10-24T01:02:08',
                },
                hash: '818AFAD3AE94ECD66F8E51F477C8DF682278D216F248E97EFD26C590E923D9E1',
                height: 251204,
                messages: [
                  {
                    type: 'cosmos-sdk/MsgUnjail',
                    value: {
                      address: 'desmosvaloper1nqj3de2rxg385ddfa0jg05ktha4gwkrc83uf4n',
                    },
                  },
                ],
                success: true,
              },
              {
                block: {
                  timestamp: '2020-10-24T01:02:08',
                },
                hash: '1EF1A77AB283387E0DC3131F0EF7393C65DC58DB8597EBD929E6501111849E55',
                height: 248240,
                messages: [
                  {
                    type: 'cosmos-sdk/MsgDelegate',
                    value: {
                      amount: {
                        denom: 'udaric',
                        amount: '196996154',
                      },
                      delegator_address: 'desmos1w8tud7cefenfgfechut0q3lgeazdwxrmlxvrxq',
                      validator_address: 'desmosvaloper1w8tud7cefenfgfechut0q3lgeazdwxrmptyhvj',
                    },
                  },
                ],
                success: true,
              },
              {
                block: {
                  timestamp: '2020-10-24T01:02:08',
                },
                hash: 'AF93D1406C555BD1B25A33DCF6656D4455FED1B171DE70CE8805C60C49C2A1B3',
                height: 248218,
                messages: [
                  {
                    type: 'cosmos-sdk/MsgDelegate',
                    value: {
                      amount: {
                        denom: 'udaric',
                        amount: '10000000000',
                      },
                      delegator_address: 'desmos1w8tud7cefenfgfechut0q3lgeazdwxrmlxvrxq',
                      validator_address: 'desmosvaloper1w8tud7cefenfgfechut0q3lgeazdwxrmptyhvj',
                    },
                  },
                ],
                success: false,
              },
              {
                block: {
                  timestamp: '2020-10-24T01:02:08',
                },
                hash: '6F9BC78B08F348EF3C16B23C7B764AD00118B168D0FCAD5B8F787CAEABC55052',
                height: 248215,
                messages: [
                  {
                    type: 'cosmos-sdk/MsgDelegate',
                    value: {
                      amount: {
                        denom: 'udaric',
                        amount: '1000000000',
                      },
                      delegator_address: 'desmos1w8tud7cefenfgfechut0q3lgeazdwxrmlxvrxq',
                      validator_address: 'desmosvaloper1w8tud7cefenfgfechut0q3lgeazdwxrmptyhvj',
                    },
                  },
                ],
                success: false,
              },
              {
                block: {
                  timestamp: '2020-10-24T01:02:08',
                },
                hash: '958C45E7783D96672ED7A3CF7B44F5586BA0B7D5ECF305C193C8F93605E1E91F',
                height: 248207,
                messages: [
                  {
                    type: 'cosmos-sdk/MsgDelegate',
                    value: {
                      amount: {
                        denom: 'udaric',
                        amount: '10000000',
                      },
                      delegator_address: 'desmos1w8tud7cefenfgfechut0q3lgeazdwxrmlxvrxq',
                      validator_address: 'desmosvaloper1w8tud7cefenfgfechut0q3lgeazdwxrmptyhvj',
                    },
                  },
                ],
                success: true,
              },
              {
                block: {
                  timestamp: '2020-10-24T01:02:08',
                },
                hash: '36D7DD527D23CCF2D02605DF9928A4DA179EBCFE66F4DC2AC08E2BC4F7629F6F',
                height: 248201,
                messages: [
                  {
                    type: 'cosmos-sdk/MsgDelegate',
                    value: {
                      amount: {
                        denom: 'udaric',
                        amount: '1000000',
                      },
                      delegator_address: 'desmos1w8tud7cefenfgfechut0q3lgeazdwxrmlxvrxq',
                      validator_address: 'desmosvaloper1w8tud7cefenfgfechut0q3lgeazdwxrmptyhvj',
                    },
                  },
                ],
                success: true,
              },
              {
                block: {
                  timestamp: '2020-10-24T01:02:08',
                },
                hash: '54912C4B07BCAC55D9CB736C261B632332A63653E9806AA8AD206220D003CFF3',
                height: 248195,
                messages: [
                  {
                    type: 'cosmos-sdk/MsgDelegate',
                    value: {
                      amount: {
                        denom: 'udaric',
                        amount: '1000000',
                      },
                      delegator_address: 'desmos1w8tud7cefenfgfechut0q3lgeazdwxrmlxvrxq',
                      validator_address: 'desmosvaloper1w8tud7cefenfgfechut0q3lgeazdwxrmptyhvj',
                    },
                  },
                ],
                success: true,
              },
              {
                block: {
                  timestamp: '2020-10-24T01:02:08',
                },
                hash: 'F7013F9DF9E4C3C4803A1876D839311854A51681824E4CC6AD11F39AF118D9DB',
                height: 246504,
                messages: [
                  {
                    type: 'cosmos-sdk/MsgSend',
                    value: {
                      amount: [
                        {
                          denom: 'udaric',
                          amount: '10000000',
                        },
                      ],
                      to_address: 'desmos1gululgadkufsg6jlqzf25h9qfeszyt87u9zaed',
                      from_address: 'desmos1dzn2s7l0wm9kekyazcnhapu8j95n90efmcmrad',
                    },
                  },
                ],
                success: true,
              },
            ],
          },
        },
      },
    ]
  );
};
