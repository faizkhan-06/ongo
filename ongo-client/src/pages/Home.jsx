import NavBar from "@/components/nav/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <NavBar />
      <section className=" h-[90vh] flex items-center justify-center">
        <div className=" flex items-center justify-center">
          <img
            src="../../image/home_img.png"
            alt="car image"
            className=" w-4/5 mt-10 mx-9"
          />
          <div className=" w-full flex flex-col items-center justify-center">
            <span className=" text-4x bg-grade bg-gradient-to-r from-purple-700 via-blue-700 to-pink-700 text-transparent bg-clip-text text-8xl">
              OnGo
            </span>
            <span className=" text-slate-500 text-2xl pt-1">
              Your Ride, Your Way
            </span>
          </div>
        </div>
      </section>
      <section className=" h-[800px] bg-gradient-to-b from-gray-950 to-zinc-800">
        <div className=" flex flex-col m-7">
          <span className=" text-slate-200 my-5 max-w-86 text-xl mx-auto">
            Tired of waiting for unreliable taxis or crowded buses?
          </span>
          <span className=" text-slate-400 max-w-86 text-left leading-6 mx-auto">
            OnGo connects you with friendly, local drivers in minutes, getting
            you to your destination quickly and conveniently.
          </span>
        </div>
        <div className="">
          <div className=" flex gap-16 mx-28 my-10 mt-24">
            <div className="">
              <img
                src="../../image/find_ride.png"
                alt="find ride image"
                className=" h-64"
              />
            </div>
            <div className=" text-slate-50 my-auto">
              <span className=" inline-block text-3xl mb-4">Find ride</span>
              <span className=" w-[30vw] flex justify-center items-center leading-7 text-slate-400">
                Enter your departure location, destination, and travel dates to
                view a list of available rides along your route.
              </span>
              <Link to={"/find-ride"}>
                <button className=" bg-gradient-to-r from-purple-700 via-blue-700 to-pink-700 py-3 px-5 mr-3 rounded-2xl text-slate-300 text-sm mt-3">
                  click here
                </button>
              </Link>
            </div>
          </div>
          <div className=" flex gap-16 mx-28 my-10">
            <div className=" flex">
              <img
                src="../../image/share_ride.png"
                alt="find ride image"
                className=" h-64"
              />
            </div>
            <div className=" text-slate-50 my-auto">
              <span className=" inline-block text-3xl mb-4">Share ride</span>
              <span className=" w-[30vw] flex justify-center items-center leading-7 text-slate-400">
                Share details about your trip including the date, time, starting
                point, destination, and any preferences you may have.
              </span>
              <Link to={"/share-ride"}>
                <button className=" bg-gradient-to-r from-purple-700 via-blue-700 to-pink-700 py-3 px-5 mr-3 rounded-2xl text-slate-300 text-sm mt-3">
                  click here
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
