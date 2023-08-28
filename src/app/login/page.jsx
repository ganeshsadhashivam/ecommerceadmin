"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

const LoginPage = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);

  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    try {
      const response = await axios.post("/api/users/login", user);
      console.log("login success", response.data);
      toast.success("Login success");
      router.push("/profile");
    } catch (error) {
      console.log("Login failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  return (
    <div className="bg-black flex flex-col items-center justify-center min-h-screen py-2">
      <div className="items-center  text-white ">
        <div className=" border-zinc-50 mx-20 ">
          <h1>{loading ? "processing" : "Login"}</h1>
          {/* <div>
            <label htmlFor="">
              username
              <input
                type="text"
                id="username"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                placeholder="username"
                className=" px-1 m-2"
              />
            </label>
          </div> */}
          <div>
            <label htmlFor="">
              Email
              <input
                type="text"
                id="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="email"
                className=" px-2 m-10 text-black"
              />
            </label>
          </div>
          <div>
            <label htmlFor="">
              password
              <input
                type="text"
                id="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="password"
                className=" px-1 m-2 text-black"
              />
            </label>
          </div>
          <div>
            <button
              onClick={onLogin}
              className="bg-green-400 p-2 border border-gray-600 rounded-lg mb-4 focus:outline-none"
            >
              {buttonDisabled ? "Login" : "loggedin"}
            </button>
          </div>
          <div>
            <Link href={"/signup"}>Signup here</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
