import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Role } from '../entities/role.entity'
import { CreateRoleDto } from '../dto/create-role.dto'
import { UpdateRoleDto } from '../dto/update-role.dto'

@Injectable()
export class RoleRepository {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) {}

  async findAll() {
    return await this.roleRepository.find()
  }

  async findOneById(id: number) {
    return await this.roleRepository.findOne({ where: { id } })
  }

  async create(data: CreateRoleDto) {
    const role = this.roleRepository.create(data)
    return await this.roleRepository.save(role)
  }

  async update(id: number, data: UpdateRoleDto) {
    const role = await this.roleRepository.findOne({ where: { id } })
    if (!role) return null

    this.roleRepository.merge(role, data)

    return role
  }
}
