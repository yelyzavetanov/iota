import { UsersService } from './users.service';
import { User } from '../user.entity';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getAll(): Promise<User[]>;
    create(userData: Partial<User>): Promise<User>;
}
