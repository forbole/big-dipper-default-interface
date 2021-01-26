import { getMessageModelByType } from '@utils';

class LatestActivity {
  public height: number;
  public success: boolean;
  public hash: string;
  public timestamp: string;
  public messages: any[];

  constructor(payload: any) {
    this.height = payload.height;
    this.hash = payload.hash;
    this.timestamp = payload.timestamp;
    this.success = payload.success;
    this.messages = payload.messages;
  }

  static fromJson(json: any) {
    return new LatestActivity({
      height: json.height,
      hash: json.hash,
      timestamp: json?.block?.timestamp,
      success: json.success,
      messages: json?.messages?.map((x) => {
        return getMessageModelByType(x?.['@type']).fromJson(x);
      }),
    });
  }
}

export default LatestActivity;
