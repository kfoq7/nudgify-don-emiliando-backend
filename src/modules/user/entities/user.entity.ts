import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, Relation } from 'typeorm'
import { Role } from '@modules/role'

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

  @ManyToMany('Role', 'role.users', { cascade: true })
  @JoinTable()
  roles: Relation<Role[]>
}
