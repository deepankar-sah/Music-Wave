"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      router.push("/"); // Redirect to /home
    }
  }, [router]);

  return (
    <main className="p-10 text-center">
      <form className="p-8 bg-[#1f1f2e] rounded-lg shadow-md space-y-4 w-[300px]">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full px-3 py-2 rounded bg-gray-800 text-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-3 py-2 rounded bg-gray-800 text-white"
        />
        <button className="w-full bg-orange-400 hover:bg-orange-500 text-black py-2 rounded">
          Login
        </button>
      </form>
    </main>
  );
}
