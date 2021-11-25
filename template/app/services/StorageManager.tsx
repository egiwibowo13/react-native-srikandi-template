import AsyncStorage, {
  AsyncStorageStatic,
} from '@react-native-async-storage/async-storage';
import EncryptManager from './EncryptManager';

export default class StorageManagerDev extends EncryptManager {
  constructor(storage: AsyncStorageStatic = AsyncStorage) {
    super();
    this.storage = storage;
  }

  storage: AsyncStorageStatic;

  get<T>(key: string): Promise<T | null> {
    const encryptedKey = this.encrypt(key);
    return this.storage.getItem(encryptedKey).then(json => {
      if (json !== null) {
        const decryptValue = this.decrypt(json);
        return JSON.parse(decryptValue) as T;
      }
      return null;
    });
  }

  set<T>(key: string, value: T): Promise<void> {
    const encryptKey = this.encrypt(key);
    const encryptValue = this.encrypt(JSON.stringify(value));
    return this.storage.setItem(encryptKey, encryptValue);
  }

  delete(key: string): Promise<void> {
    const encryptKey = this.encrypt(key);
    return this.storage.removeItem(encryptKey);
  }
}
