export class Inflation{
  public value: number;
  constructor(payload: any) {
    this.value = payload.value;
  }
  static fromJson(json: any) {
    return new Inflation({
      value:json.value,
    });
  }
}