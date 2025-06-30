import { Injectable, NotFoundException } from '@nestjs/common'
import { ProductRepository } from './repositories/product.repository'
import { CategoryRepository } from './repositories/category.repository'
import { CreateProductDto } from './dto/create-product'
import { UpdateProductDto } from './dto/update-product'
import { CreateCategoryDto } from './dto/create-category.dto'
import { UpdateCategoryDto } from './dto/update-category.dto'

@Injectable()
export class ProductService {
  constructor(
    private readonly productRepository: ProductRepository,
    private readonly categoryRepository: CategoryRepository,
  ) {}

  findAll() {
    return this.productRepository.findAll()
  }

  findAllCategories() {
    return this.categoryRepository.findAll()
  }

  async findOneById(id: number) {
    const product = await this.productRepository.findById(id)
    if (!product) throw new NotFoundException(`Product not found`)
    return product
  }

  async findCategoryById(id: number) {
    const category = await this.categoryRepository.findById(id)
    if (!category) throw new NotFoundException(`Category not found`)
    return category
  }

  create(data: CreateProductDto) {
    return this.productRepository.create(data)
  }

  createCategory(data: CreateCategoryDto) {
    return this.categoryRepository.create(data)
  }

  async update(id: number, data: UpdateProductDto) {
    const product = await this.productRepository.update(id, data)
    if (!product) throw new NotFoundException(`Product not found`)
    return product
  }

  async updateCategory(id: number, data: UpdateCategoryDto) {
    const category = await this.categoryRepository.update(id, data)
    if (!category) throw new NotFoundException(`Category not found`)
    return category
  }
}
