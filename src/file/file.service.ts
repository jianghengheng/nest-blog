/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { File } from './entities/file.entity';
import { Repository } from 'typeorm/repository/Repository';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class FileService {
  constructor(
    @InjectRepository(File)
    private readonly file: Repository<File>,
  ) { }
  async create(createFileDto: CreateFileDto) {
    const { raw } = await this.file.insert(createFileDto)
    return raw.insertId
  }

  findAll() {
    return `This action returns all file`;
  }

  async findOne(id: number) {
    console.log(id, 'sss');
    const { path } = await this.file.findOneBy({ id: id })
    
    return path
  }

  update(id: number, updateFileDto: UpdateFileDto) {
    return `This action updates a #${id} file`;
  }

  remove(id: number) {
    return `This action removes a #${id} file`;
  }
}
