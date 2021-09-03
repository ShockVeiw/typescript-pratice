import { Cascade, Entity, OneToMany } from '@mikro-orm/core';

import { User, PremiumNote } from '.';

@Entity()
export class PremiumUser extends User {
    @OneToMany(() => PremiumNote, note => note.user, { cascade: [Cascade.ALL] })
    notes: PremiumNote[] = [];

    constructor(name: string, password: string, isActive?: boolean) {
        super(name, password, isActive);
    }
}