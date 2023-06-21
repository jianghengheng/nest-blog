/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { Message } from './entities/message.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Pagination } from 'nestjs-typeorm-paginate';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private readonly message: Repository<Message>,
  ) { }
  create(createMessageDto: CreateMessageDto) {
    this.message.insert(createMessageDto);
    return '添加成功';
  }

  async findAll(pageSize: number, pageNumber: number) {
    const startIndex = (pageSize - 1) * pageNumber;
    const endIndex = pageSize * pageNumber;
    const data = await this.message.find()

    return {
      total: this.treeData(data).slice(startIndex,endIndex).length,
      records: this.treeData(data).slice()

    }
  }
  remove(id: number) {
    this.message.delete({ id })
    return {
      data: '删除成功'
    };
  }
  treeData(arr: any[], pid = null) {
    // 判断是否是数组 不是数组就返回 []
    if (arr.length == 0) return [];
    const newArr = [];
    arr.forEach((item) => {
      // 判断 当前item.pid 和 传入的pid 是否相等，相等就push 进去
      if (item.parentId == pid) {
        newArr.push({
          ...item,
          children: this.treeData(arr, item.id),
        });
      }
    });
    return newArr;
  }

}
