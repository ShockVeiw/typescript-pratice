import { Note, PremiumNote, User, PremiumUser } from './classes';

const user: User = new User("John", "abc123");
const note: Note = new Note("title", "content");

const premiumUser: PremiumUser = new PremiumUser("John", "abc123");
const premiumNote: PremiumNote  = new PremiumNote("title", "content", true);

// user.addNote(note);
// user.addNote(premiumNote); // error: You can't create premium notes!

// premiumUser.addNote(premiumNote);
// premiumUser.addNote(note);
