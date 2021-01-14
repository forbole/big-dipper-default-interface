import numeral from 'numeral';

class MsgDeposit {
  public type: string;
  public proposalId: number | string;
  public depositor: string;
  public amount: {
    denom: string;
    amount: string | number;
  }[];

  constructor(payload: any) {
    this.type = payload.type;
    this.proposalId = payload.proposalId;
    this.depositor = payload.depositor;
    this.amount = payload.amount;
  }

  static fromJson(json: any) {
    return new MsgDeposit({
      type: json['@type'],
      proposalId: numeral(json.proposal_id).value(),
      depositor: json.depositor,
      amount: json?.amount.map((x) => {
        return ({
          denom: x?.denom,
          amount: numeral(x?.amount).value(),
        });
      }),
    });
  }
}

export default MsgDeposit;
