import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import User from "./user.entity";

@Entity("schecudles_users_properties")
export default class SchedulesUsersProperties {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column() //date
  date: string;

  @CreateDateColumn() //date
  hour: string;

  @Column("uuid")
  propertyId: string;

  @Column("uuid")
  userId: string;

  @ManyToOne(() => User)
  user: User;
}
