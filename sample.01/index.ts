import * as shortid from 'shortid';

interface INote {
    readonly id: string;
    title: string;
    content: string;
}

interface IPremiumNote extends INote {
    isPrivate: boolean;
}

class Note implements INote {
    readonly id: string;
    title: string;
    content: string;

    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
        this.id = shortid.generate();
    }
}

class PremiumNote implements IPremiumNote {
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

class User {
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
        const index = this.notes.findIndex(note => note.id === noteId);
        if (index === -1) {
            throw new Error("No such note")
        }

        this.notes.splice(index, 1);
    }
}

class PremiumUser extends User {
    notes: IPremiumNote[];

    constructor(name: string, password: string, isActive: boolean = false) {
        super(name, password, isActive);
        this.notes = [];
    }

    makePrivateNote(noteId: string) {
        const index = this.notes.findIndex(note => note.id === noteId);
        if (index === -1) {
            throw new Error("No such note")
        }

        this.notes[index].isPrivate = true;
    }

    makePublicNote(noteId: string) {
        const index = this.notes.findIndex(note => note.id === noteId);
        if (index === -1) {
            throw new Error("No such note")
        }

        this.notes[index].isPrivate = false;
    }
}

const user: User = new User("John", "abc123");
const note: Note = new Note("title", "content");

const premiumUser: PremiumUser = new PremiumUser("John", "abc123");
const premiumNote: PremiumNote  = new PremiumNote("title", "content", true);

// user.addNote(note);
// user.addNote(premiumNote); // error: You can't create premium notes!

// premiumUser.addNote(premiumNote);
// premiumUser.addNote(note);
