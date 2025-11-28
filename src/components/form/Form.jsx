
// import React, { useState } from 'react';






// const Form = () => {
//   const [formtype, setformtype] = useState('login');
//   const [Userid, setUserid] = useState('');
//   const [Userpassword, setUserpassword] = useState('');

  
//   const [SignUpEmail, setSignUpEmail] = useState('');
//   const [SignUpPassword, setSignUpPassword] = useState('');

























//   return (
//     <div className="min-h-screen w-full flex justify-center items-center bg-gradient-to-r from-purple-700 via-blue-500 to-indigo-500 p-4">
//       <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-xl shadow-2xl p-6">
//         <div className="flex justify-center  mb-6">
//           <button
//             onClick={() => setformtype('login')}
//             className={`px-5 py-2 font-semibold text-lg   rounded-l-full transition-all duration-700 ${
//               formtype === 'login'
//                 ? 'bg-white text-black shadow-md '
//                 : 'bg-black text-white  '
//             }`}
//           >
//             Login
//           </button>
//           <button
//             onClick={() => setformtype('signup')}
//             className={`px-5 py-2 font-semibold text-lg  rounded-r-full transition-all duration-700 ${
//               formtype === 'signup'
//                 ? 'bg-white text-black shadow-md'
//                 : 'bg-black text-white '
//             }`}
//           >
//             Sign Up
//           </button>
//         </div>

//         {formtype === 'login' ? (
//           <form  className="flex flex-col gap-4">
//             <h2 className="text-2xl text-white font-bold text-center mb-2">Welcome Back 👋</h2>
//             <input
//               className="w-full p-3 rounded-md border border-white bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
//               type="text"
//               placeholder="User ID"
//               value={Userid}
//               onChange={(e) => setUserid(e.target.value)}
//             />
          
//             <input
//               className="w-full p-3 rounded-md border border-white bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
//               type="password"
//               placeholder="Password"
//               value={Userpassword}
//               onChange={(e) => setUserpassword(e.target.value)}
//             />
//             <a className='text-amber-400 hover:text-white underline ' href="">forgot password ?</a>
//             <button className="mt-4 w-full bg-white text-black font-semibold py-2 rounded-md hover:bg-yellow-300 transition-all duration-300">
//               Login
//             </button>
//        <h3 className='text-center text-white font-semibold' >not a member ?<button  className= '  hover:text-white text-amber-400 px-2 underline text-xl' onClick={()=>setformtype("signup")}>signup</button></h3>

//           </form>
//         ) : (
//           <form  className="flex flex-col gap-4">
//             <h2 className="text-2xl text-white font-bold text-center mb-2">Create Account ✨</h2>
           
//             <input
//               className="w-full p-3 rounded-md border border-white bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
//               type="email"
//               placeholder="Email"
//               value={SignUpEmail}
//               onChange={(e) => setSignUpEmail(e.target.value)}
//             />
//             <input
//               className="w-full p-3 rounded-md border border-white bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
//               type="password"
//               placeholder="Password"
//               value={SignUpPassword}
//               onChange={(e) => setSignUpPassword(e.target.value)}
//             />
//             <button className="mt-4 w-full bg-white text-black font-semibold py-2 rounded-md hover:bg-yellow-300 transition-all duration-300">
//               Sign Up
//             </button>
       


//        <div>
// <h3 className='text-white text-center'><hr />or <hr /></h3>
//         <button
//   className="w-full mt-4 bg-white text-black border flex items-center justify-center gap-2 py-2 px-4 rounded-md hover:bg-gray-100 transition-all duration-300"
// >
//  <img
//   src="https://www.svgrepo.com/show/475656/google-color.svg"
//   alt="Google logo"
//   className="w-5 h-5"
// />

//   Sign up with Google
// </button>

//         <button
//   className="w-full mt-4 bg-white text-black border flex items-center justify-center gap-2 py-2 px-4 rounded-md hover:bg-gray-100 transition-all duration-300">
// <img
//   src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
//   alt="Apple logo"
//   className="w-4 h-5"
// />


//   Sign up with Google
// </button>

//        </div>




//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Form;








import React, { useState } from "react";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA_8Azmw7dN8L2IOCJC-XdQ8zsoZOPRxzY",
  authDomain: "webtrak-78c10.firebaseapp.com",
  projectId: "webtrak-78c10",
  storageBucket: "webtrak-78c10.firebasestorage.app",
  messagingSenderId: "293297630343",
  appId: "1:293297630343:web:c212797691c5982b879c22",
  measurementId: "G-FNLKYTVNXK"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const Form = () => {
  const [formtype, setformtype] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMessage("Login Successful!");
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage("Sign Up Successful! Please Login.");
      setformtype("login");
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setMessage("Google Login Successful!");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gradient-to-r from-purple-700 via-blue-500 to-indigo-500 p-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-xl shadow-2xl p-6">
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setformtype("login")}
            className={`px-5 py-2 font-semibold text-lg rounded-l-full transition-all duration-700 ${
              formtype === "login"
                ? "bg-white text-black shadow-md"
                : "bg-black text-white"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setformtype("signup")}
            className={`px-5 py-2 font-semibold text-lg rounded-r-full transition-all duration-700 ${
              formtype === "signup"
                ? "bg-white text-black shadow-md"
                : "bg-black text-white"
            }`}
          >
            Sign Up
          </button>
        </div>

        {message && (
          <p className="text-center text-yellow-300 font-semibold mb-4">{message}</p>
        )}

        {formtype === "login" ? (
          <form className="flex flex-col gap-4" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-md border border-white bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-md border border-white bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button className="mt-4 w-full bg-white text-black font-semibold py-2 rounded-md hover:bg-yellow-300 transition-all duration-300">
              Login
            </button>
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="mt-2 w-full bg-white text-black border flex items-center justify-center gap-2 py-2 px-4 rounded-md hover:bg-gray-100 transition-all duration-300"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Login with Google
            </button>
          </form>
        ) : (
          <form className="flex flex-col gap-4" onSubmit={handleSignUp}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-md border border-white bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-md border border-white bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button className="mt-4 w-full bg-white text-black font-semibold py-2 rounded-md hover:bg-yellow-300 transition-all duration-300">
              Sign Up
            </button>
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="mt-2 w-full bg-white text-black border flex items-center justify-center gap-2 py-2 px-4 rounded-md hover:bg-gray-100 transition-all duration-300"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Sign Up with Google
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Form;
