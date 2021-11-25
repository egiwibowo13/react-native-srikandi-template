import {Subject} from 'rxjs';

export type NotifyParams = {
  visible?: boolean;
  textMessage: string;
  textStatus?: string;
  textCb?: string;
  bgColor?: string;
  onPress?: () => void;
};

const subject = new Subject<NotifyParams>();

const NotifyService = {
  /**
   * Send Notify to trigger MessageInfo Component
   * @param {String} visible
   * @param {String} textStatus
   * @param {String} textCb
   * @param {String} textMessage
   * @param {Function} onPress
   */
  sendNotify: (params: NotifyParams) => {
    const paramsToSend: NotifyParams = {
      ...params,
      visible: true,
    };
    subject.next(paramsToSend);
  },
  clearNotify: () => {
    const emptyParams: NotifyParams = {
      visible: false,
      textStatus: '',
      textCb: '',
      textMessage: '',
    };
    subject.next(emptyParams);
  },
  getNotify: () => subject.asObservable(),
};

export default NotifyService;
