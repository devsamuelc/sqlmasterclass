import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { AuthenticateUserDto } from './dto/authenticate-user.dto';

@Injectable()
export class SessionService {

    async authenticateUser(authenticateUser: AuthenticateUserDto) {

        const { username, password } = authenticateUser;

        // const user = await this.userService.findOne()
    }
}
