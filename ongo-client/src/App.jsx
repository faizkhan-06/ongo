import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import ShareRide from "./pages/ShareRide";
import FindRide from "./pages/FindRide";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/share-ride" element={<ShareRide />} />
          <Route path="/find-ride" element={<FindRide />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
