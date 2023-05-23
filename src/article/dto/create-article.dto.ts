import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsDate } from 'class-validator';

export class CreateArticleDto {
  @ApiProperty()
  @IsString()
  fileId: string;
  @IsString()
  category: string;
  @IsNumber()
  categoryId: number;
  @IsString()
  @ApiProperty()
  create_time: string;
  @IsString()
  @ApiProperty()
  title: string;
  @IsString()
  @ApiProperty()
  content: string;
}
