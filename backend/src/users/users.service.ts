import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './users.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('user') private readonly userModel: Model<UserDocument>,
  ) {}

  async createUser(
    username: string,
    password: string,
    name: string,
  ): Promise<User> {
    return this.userModel.create({
      username,
      password,
      name,
    });
  }

  async getUser(query: object): Promise<User> {
    return this.userModel.findOne(query);
  }
}
