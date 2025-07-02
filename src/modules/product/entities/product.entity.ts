import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  Relation,
  OneToMany,
} from 'typeorm'
import { Category } from './category.entity'
import { OrderItem } from '@modules/order'

@Entity()
export class Product {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ type: 'varchar', length: 255 })
  name: string

  @Column({ type: 'text', nullable: true })
  description: string

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number

  @ManyToOne('Category', 'category.products', { nullable: false })
  @JoinColumn()
  category: Relation<Category>

  @Column({ type: 'boolean', default: true })
  available: boolean

  @OneToMany('OrderItem', 'orderItem.product')
  orderItems: Relation<OrderItem[]>

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
