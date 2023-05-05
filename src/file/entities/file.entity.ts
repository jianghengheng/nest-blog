/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class File {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    path: string;
    @Column()
    size: string;
}
