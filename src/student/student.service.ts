import { Injectable } from '@nestjs/common';
import { Student, StudentDocument } from './student.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class StudentService {
    
    constructor(
            // this is a injectable model --> is ka kam ye hota ha kiya jo schema bnta ha is ko ye sevice ki file me resigeter karvata ha 
        @InjectModel(Student.name) private StudentModel: Model<StudentDocument>
    ){}
   
    // the keyword "Partial" is show that the --->  some data is optional
  async createStudent (data: Partial<Student>): Promise<Student>{
   
    // the newStudent is help to add the data on DB
    const newStudent = new this.StudentModel(data);
    // this save method on DB
    return newStudent.save();
  }
}
