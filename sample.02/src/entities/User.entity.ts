import {Cascade, Collection, Entity, OneToMany, Property} from '@mikro-orm/core';

import { BaseEntity } from './Base.entity';
import {Note, PremiumNote} from '.';

@Entity()
export class User extends BaseEntity {

    @Property()
    name: string;

    @Property()
    password: string;

    @Property()
    isActive: boolean = false;

    @OneToMany(() => Note, note => note.user, { cascade: [Cascade.REMOVE] })
    notes = new Collection<Note | PremiumNote>(this);

    constructor(name: string, password: string, isActive?: boolean) {
        super();
        this.name = name;
        this.password = password;
        if (isActive !== undefined) this.isActive = isActive;
    }
}