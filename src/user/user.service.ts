import { Injectable } from '@nestjs/common';
import { User } from './schemas/user.schemas';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private UserModel: Model<User>){}

    // create a sevice for insecting the data on mongoo db
    async createUser(): Promise<User>{
        const user = new this.UserModel({
            // this is basic structure of schema which is insect on Mongoo db
            name: 'Shaharyar',
            address: {
                street: '123 street',
                city: 'Karachi'
            }
        })
        // save function is help to save the data in mongo db
        return user.save();
    }

    // seraching query 
    async findAll(): Promise<User[]>{
        return this.UserModel.find();
    }
}
