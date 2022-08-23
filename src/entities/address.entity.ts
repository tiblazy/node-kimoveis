import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import Properties from "./property.entity";

@Entity("addresses")
export default class Address {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  district: string;

  @Column()
  zipcode: string;

  @Column({ nullable: true })
  number: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @OneToOne(() => Properties)
  addressId: Properties;
}
