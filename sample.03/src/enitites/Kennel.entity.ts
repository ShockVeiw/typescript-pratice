import { Property, OneToMany, Collection, Entity } from '@mikro-orm/core';

import { BaseEntity, Cell } from '.';

@Entity()
export class Kennel extends BaseEntity {

      @Property()
      address: string;

      @OneToMany(() => Cell, cell => cell.kennel)
      cells = new Collection<Cell>(this);

      constructor(address: string) { // cells?: Cell[]
            super();

            this.address = address;
            // if (cells?.length) {
            //       this.cells = this.cells.concat(cells);
            // }
      }

}