import { User } from 'src/entities';
import { UserDetails } from 'src/utils';
import { Repository } from 'typeorm';
export declare class AuthService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    validateUser(details: UserDetails): Promise<User>;
    findUser(id: number): Promise<User>;
}
