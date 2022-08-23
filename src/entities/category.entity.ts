import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Properties from "./property.entity";

@Entity("categories")
export default class Categories {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => Properties, (property) => property.categoryId)
  categoryId: Properties[];
}
