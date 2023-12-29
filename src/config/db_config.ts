import { DataSource } from 'typeorm';

export const MySQLDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT as string, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: JSON.parse(process.env.DB_SYNCHRONIZE?.toLocaleLowerCase() as string),
  logging: JSON.parse(process.env.DB_SYNCHRONIZE?.toLocaleLowerCase() as string),
  entities: ['src/models/*.ts'],
});