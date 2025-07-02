import { Type } from 'class-transformer'
import { IsArray, ValidateNested } from 'class-validator'
import { CreateOrderItemDto } from './create-order-item.dto'

export class CreateOrderDto {
  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => CreateOrderDto)
  orderItems: CreateOrderItemDto[]
}
