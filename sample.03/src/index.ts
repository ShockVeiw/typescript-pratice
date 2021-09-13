import { MikroORM } from '@mikro-orm/core';

import config from './mikro-orm.config';
import { User, Kennel, Cell, Pet } from './enitites';
import { AnimalEnum } from './shared/enums';

(async () => {
    const orm = await MikroORM.init(config);

    const user = new User('John', 'Armstrong', '+442087599036');

    await orm.em.persist(user);

    const dog = new Pet(AnimalEnum.dog, 5);
    const cat = new Pet(AnimalEnum.cat, 2);

    await orm.em.persist([dog, cat]);

    user.kenneledPets.add(dog);
    user.kenneledPets.add(cat);

    const kennel = new Kennel('London, 97 Great Russell Street');
    await orm.em.persist(kennel);

    const cell1 = new Cell();
    const cell2 = new Cell();

    await orm.em.persist([cell1, cell2]);

    cell1.tenant = dog;
    cell1.kennel = kennel;

    cell2.tenant = cat;
    cell2.kennel = kennel;

    await orm.em.flush(); // flush everything to database at once

    // test:
    const user1 = await orm.em.findOne(User, { id: user.id }, ['kenneledPets']);
    console.log('user:', user1);

    const userPetsIds = user1?.kenneledPets.getIdentifiers(); // array of user's pets ids
    console.log('user\'s pet ids:', userPetsIds);

    const userPets = await orm.em.find(Pet, { id: userPetsIds }); // array of user's pets
    console.log('user\'s pets:', userPets);

    const petCell1 = await orm.em.findOne(Cell, { tenant: userPets[0].id });
    const petCell2 = await orm.em.findOne(Cell, { tenant: userPets[1].id });

    console.log('cell ids:', [petCell1?.id, petCell2?.id]);
    console.log('kennel ids:', [petCell1?.kennel.id, petCell2?.kennel.id]);

})();