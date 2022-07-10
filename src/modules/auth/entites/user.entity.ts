import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Role } from '../../../dto/enums/role.enum';
import { Auth } from '../../../dto/classes/auth';
import * as bcrypt from 'bcrypt';
import { Profile } from '../../profile/profile.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: number;

  @Column()
  salt: string;

  @Column({
    type: 'enum',
    enum: Role,
    array: true,
  })
  roles: Role[];
  @Column('simple-json')
  auth: Auth;

  //valid password

  async validatePassword(password): Promise<boolean> {
    const saltOrRounds = 10;

    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }

  //relation
  @OneToOne(() => Profile, (profile) => profile.user)
  @JoinColumn()
  profile: Profile;
}
