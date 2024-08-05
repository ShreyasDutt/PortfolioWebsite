import React from 'react';
import { SiWebstorm } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { LuFigma } from "react-icons/lu";
import {FaFirefoxBrowser, FaNode} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { IoLogoChrome } from "react-icons/io5";
import { FaAndroid } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";


function Uses(props) {
    const data = [
        {
            logo: < SiWebstorm  />,
            text: 'WebStorm',
        },
        {
            logo: <SiPostman  />,
            text: 'Postman',
        },
        {
            logo: <LuFigma  />,
            text: 'Figma',
        },
        {
            logo: <FaFirefoxBrowser   />,
            text: 'FirefoxDE',
        },
        {
            logo: <VscVscode  />,
            text: 'VSCode',
        },
        {
            logo: <IoLogoChrome />,
            text: 'Chrome',
        },
        {
            logo: <FaAndroid  />,
            text: 'Android',
        },
        {
            logo: <FaWindows   />,
            text: 'Windows',
        },
        {
            logo: <FaSpotify/>,
            text: 'Spotify'
        }


    ]
    return (
        <div className={"flex item-center justify-center mb-10"}>
            <div className={"text-white grid grid-cols-3 gap-2 "}>
                {
                    data.map((item) => (
                        // eslint-disable-next-line react/jsx-key
                        <div className={"bg-[#2e2e31] p-7 w-28 h-28 rounded-xl hover:bg-[#19191C] transition duration-200 hover:scale-105"}>
                            <div className={"flex flex-col items-center justify-center"}>
                                <p className={"text-3xl mb-3"}>
                                    {item.logo}
                                </p>
                                <p className={"text-sm "}>
                                    {item.text}
                                </p>
                            </div>
                        </div>

                    ))
                }

            </div>
        </div>
    );
}

export default Uses;