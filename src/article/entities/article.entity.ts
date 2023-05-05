/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  category: string;
  @Column()
  content: string;
  @Column()
  title: string;
  @Column()
  create_time: Date;
  @Column()
  file_id: number;



}
