import { Entity, ManyToOne, Property } from '@mikro-orm/core';

import { Note, PremiumUser } from '.';

@Entity()
export class PremiumNote extends Note {
    @ManyToOne('PremiumUser')
    user!: PremiumUser;

    @Property()
    isPrivated: boolean;

    constructor(title: string, content: string, isPrivated: boolean) {
        super(title, content);
        this.isPrivated = isPrivated;
    }
}