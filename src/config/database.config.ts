import path from 'node:path'
import { TypeOrmModule, type TypeOrmModuleOptions } from '@nestjs/typeorm'

const PATH_ENTITIES = path.join(__dirname, '..', 'modules', '**', 'entities', '*.entity.{ts,js}')

export const typeOrmConfig: () => TypeOrmModuleOptions = () => ({
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT) || 3306,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities: [PATH_ENTITIES],
  synchronize: true,
})

export const typeOrmModule = () => {
  return TypeOrmModule.forRootAsync({
    useFactory: typeOrmConfig,
  })
}

export default typeOrmConfig
