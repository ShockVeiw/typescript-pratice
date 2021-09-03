import { Entity, Property, ManyToOne } from '@mikro-orm/core';

import { BaseEntity } from './Base.entity';
import { User } from ".";

@Entity()
export class Note extends BaseEntity {

    @Property()
    title: string;

    @Property()
    content: string;

    @ManyToOne()
    user: User;

    constructor(title: string, content: string, user: User) {
        super();
        this.title = title;
        this.content = content;
        this.user = user;
    }
}