/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable camelcase */
/* eslint-disable no-undef  */
import { expect } from 'chai';
import Knex from 'knex';

import { Knexer } from '../index';

function generateUUID() {
  let d = new Date().getTime();
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) =>{
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x7 | 0x8)).toString(16);
  });
  return uuid;
}

const datasource = {
  charset: 'utf8',
  client: 'pg',
  connection: {
    database: 'postgres',
    host: 'localhost',
    password: '12345',
    port: 5432,
    user: 'postgres'
  },
  pool: {
    max: 10,
    min: 2
  }
};

class User {
  id: string;
  name: string;
  age: number;
  marriage: boolean;
  create_at: Date;
  update_at: Date;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(input: any) {
    this.id = input?.id;
    this.name = input?.name;
    this.age = input?.age;
    this.marriage = input?.marriage;
    this.create_at = input?.create_at;
    this.update_at = input?.update_at;
  }
}

describe('knexer', () => {
  let repository: Knexer<User>;
  let db: Knex;
  beforeAll(() => {
    db = Knex(datasource);
    repository = new Knexer<User>(db, 'users');
  });

  test('should create', () => {
    expect(repository).to.not.null;
  });

  test('db action', async (done) => {
    const user: User = {
      age: 20,
      create_at: new Date(),
      id: generateUUID(),
      marriage: false,
      name: 'daming' + new Date().getTime(),
      update_at: new Date()
    };
    await repository.create(new User(user));
    done();
  }, 2000);

  afterAll(() => {
    db?.destroy();
  });
});
