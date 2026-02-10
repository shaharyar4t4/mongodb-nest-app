import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schemas/user.schemas';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }
    // this is POST method is help to add the data on database 
    @Post()
    // start is me na async remove --->  is ki need ki waja ye ha data tu constant aarha ha 

    create(@Body() data: Partial<User>) {
        return this.userService.createUser();
    }

    @Get()
    getAll() {
        return this.userService.findAll();
    }
}
