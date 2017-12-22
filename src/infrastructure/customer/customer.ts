import { Document, Schema, Model, model } from "mongoose";
import { ICustomer }                      from "./interface.customer";

export interface ICustomerModel extends ICustomer, Document {
    fullName(): string;
}

export var CustomerSchema: Schema = new Schema({
    createdAt: Date,
    email    : String,
    firstName: String,
    lastName : String
});

CustomerSchema.pre('save', (next) => {
    let now = Date.now();
    if (!this.createdAt) { this.createdAt = now; }

    next();
});

CustomerSchema.methods.fullName = function(): string {
    return `${ this.firstName.trim() } ${ this.lastName.trim()}`;
}

export const User: Model<ICustomerModel> = model<ICustomerModel>("User", CustomerSchema);