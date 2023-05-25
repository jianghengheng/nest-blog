import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { CategoryService } from 'src/category/category.service';

@Controller('/article')
export class ArticleController {
  constructor(
    private readonly articleService: ArticleService,
    private readonly categoryService: CategoryService,
  ) { }
  @Post('/addArticle')
  create(@Body() createArticleDto: CreateArticleDto) {
    /**
     * 增加分类数量
     */
    this.categoryService.changenum(createArticleDto.categoryId);
    return this.articleService.create(createArticleDto);
  }

  @Get('/getArticle')
  findAll() {
    return this.articleService.findAll();
  }

  @Get('/getArticleByCategoryId')
  findArticleByCategoryId(@Query() { id }) {
    return this.articleService.findArticleByCategoryId(+id);
  }
  @Get('/getArticleById')
  findArticleById(@Query() { id }) {
    return this.articleService.findArticleById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articleService.update(+id, updateArticleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articleService.remove(+id);
  }
}
