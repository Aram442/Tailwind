import "./index.css";
import AudenLogo from "./img/auden-logo.png";

import { IoSearch } from "react-icons/io5";
import { FaSun } from "react-icons/fa";

function App() {
  return (
    <>
      <container className="container mx-auto flex mt-5">
        <div className="flex basis-1/3 gap-3  items-center ">
          <IoSearch className="size-6 hover:text-red-400" />
          <FaSun className="size-6 hover:text-red-400" />
        </div>
        <div className="flex basis-1/3  justify-center">
          <img src={AudenLogo} alt="Auden Logo" className="h-10 " />
        </div>
        <div className="flex basis-1/3  justify-end gap-4 items-center ">
          <a href="#" className="text-xl font-bold hover:text-red-400">
            Log in
          </a>
          <a
            href="#"
            className="bg-red-600  rounded-full px-5 py-1 font-bold text-white hover:bg-red-500"
          >
            Subsriber
          </a>
        </div>
      </container>
      <container className="container mx-auto flex justify-center mt-5">
        <div className="flex gap-5 hover:">
          <a
            href="#"
            className="text-lg font-medium transition hover:border-b hover:border-red-600 hover:duration-500"
          >
            Home Pages
          </a>
          <a
            href="#"
            className="text-lg font-medium transition hover:border-b hover:border-red-600 hover:duration-500"
          >
            Style Guide
          </a>
          <a
            href="#"
            className="text-lg font-medium transition hover:border-b hover:border-red-600 hover:duration-500"
          >
            Custom Posts
          </a>
          <a
            href="#"
            className="text-lg font-medium transition hover:border-b hover:border-red-600 hover:duration-500"
          >
            Tags
          </a>
          <a
            href="#"
            className="text-lg font-medium transition hover:border-b hover:border-red-600 hover:duration-500"
          >
            Customizaiton
          </a>
          <a
            href="#"
            className="text-lg font-medium transition hover:border-b hover:border-red-600 hover:duration-500"
          >
            Contact
          </a>
          <button>...</button>
        </div>
      </container>
    </>
  );
}

export default App;
