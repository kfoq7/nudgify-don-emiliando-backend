import { Injectable } from '@nestjs/common'
import { UserRespository } from './repositories/user.respository'
import { CreateUserDto } from './dto/create-user.dto'

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRespository) {}

  findAll() {
    return this.userRepository.findAll()
  }

  createUser(data: CreateUserDto) {
    return this.userRepository.createUser(data)
  }
}
