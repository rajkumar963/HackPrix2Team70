import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";

// Zod validation schema
const formSchema = z.object({
  firstName: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormData = z.infer<typeof formSchema>;

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    // Handle form submission logic (e.g., API call)
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-8 relative">
        {/* Close button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 right-4 text-gray-400 hover:text-black text-2xl"
          aria-label="Close"
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Sign Up As User
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name Field */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium mb-1 text-gray-700">
              Name
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="John Doe"
              {...register("firstName")}
              className={`w-full px-4 py-2 border  bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="example@gmail.com"
              {...register("email")}
              className={`w-full px-4 py-2 border  bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1 text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              {...register("password")}
              className={`w-full px-4 py-2 border  bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Sign Up
          </button>

          {/* Login Redirect */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-green-600 cursor-pointer hover:underline"
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
