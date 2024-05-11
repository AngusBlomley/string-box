import { signIn } from "next-auth/react";

function SignInButton() {
  return (
    <button className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline" onClick={() => signIn('google', { callbackUrl: '/' })}>Sign in with Google</button>
  );
}

export default SignInButton;
