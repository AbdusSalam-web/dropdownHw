import { useState } from "react";

import "./App.css";
import Navbar from "./Component/Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-screen grid place-items-center bg-gradient-to-r from-sky-600 to-indigo-600">
        <Navbar />
      </div>
    </>
  );
}

export default App;
