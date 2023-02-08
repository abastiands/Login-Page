import Footer from "../../../Layouts/Footer";
import googleIcon from "../../../Assets/Images/google.png";
import { Link } from "react-router-dom";

const MainLeft = () => {
    return (
        <div className="MainLeft bg-white w-full h-full flex justify-center items-center relative rounded-l-xl">
            <div className="wrapper w-2/3">
                <div className="title mb-1.5">
                    <h1 className="font-bold text-lg lg:text-2xl">Welcome</h1>
                </div>
                <div className="description mb-1.5">
                    <p className="text-gray-400 text-xs lg:text-sm">Please enter your details</p>
                </div>
                <form>
                    <div className="formGroup mb-1.5">
                        <label className="block mb-1 text-xs lg:text-base" htmlFor="email">
                            Email
                        </label>
                        <input
                            type={"email"}
                            name="email"
                            id="email"
                            className="w-full text-gray-500 border border-gray-500 placeholder-gray-300 rounded-md py-1 px-2 focus:bg-gray-100 focus:outline-gray-500 focus:duration-500 text-xs lg:text-base"
                            placeholder="Enter your email..."
                        />
                    </div>
                    <div className="formGroup mb-1.5">
                        <label className="block mb-1 text-xs lg:text-base" htmlFor="password">
                            Password
                        </label>
                        <input
                            type={"password"}
                            name="password"
                            id="password"
                            className="w-full text-gray-500 border border-gray-400 placeholder-gray-300 rounded-md py-1 px-2 focus:bg-gray-100 focus:outline-gray-500 focus:duration-500 text-xs lg:text-base"
                            placeholder="Enter your password..."
                        />
                    </div>
                    <div className="formGroup lg:grid lg:grid-cols-2 mb-1.5 block">
                        <div className="formLeft block mb-1 lg:mb-0">
                            <input className="mr-1" type={"checkbox"} id="rememberMe" />
                            <label className="lg:text-sm text-xs" htmlFor="rememberMe">Remember Me</label>
                        </div>
                        <div className="formRight block mb-1 lg:0 lg:text-right">
                            <Link to="/" className="lg:text-sm lg:py-0.5 text-blue-400 hover:text-blue-800 hover:duration-500 text-left text-xs">Forget password</Link>
                        </div>
                    </div>
                    <div className="formButton mb-1.5">
                        <button className="w-full lg:text-base bg-teal-300 text-white py-1 rounded-md border-none outline-none hover:bg-teal-400 hover:duration-500 text-sm">Sign in</button>
                    </div>
                </form >
                <p className="w-full text-center text-sm mb-1.5">OR</p>
                <div className="loginGoogle mb-1.5">
                    <button className="w-full flex justify-center items-center py-1 border rounded bg-none outline-none border-gray-400 hover:bg-gray-100 hover:duration-500"><img className="w-4 lg:w-4 lg:mr-2 inline-block mr-1" src={googleIcon} alt="Google Icon" /> <span className="lg:text-sm text-gray-400 text-[8px] ">Sign in with Google</span></button>
                </div>
                <p className="w-full text-center lg:text-sm text-gray-400 text-xs">Don't have an accout? <Link to="/" className="text-blue-400 hover:text-blue-800 hover:duration-500 ">Sign Up</Link></p>
            </div >
            <Footer />
        </div >
    );
};

export default MainLeft;
