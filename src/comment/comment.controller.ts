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
  addPraiseNum(@Body() data: { id: number; num: number }) {
    console.log(data);

    return this.commentService.addPraiseNum(data.id, data.num);
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
