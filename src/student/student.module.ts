import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Student, StudentSchema } from './student.schema';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            { 
                // the name is import from student.schema.ts
                name: Student.name,
                // StudentSchema is import why on student.schema.ts
                /*{
                    name: "Ali",
                    age: 24,
                    email: "test@gmail.com" (optional)
                }*/
                schema: StudentSchema
            }])
    ],
    controllers: [StudentController],
    providers: [StudentService]
})
export class StudentModule {

}

