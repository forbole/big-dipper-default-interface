import { Stabilities } from '@models';

export const stabilitiesParser = (data:any): Stabilities => {
  return (
    Stabilities.fromJson(data ?? {
    })
  );
};
