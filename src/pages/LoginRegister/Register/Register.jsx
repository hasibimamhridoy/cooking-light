import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../ContextProvider/AuthContextProvider";
import { getAuth,updateProfile,} from "firebase/auth";
import { app } from "../../../firebase/FirebaseConfig/firebaseConfig";
const auth = getAuth(app);
const Register = () => {

  const location = useLocation()
  const fromPath = location.state?.from?.pathname || '/'
  const navigate = useNavigate()


  const { handleManualRegister, handleGoogleRegister ,handleGithubRegister,handleUpdateProfile,user,handleManualLogout } =
    useContext(AuthContext);

    const [error,setError] = useState('')
    
  const handleRegister = (e) => {
    console.log(e.target);
    e.preventDefault();
    const name = e.target.name.value;
    const pass = e.target.password.value;
    const photo_URL = e.target.photo_URL.value;
    const confirm_password = e.target.confirm_password.value;
    const email = e.target.email.value;

    if (email.length < 1) {
      return setError('You cannot submit empty email fields.')
    }

    else if (pass.length < 6) {

      return setError('Password should be at least 6 characters')
      
    }
    else if (confirm_password.length < 6) {

      return setError('Confirm Password should be at least 6 characters')
      
    }
    else if (pass !== confirm_password) {

      return setError('Password and Confirm Password does not match')
      
    }
    
    handleManualRegister(email, pass)
      .then((result) => {
        console.log(result);

        updateProfile(auth.currentUser, {
          displayName: name, photoURL: photo_URL
        }).then(() => {
          // Profile updated!
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
        });

        setError('Login Sucessfully')
        handleManualLogout()
        navigate('/login')
        e.target.reset()
      })
      .catch((error) => {
        console.log(error);
        setError(error.message)
      });

  };

  console.log(error);


  if (error =='Firebase: Password should be at least 6 characters (auth/weak-password).') {
    setError('Password should be at least 6 characters')
  }
  if (error =='Firebase: Error (auth/email-already-in-use).') {
    setError('Email Already Exits.Please provide another Email')
  }
  console.log(user);

  const handleGoogle =()=>{
    handleGoogleRegister()
    .then((result) => {
     
      handleManualLogout()
        navigate('/login')
      
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
     
    });
  }
  const handleGithub =()=>{
    handleGithubRegister()
    .then((result) => {

      handleManualLogout()
        navigate('/login')
      
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
     
    });
  }
  return (
    <div>
      <div className="p-5 lg:m-0 bg-[#fffaf0] ">
        <div class="w-full mx-auto my-10 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form onSubmit={handleRegister} class="space-y-5" action="#">
            <h5 class="text-xl text-center font-medium text-gray-900 dark:text-white">
              Please Register
            </h5>
            <div>
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
              />
            </div>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                
              />
            </div>
            <div>
              <label
                for="photo_URL"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Photo url
              </label>
              <input
                type="text"
                name="photo_URL"
                id="photo_URL"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="https://unsplash/img"
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                
              />
            </div>
            <div>
              <label
                for="confirm_password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Confirm password
              </label>
              <input
                type="password"
                name="confirm_password"
                id="confirm_password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                
              />
            </div>

            <button
              type="submit"
              class="w-full text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Register
            </button>

            <p className="text-red-500">{error}</p>
            <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
              Already registered?{" "}
              <Link to="/login">
                <a
                  href="#"
                  class="text-orange-500 hover:underline dark:text-blue-500"
                >
                  Please Login
                </a>
              </Link>
            </div>
          </form>

          

         <div className="social-login mt-5">
         <h1 className="mb-5 text-center">Or</h1>
         <button
         onClick={handleGoogle}
            type="button"
            class="text-white w-full bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
          >
            <svg
              class="w-4 h-4 mr-2 -ml-1"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
            Sign in with Google
          </button>
         
         <button
         onClick={handleGithub}
            type="button"
            class="text-white w-full bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
          >
            <svg
              class="w-4 h-4 mr-2 -ml-1"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="github"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path
                fill="currentColor"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              ></path>
            </svg>
            Sign in with Github
          </button>
          
         </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
