import numeral from 'numeral';
import * as R from 'ramda';
import { getMessageModelByType } from '@utils';

class ActivityDetail {
  public hash: string;
  public height: number;
  public fee: {
    gas: number;
  }
  public gasUsed: number;
  public gasWanted: number;
  public success: boolean;
  public memo: string;
  public timestamp: string;
  public messages: any[];

  constructor(payload) {
    this.hash = payload.hash;
    this.height = payload.height;
    this.fee = payload.fee;
    this.gasUsed = payload.gasUsed;
    this.gasWanted = payload.gasWanted;
    this.success = payload.success;
    this.memo = payload.memo;
    this.timestamp = payload.timestamp;
    this.messages = payload.messages;
  }

  static fromJson(json: any) {
    return new ActivityDetail({
      hash: json.hash,
      height: json.height,
      fee: {
        gas: numeral(json?.fee?.gas).value(),
      },
      gasUsed: json.gas_used,
      gasWanted: json.gas_wanted,
      success: json.success,
      memo: json.memo,
      timestamp: json.timestamp,
      messages: R.pathOr([], ['messages'], json).map((x) => {
        return getMessageModelByType(x?.['@type']).fromJson(x);
      }),
    });
  }
}

export default ActivityDetail;
