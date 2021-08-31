import { INote, IPremiumNote } from '../interfaces';

export const getNoteIndexById = (notes: INote[] | IPremiumNote[], noteId: string) => {
    const index = notes.findIndex(note => note.id === noteId);
    if (index === -1) {
        throw new Error("No such note");
    }

    return index;
}