import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { UseresService } from './useres/useres.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/authentication'),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, UseresService],
})
export class AppModule {}
