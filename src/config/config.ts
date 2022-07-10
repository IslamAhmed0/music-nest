import { TypeOrmModule } from '@nestjs/typeorm';

export const config: TypeOrmModule = {
  type: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: '1234',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
  database: 'music',
  port: 5432,
};
