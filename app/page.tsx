import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <div className="bg-dark-gray-custom w-full min-h-screen flex flex-col gap-10 items-center justify-center">
            <div>
                <Image src='https://central.crestinfosystems.net/static/media/cs-logo-white.f0744d7624bb7e4982eef210b5bf94ff.svg' width={200} height={100} alt="Compnay Logo" />
            </div>
            <div className="bg-white w-[28rem] h-[29rem] rounded-2xl flex flex-col justify-evenly z-10">
                <div className="flex flex-col items-center gap-3 mt-5">
                    <span className="font-semibold">Sign In</span>
                    <span>Enter your details to sign in to your account.</span>
                </div>
                <div className="flex flex-col w-full gap-3 p-8">
                    <span className="flex flex-col">
                        <label className="font-semibold text-sm">Email Id<sup className="text-red-500">*</sup></label>
                        <input className="h-10 p-3 font-normal text-sm cursor-pointer border-[0.1rem] rounded-md hover:border-black" type="text" placeholder="Enter Email"></input>
                    </span>
                    <span className="flex flex-col">
                        <label className="font-semibold text-sm">Password<sup className="text-red-500">*</sup></label>
                        <input className="h-10 p-3 font-normal text-sm cursor-pointer border-[0.1rem] rounded-md hover:border-black" type="text" placeholder="Enter Password"></input>
                    </span>
                    <Link className="flex justify-end cursor-pointer" href='/forgotpassword'><u>Forgot Password?</u></Link>
                </div>
                <div className="flex items-center ml-10 gap-3">
                    <input className="cursor-pointer w-4 h-4 text-green-color" type="checkbox"></input>
                    <label>Remember Me</label>
                </div>
                <div className="flex justify-center bg-dark-gray-custom m-8 p-2 rounded-lg">
                    <button className="text-white" type="button">
                        Sign In
                    </button>
                </div>
            </div>
            <div className="top-0 left-0 absolute -ml-48 -z-1">
                <Image src='https://central.crestinfosystems.net/static/media/Big-Ellipse.3552c24569f68c06e020.png' width={700} height={100} alt="Big Pattern Background" />
            </div>
            <div className="bottom-0 right-0 absolute -z-1">
                <Image src='https://central.crestinfosystems.net/static/media/Small-Ellipse.5425f613507c37ede944.png' width={400} height={100} alt="Small Pattern Background" />
            </div>
        </div>
    );
}