import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';
type NumType = 'addPraise' | 'cancelPraise' | 'addRead';
@Controller('comment')
export class MessageController {
  constructor(private readonly messageService: MessageService) { }

  @Post('/addComment')
  create(@Body() createMessageDto: CreateMessageDto) {
    return this.messageService.create(createMessageDto);
  }

  @Get()
  findAll() { 
    return this.messageService.findAll();
  }
  @Post('/addPraiseNum')
  addPraiseNum(@Body() data: { id: number; num: number; type: NumType }) {
    console.log(data);

    return this.messageService.changeNum(data.id, data.num, data.type);
  }
  @Get('/findByArticleId')
  findOne(@Query() { id }) {
    return this.messageService.findByArticleId(id);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.messageService.remove(+id);
  }
}
