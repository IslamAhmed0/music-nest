import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../../../dto/enums/role.enum';
import { Auth } from '../../../dto/classes/auth';
import * as bcrypt from 'bcrypt';

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
}
