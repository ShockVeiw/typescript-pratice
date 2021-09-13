import { Options } from '@mikro-orm/core';

import { Cell, Kennel, User, Pet } from './enitites';

const config = {
    entities: [User, Kennel, Cell, Pet],
    type: 'postgresql',
    host: 'localhost',
    port: 5432,
    dbName: 'postgres',
    password: 'password'
} as Options;

export default config;