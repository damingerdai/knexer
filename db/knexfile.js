module.exports = {
    charset: 'utf-8',
    client: 'pg',
    debug: true,
    pool: {
        min: 2,
        max: 10
    },
    connection: {
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: '12345',
        database: 'postgres'
    },
    migrations: {
        tableName: '_migrations',
        directory: './migrations'
    },
    seeds: {
        directory: './seeds'
    }
}