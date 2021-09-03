import { MikroORM } from "@mikro-orm/core";

import { User, Note, PremiumUser, PremiumNote } from './entities';

(async () => {
    const orm = await MikroORM.init({
        entities: [User, Note, PremiumUser, PremiumNote],
        dbName: 'my-db-name',
        type: 'mongo',
        clientUrl: 'mongodb://localhost:27017'
    });

    // create notes
    const note = new Note("title", "content");
    const premiumNote = new PremiumNote("title", "content", true);
    await orm.em.persist(note);
    await orm.em.persist(premiumNote);

    // create users
    const user = new User("name", "password");
    const premiumUser = new PremiumUser("name", "password");
    await orm.em.persist(user).flush();
    await orm.em.persist(premiumUser).flush();

    // update the users
    await orm.em.nativeUpdate(User, { _id: user._id }, { notes: [note] });
    await orm.em.nativeUpdate(PremiumUser, { _id: premiumUser._id }, { notes: [premiumNote] });

    // find the users
    console.log(await orm.em.findOne(User, { _id: user._id }));
    console.log(await orm.em.findOne(PremiumUser, { _id: premiumUser._id }));

    // remove a user
    await orm.em.remove(user).flush(); // will also remove reference field `user` in it's notes documents
})();