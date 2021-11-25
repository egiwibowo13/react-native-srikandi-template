import CryptoJS from 'crypto-js';
import {CIPHER_KEY} from '@env';

export default class EncryptManager {
  encrypt(value: string): string {
    return CryptoJS.RC4.encrypt(value, CIPHER_KEY).toString();
  }
  decrypt(value: string): string {
    return CryptoJS.RC4.decrypt(value, CIPHER_KEY).toString(CryptoJS.enc.Utf8);
  }
}
