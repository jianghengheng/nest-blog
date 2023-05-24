/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './entities/article.entity';
import { Repository } from 'typeorm';
@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private readonly article: Repository<Article>,

  ) { }
  create(createArticleDto: CreateArticleDto) {
    createArticleDto.create_time = new Date().toLocaleString().replace('/', '-').replace('/', '-')
    return this.article.insert(createArticleDto);
  }

  findAll() {
    return this.article.find();
  }

  findArticleByCategoryId(id: number) {

    return this.article.findBy({ categoryId: id });
  }
  findArticleById(id: number) {

    return this.article.findOneBy({ id });
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return `This action updates a #${id} article`;
  }

  remove(id: number) {
    return `This action removes a #${id} article`;
  }
}
