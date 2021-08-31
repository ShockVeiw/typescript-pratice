import { IPremiumNote } from "../interfaces";
import * as shortid from "shortid";

export class PremiumNote implements IPremiumNote {
    readonly id: string;
    title: string;
    content: string;
    isPrivate: boolean;

    constructor(title: string, content: string, isPrivate: boolean = false) {
        this.title = title;
        this.content = content;
        this.id = shortid.generate();
        this.isPrivate = isPrivate;
    }
}