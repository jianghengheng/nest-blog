/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
type NumType='addPraise'|'cancelPraise'|'addRead'
@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly comment: Repository<Comment>,
  ) { }
  create(createCommentDto: CreateCommentDto) {
    this.comment.insert(createCommentDto);
    return '添加成功';
  }

  findAll() {
    return `This action returns all comment`;
  }

  async findByArticleId(id: number) {
    const data = await this.comment.findBy({ articleId: id });
    return this.treeData(data)
  }
  remove(id: number) {
    this.comment.delete({ id })
    return {
      data: '删除成功'
    };
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
    await this.comment.update(id, data)
    return {
      num: num + 1
    }
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
