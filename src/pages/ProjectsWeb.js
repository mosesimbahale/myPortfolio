import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

import { BiStar } from "react-icons/bi";
import { BsCodeSlash } from "react-icons/bs";


import { FaGithub } from "react-icons/fa";

const Projects = () => {



  return (

    <>



    <div className="bg-gray-800 pt-3">

      <div className="">
        {/* Code block starts */}
        <div className="py-4 container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between pb-4 border-b border-gray-600  ">
          <div>
            <h4 className="text-2xl font-bold leading-tight text-indigo-500 dark:text-gray-100">
              Web Projects
            </h4>
            <ul className="flex flex-col md:flex-row items-start md:items-center text-gray-200 dark:text-gray-200 text-sm mt-3">
              <li className="flex items-center mr-4">
                <div className="mr-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-paperclip"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9 l6.5 -6.5" />
                  </svg>
                </div>
                <span>In progress</span>
              </li>
              <li className="flex items-center mr-4 mt-4 md:mt-0">
                <div className="mr-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-trending-up"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="3 17 9 11 13 15 21 7" />
                    <polyline points="14 7 21 7 21 14" />
                  </svg>
                </div>
                <span> Latest</span>
              </li>
              <li className="flex items-center mt-4 md:mt-0">
                <div className="mr-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-plane-departure"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path
                      d="M15 12h5a2 2 0 0 1 0 4h-15l-3 -6h3l2 2h3l-2 -7h3z"
                      transform="rotate(-15 12 12) translate(0 -1)"
                    />
                    <line x1={3} y1={21} x2={21} y2={21} />
                  </svg>
                </div>
                <span>Completed</span>
              </li>
            </ul>
          </div>
          <div className="mt-6 md:mt-0">

            <Link to="/">
              <button className="border border-red-500 m-3 bg-gray-700 dark:bg-gray-700 focus:outline-none transition duration-150 ease-in-out rounded hover:bg-gray-900 text-white dark:hover:bg-gray-700 dark:text-white px-5 py-2 text-sm ">
                back to Profile
              </button>
            </Link>

            <Link to="/projects" className="">
              <button className="border border-indigo-500 m-3 bg-gray-700 dark:bg-gray-700 focus:outline-none transition duration-150 ease-in-out rounded hover:bg-gray-900 text-white dark:hover:bg-gray-700 dark:text-white px-5 py-2 text-sm ">
                All projects
              </button>
            </Link>


            <Link to="/ProjectsMobile">
              <button className="border border-indigo-500  m-3 bg-gray-700 dark:bg-gray-700 focus:outline-none transition duration-150 ease-in-out rounded hover:bg-gray-900 text-white dark:hover:bg-gray-700 dark:text-white px-5 py-2 text-sm">
                Mobile projects
              </button>
            </Link>

            <Link to="/ProjectsDS">
              <button className="border border-indigo-500  m-3 bg-gray-700 dark:bg-gray-700 focus:outline-none transition duration-150 ease-in-out rounded hover:bg-gray-900 text-white dark:hover:bg-gray-700 dark:text-white px-5 py-2 text-sm">
                Data Science Projects
              </button>
            </Link>

            <Link to="/ProjectsML">
              <button className="border border-indigo-500  m-3 bg-gray-700 dark:bg-gray-700 focus:outline-none transition duration-150 ease-in-out rounded hover:bg-gray-900 text-white dark:hover:bg-gray-700 dark:text-white px-5 py-2 text-sm">
                ML Integration projects
              </button>
            </Link>

            <Link to="/ProjectsWeb">
              <button className="border-b-4 border-white  m-3 bg-indigo-500 dark:bg-indigo-500 focus:outline-none transition duration-150 ease-in-out rounded hover:bg-indigo-400 text-white dark:hover:bg-indigo-400 dark:text-white px-5 py-2 text-sm">
                Web Projects
              </button>
            </Link>


          </div>
          {/* Code block ends */}
        </div>
      </div>































      <div className="py-8 px-10 w-full ">




        <div className="lg:flex items-center justify-center w-full">

          <div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-gray-800 p-6 border border-gray-600 text-white rounded shadow-lg">
            <div className="flex items-center border-b border-indigo-500 mb-6">
              <BsCodeSlash size="50" color="brown" />
              <div className="flex items-start justify-between w-full">
                <div className="pl-3 w-full">
                  <p className="text-xl font-bold leading-5 ">
                    SmartP.A
                  </p>
                  <p className="text-xs leading-normal pt-2 text-gray-400">
                    Web application for managing your daily tasks and routines.
                  </p>
                </div>
                <BiStar size="30px" color="" />
              </div>
            </div>

            <div className="px-2">
              <h2 className="font-medium">Descriprion</h2>
              <p className="text-sm leading-5 py-4 text-gray-300">
                A group of people interested in dogecoin, the currency and a bit
                of side for the meme and dof that we all know and love. These
                cases are perfectly simple and easy to distinguish.
              </p>
            </div>

            <div className="px-2">
              <h2 className="font-medium">Specs</h2>
              <p className="text-sm leading-5 py-4 text-gray-300">
                A group of people interested in dogecoin, the currency and a bit
                of side for the meme and dof that we all know and love. These
                cases are perfectly simple and easy to distinguish.
              </p>
              <p className="text-sm leading-5 py-4 text-gray-300">
                A group of people interested in dogecoin, the currency and a bit
                of side for the meme and dof that we all know and love. These
                cases are perfectly simple and easy to distinguish.
              </p>

              <div className="flex flex-wrap">
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #React
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #Tailwind
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #Firebase
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #nano encryption
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #React
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #Tailwind
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #Firebase
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #nano encryption
                </div>
              </div>

              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  class=" inline-block px-6 py-2.5 bg-gray-700 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                >
                  <div className="flex  flex-row"><FaGithub size="12px" /> Sourcecode</div>
                </button>



                <button
                  type="button"
                  class=" inline-block px-6 py-2.5 bg-gray-700 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Demo
                </button>

              </div>
            </div>
          </div>











          <div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-gray-800 p-6 border border-gray-600 text-white rounded shadow-lg">
            <div className="flex items-center border-b border-indigo-500 mb-6">
              <BsCodeSlash size="50" color="brown" />
              <div className="flex items-start justify-between w-full">
                <div className="pl-3 w-full">
                  <p className="text-xl font-bold leading-5 ">
                    BLOG
                  </p>
                  <p className="text-xs leading-normal pt-2 text-gray-400">
                    Web application for managing your daily tasks and routines.
                  </p>
                </div>
                <BiStar size="30px" />
              </div>
            </div>

            <div className="px-2">
              <h2 className="font-medium">Descriprion</h2>
              <p className="text-sm leading-5 py-4 text-gray-300">
                A group of people interested in dogecoin, the currency and a bit
                of side for the meme and dof that we all know and love. These
                cases are perfectly simple and easy to distinguish.
              </p>
            </div>

            <div className="px-2">
              <h2 className="font-medium">Specs</h2>
              <p className="text-sm leading-5 py-4 text-gray-300">
                A group of people interested in dogecoin, the currency and a bit
                of side for the meme and dof that we all know and love. These
                cases are perfectly simple and easy to distinguish.
              </p>
              <p className="text-sm leading-5 py-4 text-gray-300">
                A group of people interested in dogecoin, the currency and a bit
                of side for the meme and dof that we all know and love. These
                cases are perfectly simple and easy to distinguish.
              </p>

              <div className="flex flex-wrap">
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #React
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #Tailwind
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #Firebase
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #nano encryption
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #React
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #Tailwind
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #Firebase
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #nano encryption
                </div>
              </div>

              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  class=" inline-block px-6 py-2.5 bg-gray-700 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                >
                  <div className="flex  flex-row"><FaGithub size="12px" /> Sourcecode</div>
                </button>


                <button
                  type="button"
                  class=" inline-block px-6 py-2.5 bg-gray-700 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Demo
                </button>

              </div>
            </div>
          </div>



        </div>









      </div>





      <div className="py-8 px-10 w-full ">




        <div className="lg:flex items-center justify-center w-full">

          <div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-gray-800 p-6 border border-gray-600 text-white rounded shadow-lg">
            <div className="flex items-center border-b border-indigo-500 mb-6">
              <BsCodeSlash size="50" color="brown" />
              <div className="flex items-start justify-between w-full">
                <div className="pl-3 w-full">
                  <p className="text-xl font-bold leading-5 ">
                    AUCTIONS
                  </p>
                  <p className="text-xs leading-normal pt-2 text-gray-400">
                    Web application for managing your daily tasks and routines.
                  </p>
                </div>
                <BiStar size="30px" color="" />
              </div>
            </div>

            <div className="px-2">
              <h2 className="font-medium">Descriprion</h2>
              <p className="text-sm leading-5 py-4 text-gray-300">
                A group of people interested in dogecoin, the currency and a bit
                of side for the meme and dof that we all know and love. These
                cases are perfectly simple and easy to distinguish.
              </p>
            </div>

            <div className="px-2">
              <h2 className="font-medium">Specs</h2>
              <p className="text-sm leading-5 py-4 text-gray-300">
                A group of people interested in dogecoin, the currency and a bit
                of side for the meme and dof that we all know and love. These
                cases are perfectly simple and easy to distinguish.
              </p>
              <p className="text-sm leading-5 py-4 text-gray-300">
                A group of people interested in dogecoin, the currency and a bit
                of side for the meme and dof that we all know and love. These
                cases are perfectly simple and easy to distinguish.
              </p>

              <div className="flex flex-wrap">
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #React
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #Tailwind
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #Firebase
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #nano encryption
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #React
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #Tailwind
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #Firebase
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #nano encryption
                </div>
              </div>

              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  class=" inline-block px-6 py-2.5 bg-gray-700 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                >
                  <div className="flex  flex-row"><FaGithub size="12px" /> Sourcecode</div>
                </button>


                <button
                  type="button"
                  class=" inline-block px-6 py-2.5 bg-gray-700 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Demo
                </button>

              </div>
            </div>
          </div>











          <div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-gray-800 p-6 border border-gray-600 text-white rounded shadow-lg">
            <div className="flex items-center border-b border-indigo-500 mb-6">
              <BsCodeSlash size="50" color="brown" />
              <div className="flex items-start justify-between w-full">
                <div className="pl-3 w-full">
                  <p className="text-xl font-bold leading-5 ">
                    MATT
                  </p>
                  <p className="text-xs leading-normal pt-2 text-gray-400">
                    Web application for managing your daily tasks and routines.
                  </p>
                </div>
                <BiStar size="30px" />
              </div>
            </div>

            <div className="px-2">
              <h2 className="font-medium">Descriprion</h2>
              <p className="text-sm leading-5 py-4 text-gray-300">
                A group of people interested in dogecoin, the currency and a bit
                of side for the meme and dof that we all know and love. These
                cases are perfectly simple and easy to distinguish.
              </p>
            </div>

            <div className="px-2">
              <h2 className="font-medium">Specs</h2>
              <p className="text-sm leading-5 py-4 text-gray-300">
                A group of people interested in dogecoin, the currency and a bit
                of side for the meme and dof that we all know and love. These
                cases are perfectly simple and easy to distinguish.
              </p>
              <p className="text-sm leading-5 py-4 text-gray-300">
                A group of people interested in dogecoin, the currency and a bit
                of side for the meme and dof that we all know and love. These
                cases are perfectly simple and easy to distinguish.
              </p>

              <div className="flex flex-wrap">
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #React
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #Tailwind
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #Firebase
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #nano encryption
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #React
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #Tailwind
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #Firebase
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #nano encryption
                </div>
              </div>

              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  class=" inline-block px-6 py-2.5 bg-gray-700 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                >
                  <div className="flex  flex-row"><FaGithub size="12px" /> Sourcecode</div>
                </button>


                <button
                  type="button"
                  class=" inline-block px-6 py-2.5 bg-gray-700 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Demo
                </button>

              </div>
            </div>
          </div>



        </div>









      </div>


















      
      <div className="py-8 px-10 w-full ">




        <div className="lg:flex items-center justify-center w-full">

          <div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-gray-800 p-6 border border-gray-600 text-white rounded shadow-lg">
            <div className="flex items-center border-b border-indigo-500 mb-6">
              <BsCodeSlash size="50" color="brown" />
              <div className="flex items-start justify-between w-full">
                <div className="pl-3 w-full">
                  <p className="text-xl font-bold leading-5 ">
                    Smart Bookings
                  </p>
                  <p className="text-xs leading-normal pt-2 text-gray-400">
                    Web application for managing your daily tasks and routines.
                  </p>
                </div>
                <BiStar size="30px" color="" />
              </div>
            </div>

            <div className="px-2">
              <h2 className="font-medium">Descriprion</h2>
              <p className="text-sm leading-5 py-4 text-gray-300">
                A group of people interested in dogecoin, the currency and a bit
                of side for the meme and dof that we all know and love. These
                cases are perfectly simple and easy to distinguish.
              </p>
            </div>

            <div className="px-2">
              <h2 className="font-medium">Specs</h2>
              <p className="text-sm leading-5 py-4 text-gray-300">
                A group of people interested in dogecoin, the currency and a bit
                of side for the meme and dof that we all know and love. These
                cases are perfectly simple and easy to distinguish.
              </p>
              <p className="text-sm leading-5 py-4 text-gray-300">
                A group of people interested in dogecoin, the currency and a bit
                of side for the meme and dof that we all know and love. These
                cases are perfectly simple and easy to distinguish.
              </p>

              <div className="flex flex-wrap">
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #React
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #Tailwind
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #Firebase
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #nano encryption
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #React
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #Tailwind
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #Firebase
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #nano encryption
                </div>
              </div>

              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  class=" inline-block px-6 py-2.5 bg-gray-700 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                >
                  <div className="flex  flex-row"><FaGithub size="12px" /> Sourcecode</div>
                </button>


                <button
                  type="button"
                  class=" inline-block px-6 py-2.5 bg-gray-700 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Demo
                </button>

              </div>
            </div>
          </div>











          <div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-gray-800 p-6 border border-gray-600 text-white rounded shadow-lg">
            <div className="flex items-center border-b border-indigo-500 mb-6">
              <BsCodeSlash size="50" color="brown" />
              <div className="flex items-start justify-between w-full">
                <div className="pl-3 w-full">
                  <p className="text-xl font-bold leading-5 ">
                    Smart Secretary
                  </p>
                  <p className="text-xs leading-normal pt-2 text-gray-400">
                    Web application for managing your daily tasks and routines.
                  </p>
                </div>
                <BiStar size="30px" />
              </div>
            </div>

            <div className="px-2">
              <h2 className="font-medium">Descriprion</h2>
              <p className="text-sm leading-5 py-4 text-gray-300">
                A group of people interested in dogecoin, the currency and a bit
                of side for the meme and dof that we all know and love. These
                cases are perfectly simple and easy to distinguish.
              </p>
            </div>

            <div className="px-2">
              <h2 className="font-medium">Specs</h2>
              <p className="text-sm leading-5 py-4 text-gray-300">
                A group of people interested in dogecoin, the currency and a bit
                of side for the meme and dof that we all know and love. These
                cases are perfectly simple and easy to distinguish.
              </p>
              <p className="text-sm leading-5 py-4 text-gray-300">
                A group of people interested in dogecoin, the currency and a bit
                of side for the meme and dof that we all know and love. These
                cases are perfectly simple and easy to distinguish.
              </p>

              <div className="flex flex-wrap">
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #React
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #Tailwind
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #Firebase
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #nano encryption
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #React
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #Tailwind
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #Firebase
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #nano encryption
                </div>
              </div>

              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  class=" inline-block px-6 py-2.5 bg-gray-700 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                >
                  <div className="flex  flex-row"><FaGithub size="12px" /> Sourcecode</div>
                </button>



                <button
                  type="button"
                  class=" inline-block px-6 py-2.5 bg-gray-700 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Demo
                </button>

              </div>
            </div>
          </div>



        </div>









      </div>




















      
      <div className="py-8 px-10 w-full ">




        <div className="lg:flex items-center justify-center w-full">

          <div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-gray-800 p-6 border border-gray-600 text-white rounded shadow-lg">
            <div className="flex items-center border-b border-indigo-500 mb-6">
              <BsCodeSlash size="50" color="brown" />
              <div className="flex items-start justify-between w-full">
                <div className="pl-3 w-full">
                  <p className="text-xl font-bold leading-5 ">
                    Smart Wellness
                  </p>
                  <p className="text-xs leading-normal pt-2 text-gray-400">
                    Web application for managing your daily tasks and routines.
                  </p>
                </div>
                <BiStar size="30px" color="" />
              </div>
            </div>

            <div className="px-2">
              <h2 className="font-medium">Descriprion</h2>
              <p className="text-sm leading-5 py-4 text-gray-300">
                A group of people interested in dogecoin, the currency and a bit
                of side for the meme and dof that we all know and love. These
                cases are perfectly simple and easy to distinguish.
              </p>
            </div>

            <div className="px-2">
              <h2 className="font-medium">Specs</h2>
              <p className="text-sm leading-5 py-4 text-gray-300">
                A group of people interested in dogecoin, the currency and a bit
                of side for the meme and dof that we all know and love. These
                cases are perfectly simple and easy to distinguish.
              </p>
              <p className="text-sm leading-5 py-4 text-gray-300">
                A group of people interested in dogecoin, the currency and a bit
                of side for the meme and dof that we all know and love. These
                cases are perfectly simple and easy to distinguish.
              </p>

              <div className="flex flex-wrap">
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #React
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #Tailwind
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #Firebase
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #nano encryption
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #React
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #Tailwind
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #Firebase
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #nano encryption
                </div>
              </div>

              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  class=" inline-block px-6 py-2.5 bg-gray-700 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                >
                  <div className="flex  flex-row"><FaGithub size="12px" /> Sourcecode</div>
                </button>



                <button
                  type="button"
                  class=" inline-block px-6 py-2.5 bg-gray-700 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Demo
                </button>

              </div>
            </div>
          </div>











          <div className="lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-gray-800 p-6 border border-gray-600 text-white rounded shadow-lg">
            <div className="flex items-center border-b border-indigo-500 mb-6">
              <BsCodeSlash size="50" color="brown" />
              <div className="flex items-start justify-between w-full">
                <div className="pl-3 w-full">
                  <p className="text-xl font-bold leading-5 ">
                    Smart Car Lease
                  </p>
                  <p className="text-xs leading-normal pt-2 text-gray-400">
                    Web application for managing your daily tasks and routines.
                  </p>
                </div>
                <BiStar size="30px" />
              </div>
            </div>

            <div className="px-2">
              <h2 className="font-medium">Descriprion</h2>
              <p className="text-sm leading-5 py-4 text-gray-300">
                A group of people interested in dogecoin, the currency and a bit
                of side for the meme and dof that we all know and love. These
                cases are perfectly simple and easy to distinguish.
              </p>
            </div>

            <div className="px-2">
              <h2 className="font-medium">Specs</h2>
              <p className="text-sm leading-5 py-4 text-gray-300">
                A group of people interested in dogecoin, the currency and a bit
                of side for the meme and dof that we all know and love. These
                cases are perfectly simple and easy to distinguish.
              </p>
              <p className="text-sm leading-5 py-4 text-gray-300">
                A group of people interested in dogecoin, the currency and a bit
                of side for the meme and dof that we all know and love. These
                cases are perfectly simple and easy to distinguish.
              </p>

              <div className="flex flex-wrap">
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #React
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #Tailwind
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #Firebase
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #nano encryption
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #React
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #Tailwind
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #Firebase
                </div>
                <div className="py-2 px-4 m-2 text-xs leading-3 text-indigo-800 rounded-full bg-indigo-300">
                  #nano encryption
                </div>
              </div>

              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  class=" inline-block px-6 py-2.5 bg-gray-700 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                >
                  <div className="flex  flex-row"><FaGithub size="12px" /> Sourcecode</div>
                </button>



                <button
                  type="button"
                  class=" inline-block px-6 py-2.5 bg-gray-700 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Demo
                </button>

              </div>
            </div>
          </div>



        </div>









      </div>















    </div>


    <Footer />

    </>
  );
};

export default Projects;
