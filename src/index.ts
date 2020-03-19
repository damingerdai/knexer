import * as Knex from 'knex';
import { PartialWithArray } from './type';

export class Knexer<T = unknown> {

  public get raw() {
    return this.db(this.tableName);
  }

  constructor (
        private db: Knex,
        private tableName: string) { }

  public async find(selectors: PartialWithArray<T> = {}): Promise<T> {
    const query = this.manyQuery(selectors).first();
    const record = await query;
    return record;
  }

  public async select(selectors: PartialWithArray<T> = {}): Promise<T> {
    const query = this.manyQuery(selectors);
    const record = await query;
    return record;
  }

  public async count(selectors: PartialWithArray<T> = {}): Promise<number> {
    const query = this.manyQuery(selectors).count({ count: '*' });
    const record = await query;
    return record;
  }

  public async update(value: Partial<T>, selectors?: PartialWithArray<T>) {
    const query = selectors ? this.manyQuery(selectors) : this.raw;
    await query.update(value);
  }

  public async create(value: Partial<T>) {
    const query = this.raw;
    await query.insert(value);
  }

  protected manyQuery(selectors: PartialWithArray<T> = {}): Knex.QueryBuilder {
    let query = this.raw;
    Object.keys(selectors).forEach(k => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const v = (selectors as any)[k];
      if (Array.isArray(v)) {
        query = query.whereIn(k, v);
      } else {
        query = query.where(k, v);
      }
    });
    return query;
  }
}
