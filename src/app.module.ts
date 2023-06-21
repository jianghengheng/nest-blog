/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleModule } from './article/article.module';
import { FileModule } from './file/file.module';
import { CommentModule } from './comment/comment.module';
import { MessageModule } from './message/message.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      // host: '82.156.140.196',
      host: '124.222.59.119',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'jh',
      logging: true,
      autoLoadEntities: true, // 使用这个配置自动导入entities
      synchronize: true,
    }),
    UserModule,
    CategoryModule,
    ArticleModule,
    FileModule,
    CommentModule,
    MessageModule
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
