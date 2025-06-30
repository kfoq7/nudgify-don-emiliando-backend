import { IsString, IsNotEmpty, IsOptional, IsNumber, IsPositive } from 'class-validator'

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

  @IsString()
  @IsOptional()
  categoryId?: string
}
