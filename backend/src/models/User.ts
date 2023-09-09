// import mongoose, {Document, Schema} from "mongoose";


// export interface IUser {
//     email: String;
//     first_name: String;
//     last_name: String;
// }

// export interface IUserModel extends IUser, Document {}

// const UserSchema: Schema = new Schema({
//     email: {
//         type: String,
//         required: true,
//         index: {
//             unique: true
//         }
//     },
//     first_name: {
//        type: String,
//        required: true
//     },
//     last_name: {
//         type: String,
//         required: true
//      }
// },
// {
//     timestamps: true
// }
// )



// export default mongoose.model<IUserModel>('User',UserSchema)

import { ObjectId } from "mongodb";

export default class User {
    constructor(
        public email: string, 
        public first_name: string, 
        public last_name: string, 
        public id?: ObjectId) {}
}

