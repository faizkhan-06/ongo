const NavBar = () => {
  return (
    <>
      <div className=" text-slate-50  bg-gradient-to-r from-primary to-gray-950  p-2 flex flex-row-reverse rounded-b-lg  ">
        <ul className=" flex gap-6 p-3 mr-7 text-sm">
          <li>Home</li>
          <li>Find Ride</li>
          <li>Share Ride</li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
