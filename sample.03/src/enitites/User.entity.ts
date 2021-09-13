import { Cascade, Collection, Entity, OneToMany, Property } from '@mikro-orm/core';

import { BaseEntity, Pet } from '.';

@Entity()
export class User extends BaseEntity {

    @Property({ type: 'string' })
    firstName: string;

    @Property({ type: 'string' })
    lastName: string;

    @Property({ type: 'string' })
    phoneNumber: string;

    @OneToMany(() => Pet, pet => pet.owner)
    kenneledPets = new Collection<Pet>(this);

    constructor(firstName: string, lastName: string, phoneNumber: string) {
        super();

        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
    }

}