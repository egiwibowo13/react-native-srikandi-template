import AsyncStorage, {
  AsyncStorageStatic,
} from '@react-native-async-storage/async-storage';
import EncryptManager from './EncryptManager';

export interface LocalStorageModel {
  id: string;
}

interface ILocalStorage<T extends LocalStorageModel> {
  getItem(id: string): Promise<T | null>;
}

/**
 * Deals with the local storage of Notes into AsyncStorage
 *
 * @class LocalStorage
 */
export default class LocalStorage<
  T extends LocalStorageModel
> extends EncryptManager {
  constructor(
    name: string = '@app',
    storage: AsyncStorageStatic = AsyncStorage,
  ) {
    super();
    this.name = name;
    this.storage = storage;
  }

  name: string;
  storage: AsyncStorageStatic;

  /**
   * Get a single item
   *
   * @param {string} noteId
   * @returns {Promise<Note>}
   * @memberof LocalStorage
   */
  async getItem(id: string): Promise<T | null> {
    const key = `${this.name}:${id}`;
    const encryptKey = this.encrypt(key);
    return AsyncStorage.getItem(encryptKey).then(json => {
      if (json !== null) {
        const decryptValue = this.decrypt(json);
        return JSON.parse(decryptValue) as T;
      }
      return null;
    });
  }

  /**
   * Save a single item
   *
   * @param {LocalStorageModel} item
   * @returns {Promise<void>}
   * @memberof LocalStorage
   */
  async setItem(item: T): Promise<void> {
    const key = `${this.name}:${item.id}`;
    const encryptKey = this.encrypt(key);
    const encryptValue = this.encrypt(JSON.stringify(item));
    return AsyncStorage.setItem(encryptKey, encryptValue);
  }

  /**
   * Deletes a single item
   *
   * @returns {Promise<void>}
   * @memberof LocalStorage
   */
  async deleteItem(id: string): Promise<void> {
    const key = `${this.name}:${id}`;
    const encryptKey = this.encrypt(key);
    return AsyncStorage.removeItem(encryptKey);
  }
}
