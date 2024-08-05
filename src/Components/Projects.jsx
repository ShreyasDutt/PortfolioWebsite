import React from 'react';
import {FiArrowUpRight} from "react-icons/fi";
import {FaCss3Alt, FaHtml5, FaJava, FaNode, FaReact} from "react-icons/fa";
import {RiTailwindCssFill} from "react-icons/ri";
import {SiExpress, SiFramer, SiMongodb} from "react-icons/si";
import {IoLogoJavascript} from "react-icons/io5";

function Projects() {
    const projects = [
        {
            name: 'FoodFleet',
            desc: "A Food ordering app build using the MERN stack,This project is currently in development.",
            stack: <div className={"flex text-xl space-x-1.5 mt-3"}>< FaReact /><RiTailwindCssFill /><FaNode /><SiExpress  /><SiMongodb  /></div>
        },
        {
            name: 'PsycheTherapy',
            desc: "Portfolio website made for client appointments & showcasing business services.",
            link: "http://www.psychetherapy.in/",
            stack: <div className={"flex text-xl space-x-1.5 mt-3"}>< FaReact /><RiTailwindCssFill /><SiFramer /></div>
        },
        {
            name: 'Movie Booking',
            desc: "Collaborated on a Java-based movie ticket booking app with a team of five.",
            link: "https://github.com/ShreyasDutt/Projects/tree/main/MovieBookingApp(Java)",
            stack: <div className={"flex text-xl space-x-1.5 mt-3"}><FaJava  /></div>
        },

        {
            name: '2048',
            desc: "Implementation of the puzzle game 2048, where players combine tiles to make highest score.",
            link: "https://2048-shreyas.netlify.app/",
            stack: <div className={"flex text-xl space-x-1.5 mt-3"}><FaHtml5   /><FaCss3Alt /><IoLogoJavascript /></div>
        }
    ]
    return (
        <div className={"flex item-center justify-center mb-10"}>
            <div className={"text-white grid grid-cols-2 gap-3"}>

                {projects.map((item) => (
                    // eslint-disable-next-line react/jsx-key
                    <div className={"bg-[#2e2e31] p-3 w-44 h-44 rounded-xl hover:bg-[#19191C] hover:scale-105 transition duration-200"}>
                        <div className={"flex flex-col"}>
                            <div className={"flex items-center mb-2 justify-between"}>
                                <p> {item.name}</p>
                                <a href={item.link} target={"_blank"}>
                                    <FiArrowUpRight className={"ml-2 text-xl hover:rotate-90 transition duration-200"} />
                                </a>

                            </div>


                            <div className={"text-sm font-thin w-full font-sans"}>
                                <p>
                                    {item.desc}
                                </p>

                            </div>
                            <div>
                            {/*    stack*/}
                                {item.stack}
                            </div>
                        </div>
                    </div>
                ))}


            </div>
        </div>
    );
}

export default Projects;
