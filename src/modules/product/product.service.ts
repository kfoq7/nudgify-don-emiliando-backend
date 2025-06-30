import { Injectable } from '@nestjs/common'
import { ProductRepository } from './repositories/product.repository'
import { CreateProductDto } from './dto/create-product'
import { UpdateProductDto } from './dto/update-product'

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  findAll() {
    return this.productRepository.findAll()
  }

  findOneById(id: number) {
    return this.productRepository.findById(id)
  }

  create(data: CreateProductDto) {
    return this.productRepository.create(data)
  }

  update(id: number, data: UpdateProductDto) {
    return this.productRepository.update(id, data)
  }

  //  remove(id: string) {
  //     return this.productRepository.remove(id);
  // }
}
