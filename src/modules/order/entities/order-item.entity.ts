import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm'
import { Order } from './order.entity'
import { Product } from '@modules/product'

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  quantity: number

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  totalPrice: number

  @ManyToOne('Product', 'product.orderItems')
  @JoinColumn()
  product: Relation<Product>

  @ManyToOne('Order', 'order.orderItems')
  @JoinColumn()
  order: Relation<Order>

  @CreateDateColumn()
  createdAt: Date
}
