import { Controller, Get, Post, Put } from '@nestjs/common'
import { RoleService } from './role.service'
import { CreateRoleDto } from './dto/create-role.dto'

@Controller('api/role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Get()
  async getAllRoles() {
    return await this.roleService.findAll()
  }

  @Get(':id')
  async getRoleById(id: number) {
    return await this.roleService.findOneById(id)
  }

  @Post()
  async createRole(data: CreateRoleDto) {
    return await this.roleService.create(data)
  }

  @Put(':id')
  async updateRole(id: number, data: CreateRoleDto) {
    return await this.roleService.update(id, data)
  }
}
