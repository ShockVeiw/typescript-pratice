export interface INote {
    readonly id: string;
    title: string;
    content: string;
}

export interface IPremiumNote extends INote {
    isPrivate: boolean;
}