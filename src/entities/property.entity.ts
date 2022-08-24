import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToOne,
  OneToMany,
  JoinColumn,
} from "typeorm";
import Address from "./address.entity";
import Categories from "./category.entity";
import SchedulesUsersProperties from "./schedule.entity";

@Entity("properties")
export default class Properties {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ default: false })
  sold: boolean;

  @Column({ type: "decimal", precision: 12, scale: 2, default: 0 })
  value: number;

  @Column()
  size: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => SchedulesUsersProperties, (schedule) => schedule.propertyId)
  propertyId: SchedulesUsersProperties[];

  @OneToOne(() => Address, { eager: true })
  @JoinColumn()
  address: Address;

  @ManyToOne(() => Categories)
  category: Categories;
}
