import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ length: 50 })
  names: string

  @Column({ length: 50, unique: true })
  email: string

  @Column({ nullable: true })
  password: string
}
