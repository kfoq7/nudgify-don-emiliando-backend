import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './entities/user.entity'
import { UserRespository } from './repositories/user.respository'
import { UserController } from './user.controller'
import { UserService } from './user.service'

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserService, UserRespository],
  controllers: [UserController],
  exports: [UserService, UserRespository],
})
export class UserModule {}
