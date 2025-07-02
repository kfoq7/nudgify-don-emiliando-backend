import { Transform } from 'class-transformer'
import { IsNumber, IsPositive } from 'class-validator'

export class CreateOrderItemDto {
  @Transform(() => Number)
  @IsNumber()
  @IsPositive()
  productId: number
}
