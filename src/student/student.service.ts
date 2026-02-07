import { Injectable } from '@nestjs/common';
import { Student, StudentDocument } from './student.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class StudentService {

  constructor(
    // this is a injectable model --> is ka kam ye hota ha kiya jo schema bnta ha is ko ye sevice ki file me resigeter karvata ha 
    @InjectModel(Student.name) private StudentModel: Model<StudentDocument>
  ) { }

  // POST method (Create the data on DB)
  // the keyword "Partial" is show that the --->  some data is optional
  async createStudent(data: Partial<Student>): Promise<Student> {

    // the newStudent is help to add the data on DB
    const newStudent = new this.StudentModel(data);
    // this save method on DB
    return newStudent.save();
  }

  // GET method (Get the data on DB)
  //Promise is show that the data is geted... but your another will be continous..
  async getAllStudent(): Promise<Student[]>{
    // the find() is help to get data from data base...
    // exec is help to fetch data with easliy...
    return this.StudentModel.find().exec();
  }

  // GET method (Get the data on DB)
  // the method help to fetch data by using specfic id...
  async getStudentbyId(id: string): Promise<Student | null>{
    // the findByID() is help to get specfic data from data base...
    return this.StudentModel.findById(id).exec();
  }

}
