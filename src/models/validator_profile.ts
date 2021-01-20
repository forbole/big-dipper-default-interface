import * as R from 'ramda';

class ValidatorProfile {
  public moniker: string;
  public details: string;
  public identity: string | null;
  public website: string | null;
  public validatorStatus: {
    status: number;
    jailed: boolean;
  }

  constructor(payload: any) {
    this.moniker = payload.moniker;
    this.details = payload.details;
    this.identity = payload.identity;
    this.website = payload.website;
    this.validatorStatus = payload.validatorStatus;
  }

  static fromJson(data: any) {
    return new ValidatorProfile({
      moniker: R.pathOr(null, ['validator_description', 'moniker'], data),
      details: R.pathOr(null, ['validator_description', 'details'], data),
      identity: R.pathOr(null, ['validator_description', 'identity'], data),
      website: R.pathOr(null, ['validator_description', 'website'], data),
      validatorStatus: {
        status: R.pathOr(0, ['validator_status', 'status'], data),
        jailed: R.pathOr(false, ['validator_status', 'jailed'], data),
      },
    });
  }
}

export default ValidatorProfile;
