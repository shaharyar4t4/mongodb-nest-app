import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

import { Document } from "mongoose";


// this below line is show how data moves from one place to another place 
//Documents show -->  that the student data save in the form of JSON
export type StudentDocument = Student & Document;

// this timestamps means show that the data is created or updated which time -->> 
// inshort ye karta ye ha mongoo db automatically 2 field add karta ha or is 2 field me ye show hota ha kiya data kese time create hua ha or update hoa ha 

@Schema({ timestamps: true })
export class Student {
    //this below line shows that the "Name" is requried
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    age: number;

    // this below line show that "Email" is optional
    @Prop()
    email?: string;

}

// this line is show to export student date... from another file in short is class me student ko data use karya kaya schema bn na raha mongo db me
export const StudentSchema = SchemaFactory.createForClass(Student);