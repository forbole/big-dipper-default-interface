import { ConsensusPool } from '@models';

export const consensusPoolParser = (data:any): ConsensusPool => {
  return (
    ConsensusPool.fromJson(data ?? {
    })
  );
};
