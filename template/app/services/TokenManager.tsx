import StorageManager from './StorageManager';

export interface TokenModel {
  accessToken: string;
}

const TOKEN_KEY = 'TOKEN_KEY';

export default class TokenManager extends StorageManager {
  constructor() {
    super();
  }

  setToken(token: TokenModel): Promise<void> {
    return this.set<TokenModel>(TOKEN_KEY, token);
  }

  deleteToken(): Promise<void> {
    return this.delete(TOKEN_KEY);
  }

  getToken(): Promise<TokenModel | null> {
    return this.get<TokenModel>(TOKEN_KEY);
  }
}
