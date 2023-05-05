import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly category: Repository<Category>,
  ) {}
  create(createCategoryDto: CreateCategoryDto) {
    // ;
    return this.category.insert(createCategoryDto);
  }

  findAll() {
    return this.category.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }
}
