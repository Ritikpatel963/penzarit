import { useForm } from "react-hook-form";
import { useLogin } from "../hooks/useAuth";

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { mutate: login, isPending, error } = useLogin();

  const onSubmit = (data) => login(data);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

        {/* Logo / Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-600 rounded-xl mb-4">
            <span className="text-white text-2xl font-bold">P</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Panzer IT</h1>
          <p className="text-gray-500 text-sm mt-1">Sign in to your admin panel</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 text-sm">
              {error.response?.data?.message || "Invalid email or password"}
            </p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="admin@panzerit.com"
              className={`w-full px-4 py-2.5 border rounded-lg text-sm outline-none transition
                focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                ${errors.email ? "border-red-400" : "border-gray-300"}`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className={`w-full px-4 py-2.5 border rounded-lg text-sm outline-none transition
                focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                ${errors.password ? "border-red-400" : "border-gray-300"}`}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Minimum 8 characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400
              text-white font-medium py-2.5 rounded-lg transition text-sm cursor-pointer"
          >
            {isPending ? "Signing in..." : "Sign In"}
          </button>

        </form>

        <p className="text-center text-xs text-gray-400 mt-6">
          Panzer IT Admin Panel — Restricted Access
        </p>
      </div>
    </div>
  );
}