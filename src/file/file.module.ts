/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { FileController } from './file.controller';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import {extname, join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { File } from './entities/file.entity';
/**配置文件保存地址 */
@Module({

  imports: [MulterModule.register({
    storage: diskStorage({
      destination: join(__dirname, '../files'),
      filename:(_,file,callback)=>{
     
        
        const fileName = `${new Date().getTime() + extname(file.originalname)}`
        return callback(null,fileName)
      }
    })
  }),
  TypeOrmModule.forFeature([File])],
  controllers: [FileController],
  providers: [FileService],
})
export class FileModule { }
