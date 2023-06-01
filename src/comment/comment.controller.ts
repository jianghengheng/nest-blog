import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
type NumType = 'addPraise' | 'cancelPraise' | 'addRead';
@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) { }

  @Post('/addComment')
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentService.create(createCommentDto);
  }

  @Get()
  findAll() { 
    return this.commentService.findAll();
  }
  @Post('/addPraiseNum')
  addPraiseNum(@Body() data: { id: number; num: number; type: NumType }) {
    console.log(data);

    return this.commentService.changeNum(data.id, data.num, data.type);
  }
  @Get('/findByArticleId')
  findOne(@Query() { id }) {
    return this.commentService.findByArticleId(id);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentService.remove(+id);
  }
}
