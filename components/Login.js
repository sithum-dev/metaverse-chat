import Head from "next/head";
import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();
  return (
    <>
      <Head>
        <title>Metaverse Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-black relative text-white">
        {/* Login Form */}
        <div className="flex absolute z-50 items-center h-4/6 w-full justify-center">
          <button
            className="bg-slate-800 p-5 font-mono font-bold rounded-3xl"
            onClick={authenticate}
          >
            Login to the Metaverse
          </button>
        </div>

        {/* BG */}
        <div className="w-full h-screen">
          <Image src="/images/bg.jpeg" layout="fill" objectFit="cover" />
        </div>
      </div>
    </>
  );
}

export default Login;
