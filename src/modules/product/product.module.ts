import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ProductController } from './product.controller'
import { ProductService } from './product.service'
import { ProductRepository } from './repositories/product.repository'
import { CategoryRepository } from './repositories/category.repository'
import { Product } from './entities/product.entity'
import { Category } from './entities/category.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Product, Category])],
  controllers: [ProductController],
  providers: [ProductService, ProductRepository, CategoryRepository],
  exports: [ProductService],
})
export class ProductModule {}
