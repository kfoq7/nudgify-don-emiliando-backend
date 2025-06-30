import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
import { ProductService } from './product.service'
import { CreateProductDto } from './dto/create-product'
import { UpdateProductDto } from './dto/update-product'
import { CreateCategoryDto } from './dto/create-category.dto'
import { UpdateCategoryDto } from './dto/update-category.dto'

@Controller('api/product/')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getAllProducts() {
    return await this.productService.findAll()
  }

  @Get('category')
  async getAllCategories() {
    return await this.productService.findAllCategories()
  }

  @Get(':id')
  async getProductById(@Param('id') id: number) {
    return await this.productService.findOneById(id)
  }

  @Get('category/:id')
  async getCategoryById(@Param('id') id: number) {
    return this.productService.findCategoryById(id)
  }

  @Post()
  async createProduct(@Body() data: CreateProductDto) {
    return await this.productService.create(data)
  }

  @Post('category')
  async createCategory(@Body() data: CreateCategoryDto) {
    return await this.productService.createCategory(data)
  }

  @Put(':id')
  async updateProduct(@Param('id') id: number, @Body() data: UpdateProductDto) {
    return await this.productService.update(id, data)
  }

  @Put('category/:id')
  async updateCategory(@Param('id') id: number, @Body() data: UpdateCategoryDto) {
    return await this.productService.updateCategory(id, data)
  }
}
