"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";
import React from "react";

export default function SignupPage() {
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        phoneno: "",
        userName: "",
    });

    console.log(user);

    const onSignUp = async () => {
        alert("signed up")
    };
    return (
        <>
            <div className="h-screen w-screen bg-white text-black flex items-center justify-center">
                <div className="p-4 rounded-2xl text-center w-2/4 h-2/3 px border-2 text-slate-600 bg-orange-500">
                    <h2 className="text-4xl font-semibold mb-6 text-white">SignUp</h2>
                    <div className="flex items-center mb-8">
                        <label className="w-2/5 text-white block text-xl font-medium mr-5" htmlFor="username">UserName</label>
                        <input
                            className="outline-none h-10 w-48 rounded-md t text-black font-medium"
                            type="text"
                            id="username"
                            value={user.userName}
                            onChange={(e) => setUser({ ...user, userName: e.target.value })}
                            placeholder=" User Name"
                            required
                        />
                    </div>
                    <div className="flex items-center mb-8">
                        <label className="w-2/5 text-white block text-xl font-medium mr-5" htmlFor="username">Email</label>
                        <input
                            className="outline-none h-10 w-48 rounded-md t text-black font-medium"
                            type="email"
                            id="useremail"
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                            placeholder=" User Email"
                            required
                        />
                    </div>
                    <div className="flex items-center mb-8">
                        <label className="w-2/5 text-white block text-xl font-medium mr-5" htmlFor="username">Password</label>
                        <input
                            className="outline-none h-10 w-48 rounded-md t text-black font-medium"
                            type="text"
                            id="password"
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                            placeholder="Password"
                            required
                        />
                    </div>
                    <div className="flex items-center mb-8">
                        <label className="w-2/5 text-white block text-xl font-medium mr-5" htmlFor="username">Phone Number</label>
                        <input
                            className="outline-none h-10 w-48 rounded-md t text-black font-medium"
                            type="number"
                            id="phone"
                            value={user.phoneno}
                            onChange={(e) => setUser({ ...user, phoneno: e.target.value })}
                            placeholder=" User Number"
                            required
                        />
                    </div>
                    <button onClick={onSignUp} className="bg-cyan-700 h-12 w-24 text-white font-medium rounded-xl border-0">SignUp</button>
                </div>
            </div>
        </>
    );
}
