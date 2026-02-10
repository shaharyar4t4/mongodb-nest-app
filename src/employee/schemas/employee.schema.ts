import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooesSchema } from "mongoose";
import { Profile } from "./profile.schema";

// MonogooSchema is already async as a Schema ab is issue ye ha kiya schema kiya naam se phela ik file import hogi ha 

@Schema()
export class Employee extends Document {
    @Prop()
    name: string;

    //{ type: MongooesSchema.Type.objectID, ref: 'Profile'} is also working on Linking the reference id b/w in 
    // Profile and employee ha ye done different database but in ko connect karna kiya liya me na Reference Key use ki ha 
    @Prop({ type: MongooesSchema.Types.ObjectId, ref: 'Profile' })
    profile: Profile;
}



export const EmployeeSchema = SchemaFactory.createForClass(Employee);
