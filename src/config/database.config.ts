import path from 'node:path'
import { TypeOrmModule, type TypeOrmModuleOptions } from '@nestjs/typeorm'

const PATH_ENTITIES = path.join(__dirname, '..', 'modules', '**', 'entities', '*.entity.{ts,js}')

export const typeOrmConfig: () => TypeOrmModuleOptions = () => ({
  type: 'postgres',
  host: process.env.POSTGRESQL_HOST,
  port: Number(process.env.POSTGERSQL_PORT) || 5431,
  username: process.env.POSTGRESQL_USERNAME,
  password: process.env.POSTGRESQL_PASSWORD,
  database: process.env.POSTGRESQL_DATABASE,
  entities: [PATH_ENTITIES],
  synchronize: true,
})

console.log(process.env.POSTGERSQL_HOST)

export const typeOrmModule = () => {
  return TypeOrmModule.forRootAsync({
    imports: [],
    useFactory: typeOrmConfig,
  })
}

export default typeOrmConfig
