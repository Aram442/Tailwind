import "./index.css";
import AudenLogo from "./img/auden-logo.png";
import chair from "./img/chair.png";
import myImage from "./img/myImage.jpg";
import paskel from "./img/paskel.jpg";
import headfon from "./img/pink_green_headphone.jpg";
import kawan from "./img/kawan.jpg";
import hewr from "./img/hewr.jpg";
import controller from "./img/yellow_controller.jpg";
import hand from "./img/pink_hand.jpg";

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
          <img src={paskel} alt="byscil image" className="rounded " />
          <button className="border border-green-600 font-bold text-sm text-green-600 px-2 rounded mt-5">
            Science
          </button>
          <p className="text-3xl font-bold mt-5">
            5 ways an electic bike will change your life
          </p>
          <div className="flex gap-5 items-center pt-7">
            <img
              src={hewr}
              alt="myImage"
              className="rounded-full bg-cover  size-14 border-4 border-yellow-300"
            />
            <p>
              Hewr Srud <br />
              January 27,2024
            </p>
          </div>
        </div>
        <div>
          <img src={headfon} alt="pin headfon" className="rounded" />
          <button className="border border-green-600 font-bold text-sm text-green-600 px-2 rounded mt-5">
            Mindset
          </button>
          <p className="text-3xl font-bold mt-5">
            Even the greates can be improved upon
          </p>
          <div className="flex gap-5 items-center pt-5">
            <img
              src={kawan}
              alt="myImage"
              className="rounded-full bg-cover  size-14 border-4 border-yellow-300"
            />
            <p>
              Kawan Idrees <br />
              January 11,2024
            </p>
          </div>
        </div>

        <div className="flex flex-col py-5 items-center bg-slate-200 h-1/3 rounded ">
          <p className="font-bold text-2xl  underline decoration-wavy">Auden</p>
          <p className="text-center pt-5">
            Auden is a modern amagazin styel ghost theme with dark and light
            them and membership support
          </p>
          <div className="flex gap-3 mt-5 ">
            <SlSocialFacebook className="text-2xl" />
            <FaXTwitter className="text-2xl" />
            <FaInstagram className="text-2xl" />
            <FiLinkedin className="text-2xl" />
          </div>
        </div>
      </container>

      {/* #################################### CARD SECTION 2 ####################################### */}

      <container className="flex container mx-auto flex  gap-5 mt-20 ">
        <div className="">
          <img src={controller} alt="controller image" className="rounded " />
          <button className="border border-green-600 font-bold text-sm text-green-600 px-2 rounded mt-5">
            Technology
          </button>
          <p className="text-3xl font-bold mt-5">
            PS5 vs Xbox seriex X - how differenc are they?
          </p>
          <div className="flex gap-5 items-center pt-7">
            <img
              src={hewr}
              alt="myImage"
              className="rounded-full bg-cover  size-14 border-4 border-yellow-300"
            />
            <p>
              Hewr Srud <br />
              January 27,2024
            </p>
          </div>
        </div>
        <div>
          <img src={hand} alt="hand image" className="rounded" />
          <button className="border border-green-600 font-bold text-sm text-green-600 px-2 rounded mt-5">
            Mindset
          </button>
          <p className="text-3xl font-bold mt-5">
            You should stop worrying about robots taking your job
          </p>
          <div className="flex gap-5 items-center pt-5">
            <img
              src={kawan}
              alt="myImage"
              className="rounded-full bg-cover  size-14 border-4 border-yellow-300"
            />
            <p>
              Kawan Idrees <br />
              January 11,2024
            </p>
          </div>
        </div>

        <div className="flex flex-col py-5 items-center bg-slate-200 h-1/3 rounded ">
          <p className="font-bold text-2xl  underline decoration-wavy">Auden</p>
          <p className="text-center pt-5">
            Auden is a modern amagazin styel ghost theme with dark and light
            them and membership support
          </p>
          <div className="flex gap-3 mt-5 ">
            <SlSocialFacebook className="text-2xl" />
            <FaXTwitter className="text-2xl" />
            <FaInstagram className="text-2xl" />
            <FiLinkedin className="text-2xl" />
          </div>
        </div>
      </container>
    </>
  );
}

export default App;
