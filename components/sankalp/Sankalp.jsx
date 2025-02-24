import React, { useRef } from "react";
import { motion } from "framer-motion";

const Sankalp2025 = () => {
  const eventSectionRef = useRef(null);
  const eventSectionRef1 = useRef(null);
  const scrollToEvents = () => {
    eventSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToEvents1 = () => {
    eventSectionRef1.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className=" w-screen bg-black text-white overflow-x-hidden relative ">
      <div
        className="flex flex-col items-center justify-center px-4 mt-auto mb-auto md:px-6 md:mt-[200px]"
        ref={eventSectionRef1}
      >
        <motion.img
          src="/components/header.png"
          alt="Sankalp 2025"
          className="w-96 mb-10 -mt-5 md:w-80  ml-auto mr-auto max-sm:mt-28"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        />

        <div className="text-center">
          <motion.h1
            className="text-3xl font-bold text-orange-500 md:text-4xl leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Code. <span className="text-red-500">Compete.</span>{" "}
            <span className="text-pink-500">Conquer.</span>
            <span className="ml-2">🚀</span>
          </motion.h1>

          <motion.p
            className="text-gray-300 mt-4 max-w-2xl text-sm md:text-base mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Club Excel brings tech and fun to Sankalp 2025! Join us for an
            electrifying experience of coding battles, tech challenges, and
            interactive events.
          </motion.p>
        </div>

        <div className="mb-7 flex justify-center items-center gap-4 w-full max-w-[90%] mx-auto flex-wrap sm:flex-nowrap">
          <motion.div
            className="w-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/components/sankalplogo.png"
              alt="Sankalp Logo"
              className="w-22 sm:w-24 md:w-32 lg:w-40"
            />
          </motion.div>

          <motion.div
            className="w-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="/components/clublogo.gif"
              alt="Club Logo"
              className="w-22 sm:w-24 md:w-32 lg:w-40"
            />
          </motion.div>

          <motion.div
            className="w-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img
              src="/components/udbhav.png"
              alt="Udbhav Logo"
              className="w-22 sm:w-24 md:w-32 lg:w-40"
            />
          </motion.div>
        </div>
      </div>

      <section className="px-4 md:px-8 ">
        <div
          className="flex flex-row justify-end mt-10
         mr-10  md:mt-60"
        >
          {/* <div>
            <img
              src="/components/udbhav.png"
              alt="Event Highlight"
              className="w-36 max-w-6xl"
            />
          </div>
          <div className="w-28 text-[10px] mt-6  ">
            Get ready for an electrifying blend of knowledge, culture, and
            entertainment – SANKALP 2025 is here to ignite your passion!..
          </div> */}
        </div>
        <div className="flex flex-row  gap-40  max-sm:flex-col max-sm:gap-1 ">
          <p className="text-[20px] font-extrabold md:text-6xl mt-12">
            <span style={{ color: "#f88e43" }}>SANKALP</span> 2025
          </p>
        </div>

        <h2 className="text-6xl font-bold md:text-8xl">
          <div className="w-full flex flex-row max-sm:flex-col">
            <span className="lg:text-[200px]">BIGGEST</span>
            <span style={{ color: "#F88E43" }} className="lg:text-[200px]">
              EVENT
            </span>
          </div>
        </h2>

        <div className="relative flex justify-center mt-12 w-full overflow-hidden">
          <img
            src="/components/bgimage.png"
            alt="Event Highlight"
            className="w-full max-w-6xl"
          />
          <div
            className="absolute bottom-6 left-6 text-white md:bottom-10 md:left-10"
            ref={eventSectionRef}
          >
            <motion.div
              className="text-left font-bold leading-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="block text-white text-3xl md:text-4xl tracking-wide">
                CLUB
              </span>
              <span
                className="block text-white text-9xl md:text-7xl  font-bold max-sm:text-6xl"
                style={{ letterSpacing: "-1px" }}
              >
                EXCEL
              </span>
            </motion.div>

            <p className="mt-2 max-w-md text-sm text-gray-300 md:text-base">
              Club Excel brings tech and fun to Sankalp 2025! Join us for an
              electrifying experience of coding battles, tech challenges, and
              interactive events.
            </p>
          </div>
        </div>
      </section>

      <div className="relative mt-12 px-6 md:mt-20 md:px-11">
        {/* Event Cards Section */}
        <section className="flex flex-col items-center gap-6 mt-10 px-4 md:flex-row md:px-8">
          {/* Event 1 */}
          <a
            href="/code-crusade-register"
            className="w-76 md:w-96 transition duration-300 hover:scale-105"
          >
            <div className="bg-[#f88e43] text-white p-4">
              <img
                src="/components/Group 16.png"
                alt="Event Highlight"
                className="w-56 max-w-6xl"
              />
              <p className="mt-2 text-sm md:text-base">
                It's a coding competition. Get ready to unleash your coding
                skills at Code Crusade 3.0
              </p>
              <img
                src="/components/students.png"
                alt="Event 1"
                className="mt-4 w-full"
              />
              <p className="text-sm mt-2 font-extrabold text-white">
                <span className="text-lg text-black-400 tracking-widest">
                  28 FEB 2025
                </span>{" "}
                &nbsp;
                <span className="text-xl font-extrabold text-orange-700 underline hover:text-orange-900 transition duration-300">
                  REGISTER
                </span>
              </p>
            </div>
          </a>

          {/* Event 2 */}
          <a
            href="/showdown"
            className="w-76 md:w-96 transition duration-300 hover:scale-105"
          >
            <div className="bg-gray-200 text-black p-4">
              <h2 className="text-black uppercase tracking-tight leading-none">
                <span className="text-[50px] md:text-[40px] font-bold block">
                  CTRL + WIN
                </span>
                <span className="text-[50px] font-extrabold block">
                  SHOWDOWN
                </span>
              </h2>
              <p className="mt-2 text-sm md:text-base">
                It's a coding competition. Get ready to unleash your coding
                skills at Code Crusade 3.0
              </p>
              <img
                src="/components/newstud.jpg"
                alt="Event 2"
                className="mt-4 w-full"
              />
              <p className="text-sm mt-2 font-extrabold text-black">
                <span className="text-lg text-blue-600 tracking-widest">
                  1 MAR 2025
                </span>{" "}
                &nbsp;
                <span className="text-xl font-extrabold text-red-600 underline hover:text-red-500 transition duration-300">
                  REGISTER
                </span>
              </p>
            </div>
          </a>
        </section>

        {/* Interested Button & Heading */}
        <div className="relative flex flex-col md:flex-row justify-center md:justify-end items-center mt-10 gap-10">
          <button
            className=" border border-[#CBA690] text-[#CBA690] px-6 py-1 text-base font-semibold md:px-6 md:py-2 md:text-lg 
       flex justify-center items-center"
            onClick={scrollToEvents}
          >
            INTERESTED ?
          </button>

          {/* OUR EVENTS Heading */}
          <motion.h2
            className="text-[50px] md:text-[100px] font-extrabold uppercase tracking-tight leading-none text-center md:text-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            OUR EVENTS
          </motion.h2>
        </div>
      </div>

      <section className="flex flex-col justify-center items-center mt-10 px-8">
        <div>
          <img
            src="/components/image.png"
            alt="Event Highlight"
            className="h-[349px] w-[1550px] rounded aspect-3/2"
          />
        </div>
        <div className="flex justify-between w-full py-3">
          <div className="">
            <div className="flex items-center w-200px">
              <img
                src="/components/Arrow 3 (1).svg"
                alt=""
                className="w-[10px] mx-[10px] md:py-2"
              />
              <p className="text-[#CBA690] text-[10px] md:text-xl">
                28 FEB 2025
              </p>
              <div className="px-5">
                <button
                  className="border border-[#CBA690] text-[#CBA690] text-[10px] bg-none font-semibold px-6 md:px-6 md:py-2 md:text-[80px]"
                  onClick={scrollToEvents1}
                >
                  <p className="text-[10px] ">INTERESTED?</p>
                </button>
              </div>
            </div>
            <img
              src="/components/EXCEL-LOGO 2 (2).svg"
              alt=""
              className="w-[50px]"
            />
          </div>
          <div className="p-5 gap-4">
            <img src="/components/Group 12.svg" alt="" className="w-[120px]" />
            <img src="/components/Group 9.svg" alt="" className="w-[120px]" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sankalp2025;
