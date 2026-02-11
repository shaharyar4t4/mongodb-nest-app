import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

@Schema()
export class Library extends Document{
    @Prop()
    name: string;
    
    //--> Types is show that the "Refer the Book"
    // 
    @Prop({type: [{type: Types.ObjectId, ref: 'Book'}]})
    // ObjectID[]; --> this is may be show in the form of Array like multiple books bha hosaati ha is 
    books: Types.ObjectId[];
}

export const LibrarySchema = SchemaFactory.createForClass(Library);