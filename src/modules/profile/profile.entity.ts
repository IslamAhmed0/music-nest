import {
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Gender } from '../../dto/enums/gender.enum';
import { User } from '../auth/entites/user.entity';

@Entity('profiles')
@Unique(['phone'])
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    nullable: true,
  })
  gender: Gender;

  @Column({
    nullable: true,
  })
  age: number;

  @Column({
    nullable: true,
  })
  country: string;

  @Column({
    nullable: true,
  })
  city: string;

  @Column({
    nullable: true,
  })
  address: string;

  @Column({
    nullable: true,
  })
  phone: string;

  @Column({
    nullable: true,
  })
  image: string;

  @OneToOne(() => User, (user) => user.profile) // specify inverse side as a second parameter
  user: User;
}
