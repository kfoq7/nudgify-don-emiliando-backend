import { Repository } from 'typeorm'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Category } from '../entities/category.entity'
import { CreateCategoryDto } from '../dto/create-category.dto'
import { UpdateCategoryDto } from '../dto/update-category.dto'

@Injectable()
export class CategoryRepository {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async findAll(): Promise<Category[]> {
    return this.categoryRepository.find()
  }

  async findById(id: number): Promise<Category | null> {
    return this.categoryRepository.findOne({ where: { id } })
  }

  async create(categoryData: CreateCategoryDto): Promise<Category> {
    const category = this.categoryRepository.create(categoryData)
    return this.categoryRepository.save(category)
  }

  async update(id: number, categoryData: UpdateCategoryDto): Promise<Category | null> {
    await this.categoryRepository.update(id, categoryData)
    return this.findById(id)
  }
}
