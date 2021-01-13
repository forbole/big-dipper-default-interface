class MsgSoftwareUpgradeProposal {
  public type: string;
  public title: string;
  public description: string;
  public plan: {
    name: string;
    time: string;
    height: string | number;
    info: string;
    upgradedClientState: any;
  }

  constructor(payload: any) {
    this.type = payload.type;
    this.title = payload.title;
    this.description = payload.description;
    this.plan = payload.plan;
  }

  static fromJson(json: any) {
    return new MsgSoftwareUpgradeProposal({
      type: json['@type'],
      title: json.title,
      description: json.description,
      plan: {
        name: json?.plan?.name,
        time: json?.plan?.time,
        height: Number.isNaN(Number(json?.plan?.height))
          ? json?.plan?.height : Number(json?.plan?.height),
        info: json?.plan?.info,
        upgradedClientState: json?.plan?.upgraded_client_state,
      },
    });
  }
}

export default MsgSoftwareUpgradeProposal;
