import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
import { ProductService } from './product.service'
import { CreateProductDto } from './dto/create-product'
import { UpdateProductDto } from './dto/update-product'

@Controller('api/product/')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getAllProducts() {
    return await this.productService.findAll()
  }

  @Get(':id')
  async getProductById(@Param('id') id: number) {
    return await this.productService.findOneById(id)
  }

  @Post()
  async createProduct(@Body() data: CreateProductDto) {
    return await this.productService.create(data)
  }

  @Put(':id')
  async updateProduct(@Param('id') id: number, @Body() data: UpdateProductDto) {
    return await this.productService.update(id, data)
  }
}
