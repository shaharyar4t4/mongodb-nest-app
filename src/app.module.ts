import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentModule } from './student/student.module';
import { UserModule } from './user/user.module';
import { EmployeeModule } from './employee/employee.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
   // this below line for config it help to access the data which is mention of .evn file
   ConfigModule.forRoot(),
   // this below line is help to implemented the mongoose (mongo db) in whole project
   MongooseModule.forRoot(process.env.MONGO_URI!),
   StudentModule,
   UserModule,
   EmployeeModule,
   ProductModule
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
