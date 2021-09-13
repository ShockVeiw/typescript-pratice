import { Entity, ManyToOne, OneToOne, Property } from '@mikro-orm/core';

import { BaseEntity, Cell, User } from '.';
import { AnimalEnum } from '../shared/enums';

@Entity()
export class Pet extends BaseEntity {

    @Property({ type: 'string' })
    readonly animal: AnimalEnum.cat | AnimalEnum.dog;

    @Property()
    readonly eats: string;

    @Property()
    readonly drinks: string;

    @Property()
    weight: number;

    @ManyToOne()
    owner!: User;

    @OneToOne(() => Cell, cell => cell.tenant)
    cell!: Cell;

    constructor(animal: AnimalEnum.cat | AnimalEnum.dog, weight: number) {
        super();

        this.animal = animal;
        this.eats = animal === AnimalEnum.cat ? 'cat food' : animal === AnimalEnum.dog ? 'dog food' : '';
        this.drinks = animal === AnimalEnum.cat ? 'milk' : animal === AnimalEnum.dog ? 'water' : '';
        this.weight = weight;
    }

}

