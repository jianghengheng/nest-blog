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
  ) { }
  create(createCategoryDto: CreateCategoryDto) {
    return this.category.insert(createCategoryDto);
  }

  findAll() {
    return this.category.find();
  }
  changenum(id: number) {
    this.category.findOneBy({ id }).then((res) => {
      this.category.update(id, { num: res.num + 1 });
    });

    return 'ok';
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }
}
