import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepo: Repository<User>,
    ) {}

    findAll(): Promise<User[]> {
        return this.usersRepo.find();
    }

    create(user: Partial<User>): Promise<User> {
        const newUser = this.usersRepo.create(user);
        return this.usersRepo.save(newUser);
    }
}
