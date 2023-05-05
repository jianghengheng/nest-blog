import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
export class CreateCategoryDto {
  @ApiProperty()
  @IsString()
  category: string;
  @IsNumber()
  @ApiProperty()
  num: number;
}
