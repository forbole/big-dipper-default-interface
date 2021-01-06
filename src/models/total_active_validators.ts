class TotalActiveValidators {
  public active: number;
  public inactive: string;
  public total: number;

  constructor(payload) {
    this.active = payload.active;
    this.inactive = payload.inactive;
    this.total = payload.total;
  }

  static fromJson(data: any) {
    const active = data?.active_validators?.aggregate?.count ?? 0;
    const inactive = data?.not_active_validators?.aggregate?.count ?? 0;
    const total = active + inactive;
    return new TotalActiveValidators({
      active,
      inactive,
      total,
    });
  }
}

export default TotalActiveValidators;
