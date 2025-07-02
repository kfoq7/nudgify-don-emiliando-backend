import { Controller, Post, Body, Get, Query, Param } from '@nestjs/common'
import { OrderService } from './order.service'

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  // @Post()
  // create(@Body() createOrderDto: CreateOrderDto) {
  //   return this.orderService.create(createOrderDto)
  // }

  // @Get()
  // findAll(@Query() query: any) {
  //   return this.orderService.findAll(query)
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.orderService.findOne(id)
  // }
}
