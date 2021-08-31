import * as shortid from 'shortid';

import { PremiumNote } from './PremiumNote';
import { INote } from '../interfaces';
import { getNoteIndexById } from '../utils';

export class User {
    readonly id: string;
    name: string;
    password: string;
    isActive: boolean;
    notes: INote[];

    constructor(name: string, password: string, isActive: boolean = false) {
        this.id = shortid.generate();
        this.name = name;
        this.password = password;
        this.isActive = isActive;
        this.notes = [];
    }

    getNotes() {
        return this.notes;
    }

    addNote(note: INote) {
        if (note instanceof PremiumNote) {
            throw new Error("You can't create premium notes!");
        }
        this.notes.push(note);
    }

    deleteNote(noteId: string) {
        this.notes.splice(getNoteIndexById(this.notes, noteId), 1);
    }
}