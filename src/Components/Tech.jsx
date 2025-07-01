import React from 'react';
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiFramer } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiTypescript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";



function Tech(props) {
    const data = [
        {
            logo: <SiNextdotjs/>,
            text: 'Next js',
        },
        {
        logo: < FaReact />,
            text: 'React',
        },
        {
            logo: <RiTailwindCssFill />,
            text: 'Tailwind',
        },
        {
            logo: <SiFramer />,
            text: 'Framer',
        },
        {
            logo: <FaNode />,
            text: 'Node',
        },
        {
            logo: <SiExpress  />,
            text: 'Express',
        },
        {
            logo: <SiMongodb  />,
            text: 'MongoDB',
        },
        {
            logo: <FaJava  />,
            text: 'Java',
        },
        {
            logo: <GrMysql  />,
            text: 'MySQL',
        },

        {
            logo: <FaHtml5   />,
            text: 'HTML',
        },
        {
            logo: <FaCss3Alt />,
            text: 'CSS',
        },
        {
            logo: <SiTypescript />,
            text: 'TypeScript',
        },


    ]

    return (
        <div className={"flex item-center justify-center mb-10"}>
            <div className={"text-white grid grid-cols-3 gap-2"}>

                {
                    data.map((item) => (
                        // eslint-disable-next-line react/jsx-key
                        <div className={"bg-[#2e2e31] p-7 w-28 h-28 rounded-xl hover:bg-[#19191C] transition duration-200 hover:scale-105"}>
                            <div className={"flex flex-col items-center justify-center"}>
                                <p className={"text-3xl mb-3"}>
                                    {item.logo}
                                </p>
                                <p className={"text-sm"}>
                                    {item.text}
                                </p>
                            </div>
                        </div>

                    ))
                }


            </div>
        </div>);
}

export default Tech;