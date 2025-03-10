import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa6";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { setUser, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  // Handle Google Sign-In
  const handleGoogleSignIn = async () => {
    try {
      const res = await signInWithGoogle();
      toast.success("Login Successful");
      navigate("/dashboard/overview");
    } catch (err) {
      toast.error("Login Failed");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-[#ECE5FE] p-4">
      {/* Header */}
      <div className="w-full max-w-md text-center mb-6">
        <Link to="/">
          <h4 className="text-3xl font-bold uppercase text-[#D6FA9C]">AgroDoctor</h4>
        </Link>
      </div>

      {/* Google Sign-In Container */}
      <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-8 text-center">
        <h4 className="text-2xl font-semibold mb-6 text-gray-800">Welcome Back!</h4>

        <button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center gap-2 w-full py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-all"
        >
          <FaGoogle className="text-red-500" />
          <span>Sign in with Google</span>
        </button>

      </div>
    </div>
  );
};

export default Login;
