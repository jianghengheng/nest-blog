/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsNotEmpty ,IsEmpty} from 'class-validator';
export class CreateMessageDto {
    @IsString()
    @ApiProperty()
    @IsNotEmpty({ message: '内容不能为空' })
    content: string;
    @IsNumber()
    parentId?: number;
    @ApiProperty() 
 
    @IsString()
    releaseTime: string;
    @ApiProperty()
    @IsNumber()
    @IsEmpty()
    userId?:number;
}
