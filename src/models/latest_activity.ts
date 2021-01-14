class LatestActivity {
  public height: number;
  public success: boolean;
  public hash: string;
  public timestamp: string;
  // public messages: any[];

  constructor(payload: any) {
    this.height = payload.height;
    this.hash = payload.hash;
    this.timestamp = payload.timestamp;
    this.success = payload.success;
    // this.messages = payload.message;
  }

  static fromJson(json: any) {
    return new LatestActivity({
      height: json.height,
      hash: json.hash,
      timestamp: json.timestamp,
      success: json.success,
    });
  }
}

export default LatestActivity;
