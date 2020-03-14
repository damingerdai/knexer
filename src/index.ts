import * as Knex from 'knex';
import { PartialWithArray } from './type';

export class Knexer<T = any> {

    public get raw() {
        return this.db(this.tableName)
    }

    constructor(
        private db: Knex, 
        private tableName: string) {}

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

    protected manyQuery(selectors: PartialWithArray<T> = {}): Knex.QueryBuilder {
        let query = this.raw;
        Object.keys(selectors).forEach(k => {
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