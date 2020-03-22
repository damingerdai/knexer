/* eslint-disable no-undef */
import { expect } from 'chai';
import Knex from 'knex';

import { Knexer } from '../index';

const datasource = {
  charset: 'utf8',
  client: 'pg',
  connection: {
    database: 'postgres',
    host: 'localhost',
    password: process.env.POSTGRES_PASSWORD,
    port:  5432,
    user: 'postgres'
  },
  pool: {
    max: 10,
    min: 2
  }
};

describe('knexer', () => {
  let repository: Knexer;
  beforeAll(() => {
    const db = Knex(datasource);
    repository = new Knexer(db, 'users');
  });

  test('should create', () => {
    expect(repository).to.not.null;
  });
});

