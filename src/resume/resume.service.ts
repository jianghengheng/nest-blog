import { Injectable } from '@nestjs/common';
import { CreateResumeDto } from './dto/create-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Resume } from './entities/resume.entity';
import { Repository } from 'typeorm';
type NumType='addPraise'|'cancelPraise'|'addRead'

@Injectable()
export class ResumeService {
  constructor(
    @InjectRepository(Resume)
    private readonly resume: Repository<Resume>,
  ) { }
  create(createResumeDto: CreateResumeDto) {
    this.resume.insert(createResumeDto)
    return '添加成功';
  }

  findAll() {
    return `This action returns all resume`;
  }

  findOne(id: number) {
 
    return    this.resume.findBy({id})
  }

  update(id: number, createResumeDto: CreateResumeDto) {
    
    return this.resume.update(id,createResumeDto)
  }
  async changeNum(id: number, num: number, type: NumType) {
    let data = {}
    if (type == "addPraise") {
      data = { praiseNum: num + 1 }
    } else if (type == "cancelPraise") {
      data = { praiseNum: num - 1 }
    } else {
      data = {
        readNum: num + 1
      }
    }
    await this.resume.update(id, data)
    return {
      num: num + 1
    }
  }
  remove(id: number) {
    return `This action removes a #${id} resume`;
  }
}
