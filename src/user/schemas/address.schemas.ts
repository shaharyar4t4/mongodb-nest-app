import { Prop, Schema } from "@nestjs/mongoose";

// learn about the one to one relationship  (Embeding process)
// this is a simple class which is embed on the user.schemas.ts

@Schema()
export class Address {
    @Prop()
    street: string;

    @Prop()
    city: string;
}
