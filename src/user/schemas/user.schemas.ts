import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Address } from "./address.schemas";

@Schema()
export class User extends Document {
    @Prop()
    name: string;

    // the address is show that the embeding process comes form the "address.schemas.ts"
    @Prop()
    address: Address;
}

export const userSchema = SchemaFactory.createForClass(User);