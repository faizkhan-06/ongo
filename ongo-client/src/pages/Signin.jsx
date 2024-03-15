const Signin = () => {
  return (
    <>
      <div className=" text-slate-50 flex justify-center items-center h-screen">
        <form action="#" method="get">
          <div>
            <div>
              <span className=" block text-sm px-2 py-1">Email</span>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className=" bg-gray-900 hover:border-[0.5px] p-3 rounded-xl"
                required
              />
            </div>
            <div className=" mt-5">
              <span className=" block text-sm px-2 py-1">Password</span>
              <input
                name="password"
                type="password"
                placeholder="Password"
                className=" bg-gray-900 hover:border-[0.5px] p-3 rounded-xl"
                required
              />
            </div>
            <div className=" mt-5">
              <button
                type="submit"
                className="m-1 px-3 py-2 mb-4 rounded-lg bg-slate-500 text-black hover:bg-slate-600 "
              >
                Login
              </button>
            </div>
            <span className=" text-sm text-gray-400">
              If you don't have an account yet, please sign up here.
            </span>
          </div>
        </form>
      </div>
    </>
  );
};
export default Signin;
