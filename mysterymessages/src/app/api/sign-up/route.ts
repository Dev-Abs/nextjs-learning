import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";

export async function POST(request: Request) {
    await dbConnect();

    try {
        const { username, email, password } = await request.json();
        const existingUserVerfiedByUsername = await UserModel.findOne({username, isVerified: true});
        if (existingUserVerfiedByUsername) {
            return Response.json(
                {
                    success: false,
                    message: "Username already exists"
                },
                {
                    status: 400
                }
            )
        }

        const existingUserByEmail = await UserModel.findOne({email});
        const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();

        if (existingUserByEmail) {
            if (existingUserByEmail.isVerified) {
                return Response.json(
                    {
                        success: false,
                        message: "User already exists with this Email"
                    },
                    {
                        status: 400
                    }
                )
            } else {
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(password, salt);
                existingUserByEmail.password = hashedPassword;
                existingUserByEmail.verifyCode = verifyCode;
                existingUserByEmail.verifyCodeExpiration = new Date(Date.now() + 15 * 60000);
                await existingUserByEmail.save();
            } 
        } else {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const verifyCodeExpiration = new Date();
            verifyCodeExpiration.setMinutes(verifyCodeExpiration.getMinutes() + 15);

            const newUser = new UserModel(
                {
                    username,
                    email,
                    password: hashedPassword,
                    verifyCode,
                    verifyCodeExpiration,
                    isVerified: false,
                    isAcceptingMessages: true,
                    messages: []
                });
            await newUser.save();
        }

        const emailResponse = await sendVerificationEmail(email, username, verifyCode);
        if (!emailResponse.success) {
            return Response.json(
                {
                    success: false,
                    message: emailResponse.message
                },
                {
                    status: 500
                }
            )
        }

            return Response.json(
                {
                    success: true,
                    message: "User signed up. Please verify your email"
                },
                {
                    status: 201
                }
            )


        }

    catch (error) {
        console.error("Error signing up user: ", error);
        return Response.json(
            {
                success: false,
                message: "Error signing up user"
            },
            {
                status: 500
            }
        )
    }
}

