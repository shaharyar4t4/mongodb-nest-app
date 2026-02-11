import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

@Schema({ timestamps: true })
export class Project extends Document {

    // Important Point 
    // Many to Many me hum Reference ID se karta.. multiple update option provide karta ha 
    // jab kiya Many to many me embeding process hum used nhi jese ki waja ye ha data duplication, data assign issue or multiple updates provide nhi
    // possible ha tu embdeding karna but hum nhi karta ha jese waja upper mention ha....

    @Prop({ required: true })
    title: string;

    @Prop({ type: [{ type: Types.ObjectId, ref: 'Developer' }] })
    developers: Types.ObjectId;//  jo hum 'project' populate kiya under add wo yehe se call hota ha 
}

export const projectSchema = SchemaFactory.createForClass(Project);

