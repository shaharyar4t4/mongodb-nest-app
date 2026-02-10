import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document  } from "mongoose";

// learn about the one to one relationship  (Referening process)

@Schema()
export class Profile extends Document{
    @Prop()
    age: number;

    @Prop()
    qualification: string;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);