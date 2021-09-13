import { PrimaryKey, Property, DateType } from '@mikro-orm/core';

export abstract class BaseEntity {

    @PrimaryKey()
    id!: number;

    @Property({ type: DateType })
    createdAt = new Date();

    @Property({ type: DateType, onUpdate: () => new Date() })
    updatedAt = new Date()

}