import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsDate } from 'class-validator';

export class CreateArticleDto {
  @ApiProperty()
  @IsString()
  category: string;
  @IsDate()
  @ApiProperty()
  createTime: Date;
  @IsString()
  @ApiProperty()
  title: string;
  @IsString()
  @ApiProperty()
  content: string;
}
