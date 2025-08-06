import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";
import { success } from "zod";
import { requestToBodyStream } from "next/dist/server/body-streams";

export async function POST(request : Request){
    await dbConnect()

    try {
        const {username, email, password} = await request.json()
    } catch (error) {
        console.error("Error Registering user", error)
        return Response.json(
            {
                success: false,
                message : "Error Registering user"
            },
            {
                status: 500
            }
        )
    }
}

