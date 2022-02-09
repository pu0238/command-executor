import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectID,
  ObjectIdColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ExecuterResponse } from './interfaces/executer.response';

@Entity()
export class Executer {
  @ObjectIdColumn()
  id?: ObjectID;

  @Column()
  command: string;

  @Column()
  response: ExecuterResponse;

  @CreateDateColumn()
  createdDate?: Date;

  @UpdateDateColumn()
  updatedDate?: Date;
}
