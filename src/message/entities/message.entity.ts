/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Message {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({
        nullable:true
    })
    userId?: number;
    @Column()
    content: string;
    @Column({
        nullable:true
    })
    parentId?: number;
    @Column()
    releaseTime: string;


}
