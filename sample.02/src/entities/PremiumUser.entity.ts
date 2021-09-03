import {Cascade, Collection, Entity, OneToMany} from '@mikro-orm/core';

import {User, PremiumNote, Note} from '.';

@Entity()
export class PremiumUser extends User {
    @OneToMany(() => PremiumNote, note => note.user, { cascade: [Cascade.REMOVE] })
    notes = new Collection<Note | PremiumNote>(this);

    constructor(name: string, password: string, isActive?: boolean) {
        super(name, password, isActive);
    }
}