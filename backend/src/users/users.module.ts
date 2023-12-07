import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './users.model';
import { UserService } from './users.service';
import { UserController } from './users.controller';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'user', schema: UserSchema }])],
  providers: [UserService, UsersService],
  controllers: [UserController, UsersController],
})
export class UsersModule {}
