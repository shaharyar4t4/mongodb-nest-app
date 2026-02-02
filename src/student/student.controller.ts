import { Body, Controller, Post } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.schema';

@Controller('student')
export class StudentController {

    constructor(private readonly studentService: StudentService){}

    // this is POST method is help to add the data on database 
    @Post()
    async addStudent(@Body() data: Partial<Student>){
        return this.studentService.createStudent(data);
    }
}
