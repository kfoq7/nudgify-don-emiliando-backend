import { IsString, IsNotEmpty, IsOptional, IsNumber, IsPositive, IsInt } from 'class-validator'

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsOptional()
  description?: string

  @IsNumber()
  @IsPositive()
  price: number

  @IsInt()
  @IsNumber()
  @IsPositive()
  categoryId: number
}
