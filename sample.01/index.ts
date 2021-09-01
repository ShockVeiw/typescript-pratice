import { Note, PremiumNote, User, PremiumUser, Http } from './classes';
import { IPcupUser } from './interfaces';

const user: User = new User("John", "abc123");
const note: Note = new Note("title", "content");

const premiumUser: PremiumUser = new PremiumUser("John", "abc123");
const premiumNote: PremiumNote  = new PremiumNote("title", "content", true);

// user.addNote(note);
// user.addNote(premiumNote); // error: You can't create premium notes!

// premiumUser.addNote(premiumNote);
// premiumUser.addNote(note);

const testUserToken = process.env.TEST_USER_TOKEN;

(async () => {
    const httpClient = new Http('18.184.253.145', 9016);
    const pcupUserList: IPcupUser[] = await httpClient.getList<IPcupUser[]>(
        '/user/v1/list',
        {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${testUserToken}`
        }
    );

    console.log(pcupUserList);
})();
