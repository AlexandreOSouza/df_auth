import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.model';
import * as bcrypt from 'bcrypt';

@Controller('auth')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('/singup')
  async createUser(
    @Body('password') password: string,
    @Body('name') name: string,
    @Body('username') username: string,
  ): Promise<User> {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltOrRounds);

    const result = await this.userService.createUser(
      username,
      hashedPassword,
      name,
    );
    return result;
  }
}
