import {ManyToOne, Entity, Property, OneToOne} from '@mikro-orm/core';

import { BaseEntity, Kennel, Pet } from '.';

@Entity()
export class Cell extends BaseEntity {

    @ManyToOne()
    kennel!: Kennel;

    @OneToOne({ inversedBy: 'cell' })
    tenant!: Pet;

    constructor() {
        super();
    }

}