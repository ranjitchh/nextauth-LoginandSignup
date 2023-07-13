import { connect } from "mongoose";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

// export async function POST(request: NextRequest){
//     try {

//     } catch (error:any) {
//           return NextResponse.json({error.er})
//     }
// }
