import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsNotEmpty ,IsEmpty} from 'class-validator';
export class CreateResumeDto {
    @IsString()
    @ApiProperty()
    @IsNotEmpty({ message: '内容不能为空' })
    content: string;
  

}
