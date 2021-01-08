import { LATEST_BLOCKS } from '@graphql/queries';

export const LATEST_BLOCKS_MOCK_DATA = (variables?: {limit?: number, offset?: number}) => {
  const {
    limit = 10,
    offset = 0,
  } = variables ?? {
  };

  return (
    [
      {
        request: {
          query: LATEST_BLOCKS,
          variables: {
            limit,
            offset,
          },
        },
        result: {
          data: {
            blocks: [
              {
                height: 45739,
                num_txs: 0,
                hash: 'C2E24A890B8B05BB2F3D923F47229D1D6205714BACFA99C22EDB344FBD0E4F36',
                timestamp: '2020-10-09T04:45:42.100499',
                validator: {
                  validator_description: {
                    moniker: 'Poseidon',
                    validator_address: 'desmosvalcons1mxrd5cyjgpx5vfgltrdufq9wq4ynwc799ndrg8',
                    identity: null,
                  },
                },
              },
              {
                height: 45738,
                num_txs: 0,
                hash: '46F8D2D290EB02E03E90BB891BE2D715B30BF26CF2E03D18B9899BE7C5C5E6E4',
                timestamp: '2020-10-09T04:45:34.992834',
                validator: {
                  validator_description: {
                    moniker: 'ITAstakers',
                    validator_address: 'desmosvalcons1n6x4y8srfml6f4xsynyn9y0dtjrfwfhyjpapkf',
                    identity: null,
                  },
                },
              },
              {
                height: 45737,
                num_txs: 0,
                hash: '2E105011220ED151069460715AF672B5F8EB01F03AF6E318A00D732E42C61E7D',
                timestamp: '2020-10-09T04:45:23.179219',
                validator: {
                  validator_description: {
                    moniker: 'ITAstakers',
                    validator_address: 'desmosvalcons1n6x4y8srfml6f4xsynyn9y0dtjrfwfhyjpapkf',
                    identity: null,
                  },
                },
              },
              {
                height: 45736,
                num_txs: 0,
                hash: 'D451798D2B5AD8AACB9B995F89B9053819466F79A587BF0231A559E185F733FD',
                timestamp: '2020-10-09T04:45:17.309464',
                validator: {
                  validator_description: {
                    moniker: 'Poseidon',
                    validator_address: 'desmosvalcons1mxrd5cyjgpx5vfgltrdufq9wq4ynwc799ndrg8',
                    identity: null,
                  },
                },
              },
              {
                height: 45735,
                num_txs: 0,
                hash: '4B17EB49CBBAA0A1BD8AD2AE221D9E6241B2A6D96C2614A46CA9FBF8D5BCF784',
                timestamp: '2020-10-09T04:45:00.860183',
                validator: {
                  validator_description: {
                    moniker: 'Poseidon',
                    validator_address: 'desmosvalcons1mxrd5cyjgpx5vfgltrdufq9wq4ynwc799ndrg8',
                    identity: null,
                  },
                },
              },
              {
                height: 45734,
                num_txs: 3856,
                hash: 'F07FF1BEBA920CE9866B5828D5475E6A7150F3CD4815854A0BBD0B6677097C9B',
                timestamp: '2020-10-09T04:44:54.003715',
                validator: {
                  validator_description: {
                    moniker: 'KalpaTech',
                    validator_address: 'desmosvalcons1c29eyczh5lw4npe0a9n40nm5g299fq8nt5lerw',
                    identity: null,
                  },
                },
              },
              {
                height: 45733,
                num_txs: 0,
                hash: '944603016C2E47486C7EAA4B3F77C137991B97BCF30C7E479068EC48FA2865D8',
                timestamp: '2020-10-09T04:44:40.073572',
                validator: {
                  validator_description: {
                    moniker: 'Poseidon',
                    validator_address: 'desmosvalcons1mxrd5cyjgpx5vfgltrdufq9wq4ynwc799ndrg8',
                    identity: null,
                  },
                },
              },
              {
                height: 45732,
                num_txs: 5000,
                hash: 'ECA3E7EDF2E66C177BE41A5BAFC27B4E6C8DC0E6AA72D48B855AC0097B6F1E4F',
                timestamp: '2020-10-09T04:44:31.534111',
                validator: {
                  validator_description: {
                    moniker: 'DelegaNetworks',
                    validator_address: 'desmosvalcons1xvl0mr45pwqsujeradcvyxmgt2hauj0gtpjj4z',
                    identity: null,
                  },
                },
              },
              {
                height: 45731,
                num_txs: 1,
                hash: '57DDF9C54A2A91E7A34B9D17D5D4EF8DFA396D97F4972CE35886733B237F585B',
                timestamp: '2020-10-09T04:44:24.454376',
                validator: {
                  validator_description: {
                    moniker: 'Poseidon',
                    validator_address: 'desmosvalcons1mxrd5cyjgpx5vfgltrdufq9wq4ynwc799ndrg8',
                    identity: null,
                  },
                },
              },
              {
                height: 45730,
                num_txs: 0,
                hash: '78129D40B158880ADD6327A70976781BB5154A969A930489CF9EDD65C206C165',
                timestamp: '2020-10-09T04:44:16.004241',
                validator: {
                  validator_description: {
                    moniker: 'ITAstakers',
                    validator_address: 'desmosvalcons1n6x4y8srfml6f4xsynyn9y0dtjrfwfhyjpapkf',
                    identity: null,
                  },
                },
              },
            ],
          },
        },
      },
    ]
  );
};
