import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import Properties from "./property.entity";
import User from "./user.entity";

@Entity("schedules_users_properties")
export default class SchedulesUsersProperties {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ type: "date" })
  date: string;

  @Column({ type: "time" })
  hour: string;

  @Column("uuid")
  propertyId: string;

  @Column("uuid")
  userId: string;

  @ManyToOne(() => Properties)
  property: Properties;

  @ManyToOne(() => User)
  user: User;
}
