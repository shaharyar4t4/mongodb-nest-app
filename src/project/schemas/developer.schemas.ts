import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

@Schema({ timestamps: true })
export class Developer extends Document {

    // Important Point 
    // Many to Many me hum Reference ID se karta.. multiple update option provide karta ha 
    // jab kiya Many to many me embeding process hum used nhi jese ki waja ye ha data duplication, data assign issue or multiple updates provide nhi
    // possible ha tu embdeding karna but hum nhi karta ha jese waja upper mention ha....

    @Prop({ required: true })
    name: string;

    @Prop({ type: [{ type: Types.ObjectId, ref: 'Project' }] })
    projects: Types.ObjectId;
}

export const developerSchema = SchemaFactory.createForClass(Developer);

