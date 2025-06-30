import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Product } from '../entities/product.entity'
import { CreateProductDto } from '../dto/create-product'
import { UpdateProductDto } from '../dto/update-product'

@Injectable()
export class ProductRepository {
  constructor(
    @InjectRepository(Product)
    private readonly repository: Repository<Product>,
  ) {}

  async create(productData: CreateProductDto): Promise<Product> {
    const product = this.repository.create(productData)
    return await this.repository.save(product)
  }

  async findAll(): Promise<Product[]> {
    return this.repository.find()
  }

  async findById(id: number): Promise<Product | null> {
    return await this.repository.findOne({ where: { id } })
  }

  async findByName(name: string): Promise<Product | null> {
    return await this.repository.findOne({ where: { name } })
  }

  async update(id: number, updateData: UpdateProductDto): Promise<Product | null> {
    const product = await this.repository.findOne({ where: { id } })

    if (!product) {
      return null
    }

    this.repository.merge(product, updateData)

    return await this.repository.save(product)
  }
}
