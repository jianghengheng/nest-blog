/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  category: string;
  @Column()
  categoryId: number;
  @Column()
  content: string;
  @Column()
  title: string;
  @Column()
  create_time: string;
  @Column()
  fileId: string;
}
