import { TypeOrmModule } from '@nestjs/typeorm';

export const config = {
  db: {
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '1234',
    database: 'music',
    port: 5432,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  },
};
