import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const Login = ({ adminType = "project" }) => {
  const { axios, setToken, navigate } = useAppContext();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focused, setFocused] = useState("");
  const [loading, setLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    const { data } = await axios.post("/api/admin/login", {
      email,
      password,
    });

    if (!data?.success) {
      toast.error(data?.message || "Login failed");
      return;
    }

    const token = data.token;

    localStorage.setItem("token", token);
    setToken(token);

    // Immediately attach token to Axios
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    setLoginSuccess(true);

    const savedRedirect = sessionStorage.getItem("adminRedirect");

    let redirectTo;

    if (location.state?.from) {
      redirectTo = location.state.from;
    } else if (savedRedirect) {
      redirectTo = savedRedirect;
    } else if (adminType === "lead") {
      redirectTo = "/lead-admin";
    } else {
      redirectTo = "/project-admin";
    }

    sessionStorage.removeItem("adminRedirect");

    setTimeout(() => {
      navigate(redirectTo);
    }, 1300);
  };
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f7f9fc] flex items-center justify-center px-4">
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient blobs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />

        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Floating particles */}
        <div className="absolute top-[20%] left-[15%] w-2 h-2 bg-primary/40 rounded-full animate-bounce" />

        <div className="absolute top-[70%] left-[25%] w-3 h-3 bg-purple-400/30 rounded-full animate-pulse" />

        <div className="absolute top-[30%] right-[18%] w-2 h-2 bg-primary/30 rounded-full animate-ping" />

        <div className="absolute bottom-[20%] right-[25%] w-3 h-3 bg-indigo-400/30 rounded-full animate-bounce" />
      </div>

      {/* ================= LOGIN CARD ================= */}

      <div
        className={`
          relative z-10
          w-full max-w-[430px]
          transition-all duration-1000
          ${
            loginSuccess
              ? "opacity-0 scale-75 translate-y-16"
              : "opacity-100 scale-100"
          }
        `}
      >
        {/* ================= 3D CHARACTER ================= */}

        <div
          className={`
            relative mx-auto w-[150px] h-[150px]
            mb-[-35px] z-20
            transition-all duration-700
            ${
              loginSuccess
                ? "translate-y-[330px] scale-[0.35] rotate-[8deg]"
                : "translate-y-0"
            }
          `}
        >
          {/* Character shadow */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-24 h-5 bg-black/10 rounded-full blur-md" />

          {/* Body */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[72px] h-[65px] bg-primary rounded-[35px_35px_20px_20px] shadow-xl">
            {/* Shirt highlight */}
            <div className="absolute top-2 left-3 w-5 h-10 bg-white/10 rounded-full blur-sm" />

            {/* Left arm */}
            <div
              className={`
                absolute -left-7 top-5
                w-9 h-12 bg-primary rounded-full
                origin-top-right
                transition-transform duration-500
                ${focused === "password" ? "-rotate-[35deg]" : "rotate-[8deg]"}
              `}
            />

            {/* Right arm */}
            <div
              className={`
                absolute -right-7 top-5
                w-9 h-12 bg-primary rounded-full
                origin-top-left
                transition-transform duration-500
                ${loginSuccess ? "rotate-[70deg]" : "rotate-[-8deg]"}
              `}
            />
          </div>

          {/* Neck */}
          <div className="absolute bottom-[62px] left-1/2 -translate-x-1/2 w-7 h-7 bg-[#e7a47e] rounded-md" />

          {/* Head */}
          <div
            className={`
              absolute top-8 left-1/2 -translate-x-1/2
              w-[72px] h-[70px]
              bg-[#f0b088]
              rounded-[45%_45%_48%_48%]
              shadow-lg
              transition-transform duration-500
              ${focused === "password" ? "rotate-[-4deg]" : ""}
            `}
          >
            {/* Hair */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-[76px] h-10 bg-[#222] rounded-[50%_50%_25%_25%]" />

            {/* Ears */}
            <div className="absolute top-8 -left-2 w-4 h-7 bg-[#e7a47e] rounded-full" />
            <div className="absolute top-8 -right-2 w-4 h-7 bg-[#e7a47e] rounded-full" />

            {/* Eyes */}
            <div className="absolute top-[33px] left-[17px] w-2 h-2 bg-gray-800 rounded-full" />
            <div className="absolute top-[33px] right-[17px] w-2 h-2 bg-gray-800 rounded-full" />

            {/* Nose */}
            <div className="absolute top-[38px] left-1/2 -translate-x-1/2 w-2 h-3 border-r border-[#d18b68]" />

            {/* Smile */}
            <div className="absolute top-[50px] left-1/2 -translate-x-1/2 w-5 h-2 border-b-2 border-gray-700 rounded-full" />
          </div>
        </div>

        {/* ================= CARD ================= */}

        <div
          className="
            relative
            bg-white/85
            backdrop-blur-xl
            border border-white
            rounded-[28px]
            shadow-[0_25px_70px_rgba(0,0,0,0.12)]
            px-7 sm:px-9
            pt-14 pb-8
            overflow-hidden
          "
        >
          {/* Card shine */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-primary/10 text-primary mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-5a2 2 0 00-2-2H6a2 2 0 00-2 2v5a2 2 0 002 2zm10-9V7a4 4 0 00-8 0v3h8z"
                />
              </svg>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Admin <span className="text-primary">Login</span>
            </h1>

            <p className="text-sm text-gray-500 mt-2">
              Welcome back! Enter your credentials to continue.
            </p>
          </div>

          {/* ================= FORM ================= */}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div className="group">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>

              <div
                className={`
                  flex items-center
                  rounded-xl
                  border
                  bg-gray-50/70
                  transition-all duration-300
                  ${
                    focused === "email"
                      ? "border-primary ring-4 ring-primary/10 bg-white shadow-sm"
                      : "border-gray-200"
                  }
                `}
              >
                <div className="pl-4 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0l-7.5-4.615a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>

                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused("")}
                  placeholder="admin@example.com"
                  className="
                    w-full
                    bg-transparent
                    outline-none
                    px-3 py-3.5
                    text-sm
                    text-gray-800
                    placeholder:text-gray-400
                  "
                />
              </div>
            </div>

            {/* Password */}
            <div className="group">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>

              <div
                className={`
                  flex items-center
                  rounded-xl
                  border
                  bg-gray-50/70
                  transition-all duration-300
                  ${
                    focused === "password"
                      ? "border-primary ring-4 ring-primary/10 bg-white shadow-sm"
                      : "border-gray-200"
                  }
                `}
              >
                <div className="pl-4 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 0h10.5a2.25 2.25 0 012.25 2.25v6a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25v-6A2.25 2.25 0 016 10.5z"
                    />
                  </svg>
                </div>

                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocused("password")}
                  onBlur={() => setFocused("")}
                  placeholder="Enter your password"
                  className="
                    w-full
                    bg-transparent
                    outline-none
                    px-3 py-3.5
                    text-sm
                    text-gray-800
                    placeholder:text-gray-400
                  "
                />
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="
                relative
                w-full
                overflow-hidden
                py-3.5
                rounded-xl
                bg-gray-900
                text-white
                font-semibold
                text-sm
                shadow-lg shadow-gray-900/20
                hover:bg-primary
                hover:shadow-primary/30
                active:scale-[0.98]
                disabled:opacity-70
                transition-all duration-300
                cursor-pointer
              "
            >
              <span className="absolute inset-0 -translate-x-full hover:animate-[shine_1.5s_ease-in-out]" />

              <span className="relative flex items-center justify-center gap-2">
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Authenticating...
                  </>
                ) : (
                  <>
                    Login to Dashboard
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </>
                )}
              </span>
            </button>
          </form>

          {/* Footer */}
          <div className="flex items-center justify-center gap-2 mt-7 text-xs text-gray-400">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
            Secure Admin Access
          </div>
        </div>

        {/* Bottom text */}
        <p className="text-center text-xs text-gray-400 mt-5">
          © {new Date().getFullYear()} Admin Dashboard
        </p>
      </div>

      {/* ================= SUCCESS TRANSITION ================= */}

      {loginSuccess && (
        <div className="fixed inset-0 z-[100] pointer-events-none">
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]" />

          <div
            className="
              absolute
              top-1/2 left-1/2
              -translate-x-1/2 -translate-y-1/2
              w-[300px] h-[300px]
              rounded-full
              border-[2px]
              border-primary/30
              animate-ping
            "
          />

          <div
            className="
              absolute
              top-1/2 left-1/2
              -translate-x-1/2 -translate-y-1/2
              w-[180px] h-[180px]
              rounded-full
              bg-primary/10
              blur-2xl
            "
          />
        </div>
      )}
    </div>
  );
};

export default Login;
