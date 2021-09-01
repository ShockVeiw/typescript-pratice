import { IncomingHttpHeaders } from 'http';
import { TimgCloudUrls } from '../types';

export interface INote {
    readonly id: string;
    title: string;
    content: string;
}

export interface IPremiumNote extends INote {
    isPrivate: boolean;
}

export interface IHttp {
    hostname: string;
    port: number | undefined;
    getList<T>(path: string, headers: IncomingHttpHeaders): Promise<T>;
}

enum ElastOrderStatus {
    AUTO_REJECT = -1,
    PENDING = 0,
    PAYED = 1,
    REJECTED = 2
}

export interface IPcupUser {
    // about
    firstName: string;
    lastName: string;
    email: string;
    imageId: string;
    imageRelativePath: string;
    imgCloudUrl: string;
    imgCloudUrls: TimgCloudUrls[],
    gender: string;
    birthday: string;
    nationality: string;
    language: string;
    private: string;
    status: string;
    link: string;
    description: string;
    preOrder: boolean;
    tagId: string;
    deviceId: string;
    signalId: string;

    // auth
    phone: string;
    smsCode: string;
    token: string;
    recoverySecret: string;

    // mangopay
    mangopayWalletId: number;
    mangopayUserId: number;
    cardId: number;
    autoChargeWallet: boolean;

    // logic
    socketId: string;
    role: string[];
    cupId: string;
    savedPlastic: number;
    pcoinsWallet: number;
    euroWallet: number;
    venuesId: string[]; // for barman role, all venues in which barman works
    venueId: string;
    /**
     * DEPRECATED
     */
    friends: string[];
    blocked: string[];

    // todo remove userPayments, because UserPayment model has user as a ref
    userPayments: string[];
    // todo remove userOrders, because UserOrders model has user as a ref
    userOrders: string[];
    lastOrderStatus: ElastOrderStatus // -1 - auto reject, 0 - pending , 1 - payed , 2 - rejected
    friendsPushNotifications: boolean;
    drinksPushNotifications: boolean;
    lastUpdatesPushNotifications: boolean;
    paymentPushNotifications: boolean;
    // Realtime dynamic activation flag
    isActive: boolean;
    // number timer
    timerId: number;
}