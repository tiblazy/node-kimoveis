import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  //   ManyToMany,
} from "typeorm";
import Category from "../controllers/category.controller";
import Categories from "./category.entity";

@Entity("properties")
export default class Properties {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ default: false })
  sold: boolean;

  @Column({ type: "decimal", precision: 12, scale: 2 })
  value: number;

  @Column()
  size: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ type: "uuid", unique: true })
  addressId: string;

  @Column("uuid")
  categoryId: string;

  // @ManyToMany

  @ManyToOne(() => Categories)
  category: Category;
}
