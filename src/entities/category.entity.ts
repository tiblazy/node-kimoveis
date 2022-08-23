import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Address from "./address.entity";
import Properties from "./property.entity";

@Entity("categories")
export default class Categories {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => Address, (address) => address.addressId)
  addressId: Address;

  @OneToMany(() => Properties, (property) => property.categoryId)
  categoryId: Properties[];
}
