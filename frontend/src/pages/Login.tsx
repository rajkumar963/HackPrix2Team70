import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch, RootState } from '../store/store';
import { loginUser } from '../authSlice';

// ✅ Zod schema for validation
const schema = z.object({
  emailId: z.string().email('Invalid Email'),
  password: z.string().min(8, 'Password is too weak'),
});

type LoginFormValues = z.infer<typeof schema>;

function Login() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { isAuthenticated, loading, error } = useSelector(
    (state: RootState) => state.auth
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({ resolver: zodResolver(schema) });

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const onSubmit = (data: LoginFormValues) => {
    dispatch(loginUser(data));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100  p-4">
      <div className="bg-white rounded-xl w-full max-w-md p-6 shadow-lg">
        {/* Close (X) Button */}
        <div className="flex justify-end">
          <button
            onClick={() => navigate(-1)}
            className="text-gray-400 hover:text-gray-600 text-xl font-bold"
          >
            ×
          </button>
        </div>

        {/* Header */}
        <h2 className="text-2xl font-semibold text-center mb-6">Login As User</h2>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="john.doe@example.com"
              className={`w-full px-4 py-2 border bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                errors.emailId ? 'border-red-500' : 'border-green-300'
              }`}
              {...register('emailId')}
            />
            {errors.emailId && (
              <p className="text-sm text-red-500 mt-1">{errors.emailId.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className={`w-full px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-green-500 ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
              {...register('password')}
            />
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition duration-300"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>

          {/* Error Message */}
          {error && <p className="text-sm text-red-500 text-center">{error}</p>}
        </form>

        {/* Sign Up Redirect */}
        <div className="text-center mt-4 text-sm">
          Don&apos;t have an account?{' '}
          <span
            onClick={() => navigate('/signup')}
            className="text-green-600 font-medium hover:underline cursor-pointer"
          >
            Sign up
          </span>
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mt-4 w-full py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition"
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default Login;
