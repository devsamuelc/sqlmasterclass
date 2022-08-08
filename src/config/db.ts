
import 'dotenv/config';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
// import { DatabaseType } from 'typeorm';

const dbconfig: MysqlConnectionOptions = {
    type: 'mysql',
    host: process.env.HOST,
    port: 3306,
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    entities: ['dist/**/entities/*.entity.js'],
    synchronize: true,
}

export default dbconfig;