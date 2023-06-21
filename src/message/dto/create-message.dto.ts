/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsNotEmpty ,IsEmpty} from 'class-validator';
import { User } from 'src/user/entities/user.entity';



export class CreateMessageDto {
    @IsString()
    @ApiProperty()
    @IsNotEmpty({ message: '内容不能为空' })
    content: string;
    @IsNumber()
    parentId?: number;
    @ApiProperty() 
    @IsNumber()
    @IsNotEmpty({ message: '内容不能为空' })
    articleId: number;
    @ApiProperty()
    @IsString()
    releaseTime: string;
    @ApiProperty()
    @IsNumber()
    @IsEmpty()
    userId?:number;
}
