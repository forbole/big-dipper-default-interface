import { BigDipperNetworkLink } from '@models';

class BigDipperNetwork {
  public links: BigDipperNetworkLink[];
  public logo: string;
  public name: string;

  constructor(payload: any) {
    this.name = payload.name;
    this.links = payload.links;
    this.logo = payload.logo;
  }

  static fromJson(data: any) {
    return new BigDipperNetwork({
      name: data.name,
      links: data?.links?.map((x) => BigDipperNetworkLink.fromJson(x)),
      logo: data.logo,
    });
  }
}

export default BigDipperNetwork;
