import "./index.css";
import AudenLogo from "./img/auden-logo.png";
import chair from "./img/chair.png";
import myImage from "./img/myImage.jpg";
import paskel from "./img/paskel.jpg";
import headfon from "./img/pink_green_headphone.jpg";

import { IoSearch } from "react-icons/io5";
import { FaSun } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";

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
      <container className="container mx-auto flex justify-center mt-5">
        <div className=" flex  basis-1/2 flex-col ">
          <div className="flex gap-3 items-center">
            <a href="#" className="border rounded px-2">
              Mindset
            </a>
            <a href="#" className="border rounded px-2 bg-yellow-300">
              members
            </a>
            <CiStar className="size-5 text-yellow-500" />
          </div>
          <div>
            <p className="text-4xl font-extrabold mt-5">
              Working from home can make people more productive
            </p>
          </div>
          <div>
            <div className="flex gap-5 items-center pt-7">
              <img
                src={myImage}
                alt="myImage"
                className="rounded-full bg-cover  size-14 border-4 border-yellow-300"
              />
              <p>
                Aram A.Ahmad <br />
                January 27,2024
              </p>
            </div>
          </div>
        </div>
        <div className="border flex basis-1/2 justify-center bg-regal-pink  rounded ">
          <img
            src={chair}
            alt="Gray-Chair"
            className="h-96 transition-all hover:scale-125 hover:duration-1000 ease-in-out"
          />
        </div>
      </container>

      {/* #################################### CARD SECTION ####################################### */}

      <container className="flex container mx-auto flex  gap-5 mt-20 ">
        <div className="">
          <img src={paskel} alt="byscil image" className="rounded"/>
        </div>
        <div>
          <img src={headfon} alt="pin headfon" className="rounded"/>
        </div>
        <div>
          <p>Auden</p>
          <p>
            Auden is a modern amagazin styel ghost theme with dark and light
            them and membership support
          </p>
          <div>
          <SlSocialFacebook />
          <FaXTwitter />
          <FaInstagram />
          <FiLinkedin />
          </div>
        </div>
      </container>
    </>
  );
}

export default App;
