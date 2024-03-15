import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="text-slate-50 bg-gradient-to-r from-primary to-gray-950 p-2 flex flex-row-reverse rounded-b-lg">
        <Link to={"/sign-in"}>
          <button className=" bg-gradient-to-r from-purple-700 via-blue-700 to-pink-700 py-3 px-5 mr-3 rounded-2xl text-slate-300 text-sm">
            Login
          </button>
        </Link>
        <ul className="flex gap-6 p-3 mr-7 text-sm">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "border-b-2 border-slate-500" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/find-ride"
              className={({ isActive }) =>
                isActive ? "border-b-2 border-slate-500" : ""
              }
            >
              Find Ride
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/share-ride"
              className={({ isActive }) =>
                isActive ? "border-b-2 border-slate-500" : ""
              }
            >
              Share Ride
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
