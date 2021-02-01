import * as R from 'ramda';

class SlashingParam {
  public signedBlockWindow: number;

  constructor(payload: any) {
    this.signedBlockWindow = payload.signedBlockWindow;
  }

  static fromJson(json: any) {
    return new SlashingParam({
      signedBlockWindow: R.pathOr(0, ['signed_block_window'], json),
    });
  }
}

export default SlashingParam;
