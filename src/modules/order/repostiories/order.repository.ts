import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Order } from '../entities/order.entity'
import { CreateOrderDto } from '../dto/create-order.dto'

@Injectable()
export class OrderRepository {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  findAll() {
    return this.orderRepository.find({
      relations: {
        orderItems: true,
      },
    })
  }

  findOneById(id: number) {
    return this.orderRepository.findOne({
      where: { id },
      relations: {
        orderItems: {
          product: true,
        },
      },
      select: {
        orderItems: {
          id: true,
          quantity: true,
          totalPrice: true,
          product: {
            id: true,
            name: true,
            price: true,
          },
        },
      },
    })
  }

  create(data: CreateOrderDto) {
    const { orderItems, ...restData } = data

    const order = this.orderRepository.create({
      ...restData,
      orderItems: orderItems.map(item => ({
        ...item,
        product: { id: item.productId },
      })),
    })

    return this.orderRepository.save(order)
  }
}
