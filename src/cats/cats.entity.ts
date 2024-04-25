import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cats {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    age: number;

    @Column()
    breed: string;

    @Column()
    name: string;
}