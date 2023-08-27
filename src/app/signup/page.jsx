// "use client";
// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import { toast } from "react-hot-toast";

// const SignUp = () => {
//   const router = useRouter();

//   const [user, setUser] = useState({
//     email: "",
//     password: "",
//     username: "",
//   });

//   const [buttonDisabled, setButtonDisabled] = useState(false);

//   const [loading, setLoading] = useState(false);
//   const onSignUp = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.post("/api/users/signup", user);
//       console.log("sign success", response.data);
//       router.push("/login");
//     } catch (error) {
//       console.log("sign failed", error.message);
//       toast.error(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (user.email.length > 0 && user.password.length > 0) {
//       setButtonDisabled(false);
//     } else {
//       setButtonDisabled(true);
//     }
//   }, [user]);
//   return (
//     <div className="bg-black flex flex-col items-center justify-center min-h-screen py-2">
//       <div className="items-center text-white ">
//         <div className=" border-zinc-50 ">
//           <h1>{loading ? "Processing" : "Sign up "}</h1>
//           <div>
//             <label htmlFor="">
//               username
//               <input
//                 type="text"
//                 id="username"
//                 value={user.username}
//                 onChange={(e) => setUser({ ...user, username: e.target.value })}
//                 placeholder="username"
//                 className=" px-1 m-2 text-black"
//               />
//             </label>
//           </div>
//           <div>
//             <label htmlFor="">
//               Email
//               <input
//                 type="text"
//                 id="email"
//                 value={user.email}
//                 onChange={(e) => setUser({ ...user, email: e.target.value })}
//                 placeholder="email"
//                 className=" px-2 m-10 text-black"
//               />
//             </label>
//           </div>
//           <div>
//             <label htmlFor="">
//               password
//               <input
//                 type="text"
//                 id="password"
//                 value={user.password}
//                 onChange={(e) => setUser({ ...user, password: e.target.value })}
//                 placeholder="password"
//                 className=" px-1 m-2 text-black"
//               />
//             </label>
//           </div>
//           <div>
//             <button
//               onClick={() => onSignUp()}
//               className="bg-green-400 p-2 border border-gray-600 rounded-lg mb-4 focus:outline-none"
//             >
//               {buttonDisabled ? " No sign up " : "sign up"}
//             </button>
//           </div>
//           <div>
//             <Link href={"/login"}>login here</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

const SignupPage = () => {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);
      router.push("/login");
    } catch (error) {
      console.log("Signup failed", error.message);

      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>{loading ? "Processing" : "Signup"}</h1>
      <hr />
      <label htmlFor="username">username</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        id="username"
        type="text"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
      />
      <label htmlFor="email">email</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      />
      <label htmlFor="password">password</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />
      <button
        onClick={onSignup}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        {buttonDisabled ? "No signup" : "Signup"}
      </button>
      <Link href="/login">Visit login page</Link>
    </div>
  );
};

export default SignupPage;
