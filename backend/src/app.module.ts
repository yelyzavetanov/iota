import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersModule } from './users/users.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'myuser',
            password: 'myuser',
            database: 'mydb',
            entities: [User],
            synchronize: true, // ❗ лишай тільки для dev
        }),
        UsersModule,
    ],
})
export class AppModule {}
