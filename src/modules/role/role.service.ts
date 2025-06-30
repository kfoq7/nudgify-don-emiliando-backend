import { Injectable, NotFoundException } from '@nestjs/common'
import { Role } from './entities/role.entity'
import { CreateRoleDto } from './dto/create-role.dto'
import { UpdateRoleDto } from './dto/update-role.dto'
import { RoleRepository } from './repositories/role.repository'

@Injectable()
export class RoleService {
  constructor(private readonly roleRepository: RoleRepository) {}

  async findAll() {
    return await this.roleRepository.findAll()
  }

  async findOneById(id: number) {
    return await this.roleRepository.findOneById(id)
  }

  async create(data: CreateRoleDto) {
    return await this.roleRepository.create(data)
  }

  async update(id: number, updateRoleDto: UpdateRoleDto): Promise<Role> {
    const role = await this.roleRepository.update(id, updateRoleDto)
    if (!role) throw new NotFoundException('Role not found')
    return role
  }
}
