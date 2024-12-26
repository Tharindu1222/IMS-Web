import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('ims')
export class Ims {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  category: string;

  @Column()
  description: string;

  @Column('simple-array') // Array of strings for image URLs
  images: string[];
}
