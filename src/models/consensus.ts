class Consensus {
  public height: number;
  public step: string;
  public round: number;

  constructor(payload: any) {
    this.height = payload.height;
    this.step = payload.step;
    this.round = payload.round;
  }

  static fromJson(data: any) {
    return new Consensus({
      height: data.height ?? 0,
      step: data.step ?? '',
      round: data.round ?? 0,
    });
  }
}

export default Consensus;
