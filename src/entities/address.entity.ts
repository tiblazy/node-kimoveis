import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("addresses")
export default class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  district: string;

  @Column({ length: 8 })
  zipCode: string;

  @Column({ nullable: true })
  number: string;

  @Column()
  city: string;

  @Column({ length: 2 })
  state: string;
}
