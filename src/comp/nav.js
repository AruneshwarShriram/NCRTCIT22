/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import img3 from "../images/img3.png";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import linkedin from "../images/icons8-linkedin.gif"
import insta from "../images/icons8-instagram.gif";
import fb from "../images/icons8-facebook.gif";
import youtube from "../images/icons8-youtube-logo.gif";
import twitter from "../images/icons8-twitter.gif";
// Import the functions you need from the SDKs you need

import { Component } from "react";
import Blink from 'react-blink-text';
import Font, { Text } from 'react-font';
import Shimmer from "react-shimmer-effect";

import { FaArrowCircleUp } from 'react-icons/fa';

import ScrollToTop from "react-scroll-to-top";



const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [visible, setVisible] = useState(false)


    


    return (
        <div>
            <ScrollToTop smooth
                viewBox="0 0 24 24"
                
                svgPath="m15.29 5.29-7 7L9.7 13.7 15 8.41V27h2V8.41l5.29 5.29 1.41-1.41-7-7a1 1 0 0 0-1.41 0z"
      />
            <nav className="bg-teal-800 h-20">
                <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8  py-0">
                    <div class="py-0">
                    <div class="float-left grid grid-flow-col">
                        <a href="/">
                            <img
                                className=""
                                src={img3}
                                height={75}
                                width={70}
                                alt="Workflow"
                            />
                            </a>
                            
                            <div class="py-5 px-3 text-2xl font-semibold text-stone-100">
                                Sri Sairam Institute of Technology</div>
                            </div>
                        </div>
                       
                    <div className="flex items-center justify-evenly h-16">
                        <div className="flex  justify-evenly float-left">
                            <div className="hidden md:block py-3">
                                <div className="ml-10 flex items-baseline space-x-4 text-base">
                                    <a
                                        href="#topics"
                                        className="text-gray-100 hover:bg-blue-800 hover:text-white px-3 py-2 rounded-md font-semibold"
                                    >
                                        Topics
                                    </a>
                                    
                                    <a
                                        href="#guidelines"
                                        className="text-gray-100 hover:bg-blue-800 hover:text-white px-3 py-2 rounded-md  font-semibold"
                                    >
                                        Guidelines
                                    </a>
                                    
                                    <a 
                                     
                                     href="#aboutclg"
                                        className="text-gray-100 hover:bg-blue-800 hover:text-white px-3 py-2 rounded-md  font-semibold"

                                     >
                                        About the College
                                    </a>
                                    <a
                                        href="#aboutdept"
                                        className="text-gray-100 hover:bg-blue-800 hover:text-white px-3 py-2 rounded-md  font-semibold"
                                    >
                                        About the Department
                                    </a>
                                    
                                    <motion.div 
                                        whileHover={{
                                            scale: 1.1,
                                            transition: { duration: 1 },
                                        }}
                                        whileTap={{ scale: 0.9 }}
                                     class="p-2 border-2 rounded-xl border-teal-200 shadow-sm shadow-white hover:bg-sky-500 hover:text-white">
                                        <a 
                                            href="https://forms.gle/gnEn6H2SLefupx578"
                                        className="text-gray-100 text-xl px-3 py-2 rounded-md  font-medium"
                                    >
                                        Register
                                        </a></motion.div>
                                    
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

                </nav>
            <motion.div class="bg-blue-300" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1.0 }}>
                <div class="py-1">
                    <section class="py-4 bg-sky-300 ">
                        <div class="grid grid-cols-1 sm:grid-cols-2  gap-10 items-center max-w-6xl mx-auto">
                            <div class="px-2 md:mr-6  p-10 border-red-400">
                                <h3 class="text-4xl pr-6 sm:leading-snug tracking-tight font-bold text-black">
                                    Department of Information Technology proudly presents
                                </h3>
                                <center class="py-8">
                                    <b class="text-7xl text-blue-600">NCRTCIT’22</b>
                                </center>
                                
                                <div class="transform md:rounded-md  bg-blue-400 rotate-0 scale-110 translate-x-25 md:shadow-2xl -ml-4  px-10 py-5 space-y-2">
                                    <text class="text-2xl text-black font-semibold ">
                                        <Font family='Lato'>
                                            <center><h3 class="py-1"><text class="text-5xl">4</text>th NATIONAL CONFERENCE ON <br /><br />  RECENT TRENDS IN COMPUTING <br />  AND INFORMATION TECHNOLOGY <br />on <br /> <b class="text-5xl text-blue-600">10 March 2022</b>
                                            </h3></center>
                                        </Font>

                                         </text>

                                </div>
                                

                            </div>
                            
                            <div class="px-10 py-3">

                                <div class="transform md:rounded-md  bg-teal-400 rotate-3 scale-110 translate-x-25 md:shadow-2xl -ml-4  p-9 space-y-2">

                                    <b class="text-2xl">DATES TO REMEMBER</b>
                                    <br /><br />
                                    <div class="grid grid-rows-3">
                                        <div class="text-xl"><text class="text-black font-bold">Submission</text> of full paper in IEEE format : <b><Blink color='blue' text='15.02.2022' fontSize='20'></Blink></b></div>
                                        <div class="text-xl"><text class="text-black font-bold">Acceptance</text> of Notification : <b><Blink color='blue' text='27.02.2022' fontSize='20'></Blink></b></div>
                                       
                                        <div class="text-xl">Last date to <text class="text-black font-bold">receive registration </text>
                                            form : <b>
                                                
                                                    <Blink color='blue' text='07.03.2022' fontSize='20'>
                                                        07.03.2022
                                                    </Blink>
                                                
                                                
                                                </b> along with DD </div>



                                    </div>

                                </div>
                            </div>
                        </div>
                    </section></div>

                <section class="relative pt-12 bg-blueGray-50">
                    <div class="items-center flex flex-wrap">
                        <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
                            <img alt="..." class="max-w-full rounded-lg shadow-lg" src={img1} />
                        </div>
                        <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
                            <div class="md:pr-12">

                                <h3 class="text-3xl font-semibold">In Association with</h3>
                                <div class="grid-flow-col grid">
                                    <div class="text-pink-600  text-center items-center justify-start w-16 h-16 rounded-full bg-blue-250 mt-8">
                                        <img src={img2} alt=""/>
                                    </div>


                                    <h3 class="text-5xl font-semibold py-10">ICT Academy</h3>
                                </div>


                            </div>
                        </div>
                    </div>
                    <br /><br /><br />
                </section>
                <center class="py-3 mt-11">
                    <motion.a
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 1 },
                        }}
                        whileTap={{ scale: 0.9 }}
                        href="https://forms.gle/gnEn6H2SLefupx578"
                        class="w-full h-20 sm:w-auto  bg-orange-700 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 text-white rounded-xl inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">

                        <img src="https://img.icons8.com/plasticine/100/000000/form.png" alt="" />
                        <div class="text-left">
                            <div class="mb-1 text-2xl font-bold">Register for NCRTCIT’22</div>

                        </div>
                    </motion.a>
                </center>
            </motion.div>
            <div class="py-10 px-10" id="topics">
                <center class="text-3xl font-bold py-2">CALL FOR PAPERS</center>
                <br />

                <center class="w-3/3">
                    <div class="grid grid-cols-3 text-lg gap-14">
                        <div class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-2xl border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                            <div class="flex flex-col justify-center">
                                <p class="text-gray-900 dark:text-gray-300 font-semibold">Big Data in Real Life</p>
                            </div>
                        </div >

                        <div class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-2xl border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                            <div class="flex flex-col justify-center">
                                <p class="text-gray-900 dark:text-gray-300 font-semibold">Internet of Things</p>
                            </div>
                        </div >
                        <div class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-2xl  border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                            <div class="flex flex-col justify-center">
                                <p class="text-gray-900 dark:text-gray-300 font-semibold">Machine Learning & Deep Learning</p>
                            </div>
                        </div >
                        <div class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-2xl  border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                            <div class="flex flex-col justify-center">
                                <p class="text-gray-900 dark:text-gray-300 font-semibold">Image Processing</p>
                            </div>
                        </div >
                        <div class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-2xl border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                            <div class="flex flex-col justify-center">
                                <p class="text-gray-900 dark:text-gray-300 font-semibold">Mobile Communications & 5G Tech.</p>
                            </div>
                        </div >
                        <div class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-2xl  border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                            <div class="flex flex-col justify-center">
                                <p class="text-gray-900 dark:text-gray-300 font-semibold">Nano Technology</p>
                            </div>
                        </div >
                        <div class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-2xl  border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                            <div class="flex flex-col justify-center">
                                <p class="text-gray-900 dark:text-gray-300 font-semibold">Network Performance</p>
                            </div>
                        </div >
                        <div class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-2xl  border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                            <div class="flex flex-col justify-center">
                                <p class="text-gray-900 dark:text-gray-300 font-semibold">Natural Language Processing</p>
                            </div>
                        </div >
                        <div class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-2xl  border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                            <div class="flex flex-col justify-center">
                                <p class="text-gray-900 dark:text-gray-300 font-semibold">Innovative Networking Technologies</p>
                            </div>
                        </div >
                        <div class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-2xl  border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                            <div class="flex flex-col justify-center">
                                <p class="text-gray-900 dark:text-gray-300 font-semibold">Cognitive Computing</p>
                            </div>
                        </div >
                        <div class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-2xl   border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                            <div class="flex flex-col justify-center">
                                <p class="text-gray-900 dark:text-gray-300 font-semibold">Network Security</p>
                            </div>
                        </div >
                        <div class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-2xl  border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                            <div class="flex flex-col justify-center">
                                <p class="text-gray-900 dark:text-gray-300 font-semibold">Virtual & Augmented Reality</p>
                            </div>
                        </div >
                        <div class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-2xl  border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                            <div class="flex flex-col justify-center">
                                <p class="text-gray-900 dark:text-gray-300 font-semibold">Wireless Intelligent Networking</p>
                            </div>
                        </div >
                        <div class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-2xl  border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                            <div class="flex flex-col justify-center">
                                <p class="text-gray-900 dark:text-gray-300 font-semibold">BlockChain Technology</p>
                            </div>
                        </div >
                        <div class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-2xl  border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                            <div class="flex flex-col justify-center">
                                <p class="text-gray-900 dark:text-gray-300 font-semibold">Parallel and Distributed Computing</p>
                            </div>
                        </div >
                        <div class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-2xl  border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                            <div class="flex flex-col justify-center">
                                <p class="text-gray-900 dark:text-gray-300 font-semibold">Quantum Computing</p>
                            </div>
                        </div >
                        <div class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-2xl  border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                            <div class="flex flex-col justify-center">
                                <p class="text-gray-900 dark:text-gray-300 font-semibold">Data Analytics</p>
                            </div>
                        </div >
                        <div class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-2xl  border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                            <div class="flex flex-col justify-center">
                                <p class="text-gray-900 dark:text-gray-300 font-semibold">Edge Computing</p>
                            </div>
                        </div>
                        <div class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-2xl  border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                            <div class="flex flex-col justify-center">
                                <p class="text-gray-900 dark:text-gray-300 font-semibold">Cyber Security & AI</p>
                            </div>
                        </div >
                        <div class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-2xl  border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                            <div class="flex flex-col justify-center">
                                <p class="text-gray-900 dark:text-gray-300 font-semibold">Information Retrieval</p>
                            </div>
                        </div >
                        <div class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-2xl  border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                            <div class="flex flex-col justify-center">
                                <p class="text-gray-900 dark:text-gray-300 font-semibold">Cloud Computing & Application</p>
                            </div>
                        </div >
                        <div class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-2xl  border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                            <div class="flex flex-col justify-center">
                                <p class="text-gray-900 dark:text-gray-300 font-semibold">Data Mining & Warehousing</p>
                            </div>
                        </div >
                        <div class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-2xl  border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                            <div class="flex flex-col justify-center">
                                <p class="text-gray-900 dark:text-gray-300 font-semibold">Fuzzy Logic</p>
                            </div>
                        </div >
                        <div class="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-4 border-solid rounded-2xl  border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                            <div class="flex flex-col justify-center">
                                <p class="text-gray-900 dark:text-gray-300 font-semibold">Human Computer Interaction</p>
                            </div>

                        </div >



                    </div>
                </center><br />
                <div class="text-2xl font-bold  float-right px-10 py-15">Topics included are not limited...</div>
                <br />
            </div>
            <div>

                <div class="py-10 px-10 bg-sky-500" id="guidelines">
                    <div class="p-8  border-8 border-green-400 bg-orange-400 rounded-xl">
                        <h1 class="text-2xl font-semibold text-gray-900 capitalize dark:text-white">Authors Guidelines :</h1>
                        <br />
                        <ol style={{ listStyleType: "upper-roman" }} class="px-10 text-lg font-medium">
                            <li>Papers are invited from Research Scholars, Academicians,
                                UG/PG students and Professionals from industry.</li>
                            <li>All Paper submissions must embody unique and
                                unpublished work. Each submission will be peer reviewed
                                by programme committee members.</li>
                            <li> Submission of a paper should be regarded as an
                                undertaking and if the paper is accepted, then at least one
                                of the authors should register for the conference and
                                present the paper.</li>
                            <li>Maximum allowed pages while submitting camera ready
                                paper is 5.</li>
                            <li>The papers should be in IEEE format (with less than 20%
                                plagiarism).</li>
                            <li>Soft copy of the paper should be sent through
                                <br />Email Id :<a class="font-bold text-black" href="mailto:ncrtcit@sairamit.edu.in"> ncrtcit@sairamit.edu.in</a>
                                {/*<br />Website :<a class="font-extrabold" href="http://saitamitedu.in/incrtcit22/"> http://saitamitedu.in/incrtcit22/</a>*/}</li>

                        </ol>

                    </div>
                    <br />
                    <div class="px-8 py-5  border-violet-800 border-8 rounded-xl bg-white">
                        <h1 class="text-2xl font-semibold text-black capitalize dark:text-white">Publication Details :</h1>
                        <br />
                        <h2 class="text-xl font-semibold">
                            All the accepted and presented papers will be included in the
                            following UGC-CARE(Group-1) Journals :
                        </h2>
                        <br />
                        <ol style={{ listStyleType: "upper-roman" }} class="px-10 text-lg font-medium">
                            <li> ICTACT Journal on Communication Technology</li>
                            <li>ICTACT Journal on Image and Video Processing</li>
                            <li> ICTACT Journal on Soft Computing</li>
                            <li>ICTACT Journal on Microelecronics</li>

                        </ol>

                    </div>
                    <br />
                    <div class="grid grid-flow-col" >
                        <div class="px-8 py-5  border-orange-200 border-8 rounded-xl bg-teal-300" >
                            <h1 class="text-2xl font-semibold text-black capitalize dark:text-white">Registration Fee Details : </h1>
                            <br />
                            <div class="">
                                <div class="grid grid-cols-3 text-xl font-semibold px-6">
                                    <text>Student(UG/PG) :</text>
                                    &nbsp;&nbsp;
                                    <text>₹ 750.00</text>
                                    <text>Faculty/Research: Scholars</text>
                                    &nbsp;&nbsp;
                                    <text>₹ 1,000.00</text>
                                </div>
                            </div>
                        </div>
                        <div class="px-4"></div>
                        <div class="px-8 py-5  border-orange-200 border-8 rounded-xl bg-teal-300">
                            <h1 class="text-2xl font-semibold text-black capitalize dark:text-white">Mode of Payment : </h1>
                            <br />
                            <div class="text-xl font-medium">
                                Both DD (in favor of “SAI DREADNOUGHT” payable at Chennai)
                                advance or Cash (on spot registration) are accepted.

                            </div></div>
                    </div>
                </div>


                <br /><br /><br />
                <div class="bg-amber-300 py-10 max-w-full">
                    <div class="m-2 border-8 border-blue-900  rounded-xl p-10">
                        <center class="text-black font-bold  text-4xl">
                            <text class=" shadow-yellow-300">Patrons</text>
                        </center>
                        <br /><br />
                        <div class="grid-cols-3 flex justify-evenly rounded-2xl">
                            <div class="max-w-sm shadow-black shadow-xl bg-white  border-gray-300 p-6  tracking-wide  border-2 rounded-2xl">
                                <div id="header" class="flex items-center mb-4">
                                    <div id="header-text" class="leading-5 ml-6 sm">
                                        <h4 id="name" class="text-xl font-bold">Shri. Sai Prakash LeoMuthu</h4><br />
                                        <h5 id="job" class="font-semibold text-lg text-blue-600">Chairman & CEO,<br /> Sairam Institutions</h5>
                                    </div>
                                </div>

                            </div>
                            <div class="max-w-sm bg-white  border-gray-300 p-6 tracking-wide shadow-black shadow-xl border-2 rounded-2xl">
                                <div id="header" class="flex items-center mb-4">
                                    <div id="header-text" class="leading-5 ml-6 sm">
                                        <h4 id="name" class="text-xl font-bold">Mrs. J. Sharmila Rajaa</h4><br />
                                        <h5 id="job" class="font-semibold text-lg text-blue-600">Trustee,<br /> Sairam Institutions</h5>
                                    </div>
                                </div>

                            </div>
                            <div class="max-w-sm bg-white  border-gray-300 p-6  tracking-wide shadow-black shadow-xl border-2 rounded-2xl">
                                <div id="header" class="flex items-center mb-4">
                                    <div id="header-text" class="leading-5 ml-6 sm">
                                        <h4 id="name" class="text-xl font-bold text-gray-900">Dr. K. Palanikumar</h4>
                                        <br />
                                        <h5 id="job" class="font-semibold  text-lg text-blue-600">Principal,<br />Sairam Institute of Technology</h5>
                                    </div>
                                </div> </div>

                        </div></div>
                    <br />
                    <div class="px-3">
                        <div class="px-10 justify-evenly grid grid-flow-col border-8 border-orange-500 py-10 rounded-xl">
                            <div class="w-7/15 bg-teal-400  border-gray-300 p-6 tracking-wide  border-2 rounded-2xl shadow-xl shadow-black">
                                <div id="header" class="flex items-center mb-4">

                                    <div id="header-text" class="leading-5 ml-6 sm text-2xl">
                                        <h4 id="name" class="text-xl font-bold text-black">Convener</h4>
                                        <br />
                                        <h5 id="job" class="font-bold text-xl text-violet-700">Dr. V. Brindha Devi,</h5>
                                        <h5 id="job" class="font-bold text-xl text-violet-700 py-2">HOD/IT</h5>
                                    </div>
                                </div> </div>
                            <div class="w-100 bg-teal-400 border-gray-300 p-6 tracking-wide  border-2 rounded-2xl shadow-xl shadow-black">
                                <div id="header" class="flex items-center mb-4">
                                    <div id="header-text" class="leading-5 ml-6 sm text-2xl">
                                        <h4 id="name" class="text-xl font-bold">Organising Secretary</h4>
                                        <br />
                                        <h5 id="job" class="font-bold text-xl text-violet-700">Ms.P.Leela Jancy,</h5>
                                        <h5 id="job" class="font-bold text-xl text-violet-700 py-2">Associate Professor</h5>
                                    </div>
                                </div> </div>
                        </div></div>
                    <br />
                    <div class="px-5 py-4 bg-teal-200">
                        <center class="text-3xl font-bold py-10">
                            <text class=" shadow-yellow-100">Advisory Committee</text>
                        </center>
                        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 border-8 border-blue-400 p-10 rounded-xl ">
                            <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center content-start">
                                <div class="mb-8">
                                </div>
                                <div class="text-center">
                                    <p class="text-2xl text-gray-800 font-bold mb-2 py-3">Dr.S.Neelavathy Pari</p>
                                    <p class="text-lg text-gray-600 font-semibold"> Centre for Technology Development and Transfer (CTDT)</p>
                                    <p class="text-lg text-gray-600 font-semibold"> MIT campus,Anna University</p>

                                </div>
                            </div>
                            <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                                <div class="mb-8">
                                </div>
                                <div class="text-center">
                                    <p class="text-2xl text-gray-800 font-bold mb-2 py-3">Dr.S.Muthurajkumar</p>
                                    <p class="text-lg text-gray-600 font-semibold"> Department of Information Science and Technology</p>
                                    <p class="text-lg text-gray-600 font-semibold"> Anna University, Chennai</p>
                                </div>
                            </div>
                            <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                                <div class="mb-8">
                                </div>
                                <div class="text-center">
                                    <p class="text-2xl text-gray-800 font-bold mb-2 py-3">Dr.A.Senthilselvi</p>
                                    <p class="text-lg text-gray-600 font-semibold">SRM Institute Of Science and Technology</p>
                                    <p class="text-lg text-gray-600 font-semibold">Ramapuram, Chennai</p>
                                </div>
                            </div>
                            <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                                <div class="mb-8">
                                </div>
                                <div class="text-center">
                                    <p class="text-2xl text-gray-800 font-bold mb-2 py-3">Dr.Balika J Chelliah</p>
                                    <p class="text-lg text-gray-600 font-semibold">SRM Institute Of Science and
                                        Technology</p>
                                    <p class="text-lg text-gray-600 font-semibold">Ramapuram, Chennai</p>
                                </div>
                            </div>
                            <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                                <div class="mb-8">
                                </div>
                                <div class="text-center">
                                    <p class="text-2xl text-gray-800 font-bold mb-2 py-3">Dr. R. Kavitha</p>
                                    <p class="text-lg text-gray-600 font-semibold">Vel Tech Rangarajan Dr.Sagunthala R&D
                                        Institute of Science and Technology,Chennai</p>
                                    
                                </div>
                            </div>
                            <div class="w-full bg-white rounded-lg py-5 flex flex-col justify-center items-center content-center">
                                
                                <div class="text-center">
                                    <p class="text-2xl text-gray-800 font-bold mb-2 py-3">Dr. S. Venkatesh</p>
                                    <p class="text-lg text-gray-600 font-semibold">Jeppiar Engineering College</p>
                                    <p class="text-lg text-gray-600 font-semibold">Chennai</p>
                                </div>
                            </div>
                            <div class="w-full bg-white rounded-lg p-10 flex flex-col justify-center items-center">
                               
                                <div class="text-center">
                                    <p class="text-2xl text-gray-800 font-bold mb-2 py-3">Dr. P.M. Durai Raj Vincent</p>
                                    <p class="text-lg text-gray-600 font-semibold">Vellore Institute of Technology</p>
                                    <p class="text-lg text-gray-600 font-semibold">Vellore</p>
                                </div>
                            </div>
                            <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                                <div class="mb-8">
                                </div>
                                <div class="text-center">
                                    <p class="text-2xl text-gray-800 font-bold mb-2 py-3">Dr.M.Kavitha</p>
                                    <p class="text-lg text-gray-600 font-semibold">Vel tech Rangarajan Dr.Sagunthala R&D
                                        Institute of Science and Technology</p>
                                    <p class="text-lg text-gray-600 font-semibold">Chennai</p>
                                </div>
                            </div>
                            <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
                                
                                <div class="text-center">
                                    <p class="text-2xl text-gray-800 font-bold mb-2 py-3">Dr.Jospin Jeya</p>
                                    <p class="text-lg text-gray-600 font-semibold">Jeppiaar Engineering College</p>
                                    <p class="text-lg text-gray-600 font-semibold">Chennai</p>
                                </div>
                            </div>
                        </div></div>

                </div>
                <footer class="bg-blue-400">
                    <br />

                    <center class="">

                        <div class="bg-orange-400 font-normal text-2xl text-center w-96 rounded-lg">
                            For Further Details,
                            <br />Contact :
                        </div>
                        <br />

                        <div class="">
                            <div class="text-xl font-bold">
                                Dr. V. BRINDHA DEVI, HOD
                                <br />
                                Convener - NCRTCIT’22
                            </div>
                            <div class="text-xl font-semibold">
                                Department of Information Technology,<br />
                                Sri Sairam Institute of Technology,<br />
                                Chennai - 44. <br />Tel : +91 87545 82225<br />

                                <br />
                            </div>
                            <div class="text-xl font-bold">
                                Ms. P. Leela Jancy <br />
                                Organising Secretary, NCRTCIT’22<br />

                                <text class="font-semibold">Tel: +91 90030 97494</text><br />
                                <br />

                            </div>
                        </div>
                    </center>

                </footer>
                <div class="py-10 px-10 bg-teal-200" id="aboutclg">
                
                    <div class="bg-white rounded-lg p-6" >
                        <center class="text-2xl font-bold">About the College</center>
                        <div>
                            <p class="text-gray-500 py-6 leading-loose font-semibold text-base">
                                Sri Sai Ram Institute of Technology, an autonomous institution is
                                approved by All India Council for Technical Education (AICTE) and
                                it is affiliated to Anna University, Chennai.The college is an ISO
                                2009:2015 recertified institution, and it is also accredited with
                                NBA and A + grade in NAAC. As imbibed with the message of Sri
                                Shirdi Sai Baba, our chairman has ventured into the realm of
                                providing quality technical education to both urban and rural
                                students from Tamil Nadu as well as other states. As a result, it has
                                been established by MJF.Ln.Leo Muthu, Founder Chairman of
                                Sapthagiri Educational Trust, in the year 2008.Now,it is developed
                                as one of the reputed Engineering Institutions in Tamil Nadu. This
                                is achieved by offering top quality technical education and also
                                by molding the younger generation with the spirit of service to
                                society. Also, the college has dedicated faculty and provides
                                adequate infrastructure facilities.
                                <img class="float-right py-0" src="https://img.icons8.com/external-others-cattaleeya-thongsriphong/50/000000/external-college-back-to-school-color-line-others-cattaleeya-thongsriphong-4.png" alt="college" />

                            </p>
                        </div>
                        </div>
                    <br />

                    <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-6" id="vision">
                        <div class="bg-white rounded-lg p-6">
                            <div class="flex items-center space-x-6 mb-4">
                                <div>
                                    <p class="text-2xl text-gray-700 font-bold mb-1">Our Vision</p>
                                </div>
                            </div>
                            <div>
                                <p class="text-gray-500 leading-loose font-semibold text-base">
                                    To accomplish excellence in teaching, learning and research in
                                    Information and Communication that responds swiftly to the
                                    challenges of the industry and society.
                                    <img class="float-right py-0" src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/50/000000/external-vision-marketing-strategy-wanicon-lineal-color-wanicon.png" alt="vision" />

                                </p>
                            </div>
                        </div>
                        <div class="bg-white rounded-lg p-6" id="mission">
                            <div class="flex items-center space-x-6 mb-4">
                                <div>
                                    <p class="text-2xl text-gray-700 font-bold mb-1">Our Mission</p>

                                </div>
                            </div>
                            <div>
                                <p class="text-gray-500 leading-loose font-semibold text-base">
                                    We shall devote ourselves to provide technical
                                    education with contemporary technologies through state of art
                                    research facilities and inspiring learning ambience to
                                    comprehend and Communication .Also to associate with
                                    diverse organizations to strengthen industry-academic
                                    relationships, to produce responsible intellectuals and
                                    researchers.
                                    <img class="float-right py-0" src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/50/000000/external-mission-business-motivation-wanicon-lineal-color-wanicon.png" alt="mission" />

                                </p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div id="aboutdept">
                    <div class="bg-white rounded-lg p-6" >
                        <center class="text-2xl font-bold" >About the Department</center>
                        <div>
                            <p class="text-gray-500  py-5 leading-loose font-semibold text-base">
                                The Department of Information Technology, established in the
                                year 2008 with an intake of 60 students has now grown
                                exemplarily with an admirable intake of 120 with 24 highly
                                dedicated faculty and 315 students. The department takes
                                responsibility in organizing guest lectures, seminars, workshops
                                and training programs with the help of engineers and
                                academicians of National and International organizations, in
                                order to help the students abreast with the latest developments
                                in the field of information technology. Students are made to
                                embolden the future technology and master the art of computing
                                by encouraging them to think like futuristic for catalyzing
                                Research and Research related activities through the Research
                                and Development cell. As a result of various Research activities,
                                numerous students from the Department of Information
                                Technology have been placed their foot prints in esteemed
                                International and National forum.
                                <img class="float-right py-0" src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/50/000000/external-laptop-multimedia-kiranshastry-lineal-color-kiranshastry-1.png" alt="" />

                            </p>
                        </div>
                        </div></div>
                    <br />
                </div>

            </div>
            <footer>
                <div class="bg-orange-300 py-7">
                    <center><text class="text-3xl font-bold text-red-500">
                        Sri Sairam Institute of Technology
                    </text>
                    <div class="text-green-700 text-2xl font-semibold">Sai Leo Nagar,
                            West Tambaram,<br />
                            Chennai-600044
                    </div>
                        <div class="text-green-700 text-2xl font-semibold">  Phone : +91-44-22512111 / 2251 2333 / 22512444</div>
                   

                        <div class="text-2xl text-green-700  font-semibold">Mail : sairam@sairamit.edu.in</div>

                    <div class=" py-6 grid grid-flow-col justify-center gap-8 ">
                            <a href="https://www.linkedin.com/company/sairamit-information-technology/"><img class="bg-teal-700" src={linkedin} alt="linkedin" height={50} width={50} /></a>
                            <a href="https://www.facebook.com/sairamitit"><img src={fb}  alt="linkedin" height={50} width={50} /></a>
                            <a href="https://twitter.com/sairam_IT" ><img src={twitter} alt="twitter" height={50} width={50} /></a>
                            <a href="https://www.instagram.com/sairam_it/"><img src={insta} alt="instagram" height={50} width={50} /></a>
                            <a href="https://www.youtube.com/c/SairamInstitutions"><img src={youtube} alt="linkedin" height={50} width={50} /></a>
                            
                    </div>

                    </center>
                </div>
            </footer>
           
            
        </div>
    );
}
export default Nav;