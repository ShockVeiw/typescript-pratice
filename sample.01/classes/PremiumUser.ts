import { User } from './User';
import { IPremiumNote } from '../interfaces';
import { getNoteIndexById } from '../utils';

export class PremiumUser extends User {
    notes: IPremiumNote[];

    constructor(name: string, password: string, isActive: boolean = false) {
        super(name, password, isActive);
        this.notes = [];
    }

    makePrivateNote(noteId: string) {
        this.notes[getNoteIndexById(this.notes, noteId)].isPrivate = true;
    }

    makePublicNote(noteId: string) {
        this.notes[getNoteIndexById(this.notes, noteId)].isPrivate = false;
    }
}