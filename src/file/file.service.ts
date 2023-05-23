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
    /**
     * 上传文件
     */
    const { raw } = await this.file.insert(createFileDto)
    /**
     * 上传后返回文件
     */
    const {show}=  await this.file.findOneBy({ id: raw.insertId })
    return show
  }

  findAll() {
    return `This action returns all file`;
  }

  async findOne(id: number) {

    const {show} = await this.file.findOneBy({ id: id })
    
    
    return show
  }

  update(id: number, updateFileDto: UpdateFileDto) {
    return `This action updates a #${id} file`;
  }

  remove(id: number) {
    return `This action removes a #${id} file`;
  }
}
