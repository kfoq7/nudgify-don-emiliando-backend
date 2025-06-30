import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  Relation,
} from 'typeorm'
import { Product } from './product.entity'

@Entity()
export class Category {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ type: 'varchar' })
  name: string

  @Column({ type: 'text', nullable: true })
  description?: string

  @Column({ type: 'boolean', default: true })
  isActive: boolean

  @OneToMany('Product', 'product.category')
  products: Relation<Product[]>

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
