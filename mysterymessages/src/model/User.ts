import mongoose , {Schema, Document} from "mongoose";

export interface Message extends Document {
    content: string;
    createdAt: Date;
}

const MessageSchema : Schema<Message> = new Schema({
    content: {type: String, required: true},
    createdAt: {type: Date, default: Date.now, required: true}
});

export interface User extends Document {
    username: string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeExpiration: Date;
    isVerified: boolean;
    isAcceptingMessages: boolean;
    messages: Message[];
}

const UserSchema : Schema<User> = new Schema({
    username: {type: String, required: [true, "Username is required"], unique: true, trim: true},
    email: {type: String, required: [true, "Email is required"], unique: true, match: [/\S+@\S+\.\S+/, "Please enter a valid email"]},
    password: {type: String, required: [true, "Password is required"], minlength: [6, "Password must be at least 6 characters"]},
    verifyCode: {type: String, required: [true, "Verification code is required"]},
    verifyCodeExpiration: {type: Date, required: [true, "Verification code expiration date is required"]},
    isVerified: {type: Boolean, default: false},
    isAcceptingMessages: {type: Boolean, default: true},
    messages: [MessageSchema]
});

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", UserSchema);

export default UserModel;