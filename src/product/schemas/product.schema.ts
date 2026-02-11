import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Tag } from "./tag.schema";


@Schema()

export class Product extends Document {

    @Prop()
    title: string;

    // Me na Prop kiya under me tag is define kiya ha... q kiya one to many ka relationship ha by using (Embdeding method)
    @Prop({ type: [Tag] })
    tags: Tag[];

}

export const ProductSchema = SchemaFactory.createForClass(Product);