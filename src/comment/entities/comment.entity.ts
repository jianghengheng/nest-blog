/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, OneToOne } from "typeorm";
@Entity()
export class Comment {
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
    @Column({
        nullable:true,
        default:0
    })
    praiseNum?: number;
    @Column()
    releaseTime: string;
    @Column()
    articleId: number;
    @Column({
        default:0,
        nullable:true,
    })
    readNum:number;
}
