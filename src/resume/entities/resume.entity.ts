
/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Resume {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({
        length:9999
    })
    content: string;
    @Column({
        default:0,
        nullable:true,
    })
    praiseNum?: number;
    @Column({
        default:0,
        nullable:true,
    })
    readNum:number;
}
