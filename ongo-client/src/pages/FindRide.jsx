import NavBar from "@/components/nav/Navbar";
import { DatePicker } from "@/components/ui/DatePicker";
import { FaAddressCard } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { IoTimerOutline } from "react-icons/io5";
import { LiaTruckPickupSolid } from "react-icons/lia";
import { PiArmchair } from "react-icons/pi";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { TimeBox } from "@/components/ui/TimeBox";

const ShareRide = () => {
  return (
    <>
      <NavBar />
      <div className="flex items-center gap-48">
        <div>
          <div className=" flex items-center text-slate-50 mx-16 my-6">
            <h1 className=" flex gap-4 text-2xl">
              <FaAddressCard className=" text-slate-300 text-3xl" />
              Find Ride
            </h1>
          </div>
          <div className=" text-slate-50">
            <form action="#" method="post">
              {/* <div className="mx-7 my-5">
            <label className="mr-7">
              <FaLocationDot className=" inline-block mx-2" /> Location{" "}
            </label>
            {/* <input type="text" name="" id="" className=" text-slate-950" /> */}
              {/* </div>  */}

              <div className="mx-7 my-5">
                <label className="mr-7">
                  <MdOutlineDateRange className=" inline-block mx-2" /> Date{" "}
                </label>
                <DatePicker />
              </div>
              <div className="mx-7 my-5">
                <label className="mr-7">
                  <IoTimerOutline className=" inline-block mx-2" /> Time{" "}
                </label>
                {/* <input
              type="text"
              className=" text-gray-950 p-2 rounded-lg bg-slate-100 w-52 space-x-5"
              value={`${hours}:${minutes.toString().padStart(2, "0")}`}
              readOnly
            /> */}
                <TimeBox />
              </div>
              <div className="mx-7 my-5">
                <label className="mr-7">
                  <LiaTruckPickupSolid className=" inline-block mx-2" />
                  Start{" "}
                </label>
                <div className=" inline-block">
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Start Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Start Location</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="mx-7 my-5">
                <label className="mr-7">
                  <LiaTruckPickupSolid className=" inline-block mx-2 text" />
                  End{" "}
                </label>
                <div className=" inline-block">
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="End Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>End Location</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="mx-7 my-5">
                <label className="mr-7">
                  <PiArmchair className=" inline-block mx-2 text" />
                  Seats{" "}
                </label>
                <div className=" inline-block">
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="no. seats" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>no. seats</SelectLabel>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <button
                type="submit"
                className="m-1 px-3 py-2 mb-4 rounded-lg bg-slate-600 text-black hover:bg-slate-800 hover:border-[1px] hover:border-slate-500 hover:text-white mx-7"
              >
                Register
              </button>
            </form>
          </div>
        </div>
        <img
          src="../../image/driver_details.png"
          alt="image"
          className=" w-[600px] h-[500px]"
        />
      </div>
    </>
  );
};

export default ShareRide;
