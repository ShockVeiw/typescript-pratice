import { INote } from "../interfaces";
import * as shortid from "shortid";

export class Note implements INote {
    readonly id: string;
    title: string;
    content: string;

    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
        this.id = shortid.generate();
    }
}