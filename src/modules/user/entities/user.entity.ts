import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    neighborhood: string;

    @Column()
    age: number;

    @Column()
    username: string;

    @Column()
    password: string;
}
