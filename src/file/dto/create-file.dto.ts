/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
export class CreateFileDto {
    @ApiProperty()
    @IsString()
    name: string;
    @ApiProperty()
    @IsString()
    path: string;
    @IsString()
    @ApiProperty()
    size: string;
    @ApiProperty()
    show: string;
  
   
}
