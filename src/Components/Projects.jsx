import React from 'react';
import {FiArrowUpRight} from "react-icons/fi";
import {FaCss3Alt, FaHtml5, FaNode, FaNodeJs, FaReact} from "react-icons/fa";
import {RiTailwindCssFill} from "react-icons/ri";
import {SiEjs, SiExpress, SiFramer, SiMongodb} from "react-icons/si";
import {IoLogoJavascript} from "react-icons/io5";

function Projects() {
    const projects = [
        {
            name: 'Pinterest Clone',
            "desc": "Developed the backend for a Pinterest-like app with image uploads and user authentication.",
            link: "https://github.com/ShreyasDutt/PinterestProject",
            stack: <div className={"flex text-xl space-x-1.5 mt-3"}>
                <FaNodeJs />
                <SiExpress />
                <SiMongodb />
                <SiEjs />
                <RiTailwindCssFill />
            </div>
        },
        {
            name: 'FoodFleet',
            desc: "Full-stack food delivery app with React frontend and Node.js/Express backend.",
            link: "https://github.com/ShreyasDutt/FoodFleet",
            stack: <div className={"flex text-xl space-x-1.5 mt-3"}>< FaReact /><RiTailwindCssFill /><FaNode /><SiExpress  /><SiMongodb  /></div>
        },
        {
            name: 'PsycheTherapy',
            desc: "Portfolio website made for client appointments & showcasing business services.",
            link: "http://www.psychetherapy.in/",
            stack: <div className={"flex text-xl space-x-1.5 mt-3"}>< FaReact /><RiTailwindCssFill /><SiFramer /></div>
        },
        {
            name: 'Authflow',
            desc: "Custom auth paired up with SMTP for email verification and password resets.",
            link: "https://github.com/ShreyasDutt/AuthFlow",
            stack: <div className={"flex text-xl space-x-1.5 mt-3"}><FaNodeJs /><SiExpress /><SiMongodb /><FaReact /><RiTailwindCssFill /></div>
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
