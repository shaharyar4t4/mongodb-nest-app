import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
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

    // this is GET controller which is help to fetch All data... 
    @Get()
    async getStudent(){
        return this.studentService.getAllStudent();
    }

    // this is GET  by ID controller which is help to fetch data by using ID 
    @Get(':id')
    async getStudentbyId(@Param('id') id: string){
        return this.studentService.getStudentbyId(id);
    }

   // this is PUT method which is helps to update data...
    @Put(':id')
    async putstudent(@Param('id') id: string, @Body() data: Partial<Student>){
        return this.studentService.updateStudent(id, data);
    }

    // this is PATCH method is help to update the specfic field in db..
    @Patch(':id')
    async patchstudent(@Param('id') id: string, @Body() data: Partial<Student>){
        return this.studentService.patchStudent(id, data);
    }
}
