import React, { useEffect, useState } from "react";
import { auth, googleProvider } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { toast } from "react-toastify";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSingUp] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  //   handleSubmit form
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
        toast.success("User created successfully!");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success("User signed in successfully!");
      }
    } catch (error) {
      console.log(error.message);
      toast.error(`${error.message}`);
    }
  };

  //   handleGoogleSignIn function
  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success("Google sign-in successfully!");
    } catch (error) {
      console.log(error.message);
      toast.error(`${error.message}`);
    }
  };

  //   logOut function
  const handleLogOut = async () => {
    try {
      signOut(auth);
      toast.success("User sign-out successfully!");
    } catch (error) {
      console.log(error.message);
      toast.error(`${error.message}`);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        {user ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Welcome, {user.email}</h2>
            <button
              onClick={handleLogOut}
              className="w-full py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-center mb-6">
              {isSignUp ? "Sign Up" : "Sign In"}
            </h2>

            <form onSubmit={handleSubmitForm} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Email:
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Password:
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                {isSignUp ? "Sign Up" : "Sign In"}
              </button>
            </form>

            <button
              onClick={handleGoogleSignIn}
              className="mt-4 w-full py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
            >
              Sign in with Google
            </button>

            <button
              onClick={() => setIsSingUp(!isSignUp)}
              className="mt-4 w-full py-2 px-4 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors"
            >
              {isSignUp
                ? "Already have an account? Sign In"
                : "Create an account"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default SignInForm;
