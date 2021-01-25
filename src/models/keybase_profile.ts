import * as R from '@src/screens/account_details/components/detail/components/trend_chart/node_modules/ramda';

class KeybaseProfile {
  public id: string;
  public imageUrl: string;
  public username: string;

  constructor(payload: any) {
    this.id = payload.id;
    this.imageUrl = payload.imageUrl;
    this.username = payload.username;
  }

  static fromJson(data: any) {
    return new KeybaseProfile({
      id: data.id,
      imageUrl: R.pathOr(null, ['pictures', 'primary', 'url'], data),
      username: R.pathOr(null, ['basics', 'username'], data),
    });
  }
}

export default KeybaseProfile;
