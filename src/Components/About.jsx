import LinkedInLogo from "../assets/Icons/linkedin.svg"
import GithubLogo from "../assets/Icons/github.svg"
import MailLogo from "../assets/Icons/mail-logo-email-transparente-1283929.png"
import Timeline from "./Timeline.jsx";
import Projects from "./Projects.jsx";
import Tech from "./Tech.jsx";
import Uses from "./Uses.jsx";
import { FiArrowUpRight } from "react-icons/fi";

function About() {
    return (

        <div className={"w-[30rem] h-full z-50 relative mt-3"}>
            <div className={"flex flex-col justify-center my-5"}>
                <div className={"flex items-center"}>
                    <div className={"flex items-center mr-1"}>
                        <span className={"text-green-500 text-5xl font-bold mb-1 flex items-center"}>·</span>
                    </div>

                    <div className={"flex items-center"}>
                        <p className={"text-white font-bold"}>Online.</p>
                    </div>
                </div>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <p className={"text-4xl font-bold text-white mb-2 gradient padding"} id={"UlText"}>Hey,
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    I'm <span>Shreyas</span></p>
                <p className={"text-4xl font-bold bg-gradient-to-r from-[#ab7ad1]  to-[#cd306f] inline-block text-transparent bg-clip-text"}>Web
                    Developer.</p>
            </div>
            <div className={"flex space-x-3 mt-9"}>
                <div className={"bg-[#2e2e31] w-[7.7rem] h-10 flex items-center justify-center rounded-3xl ml-1 hover:bg-[#19191C] transition duration-200"}>
                    <a href="https://www.linkedin.com/in/shreyasdutt/" target={"_blank"}>
                        <button className={"flex items-center text-white mr-2"}><img width={"15px"} src={LinkedInLogo} className={"mr-1.5"} alt=""/>LinkedIn
                        </button>
                    </a>

                </div>

                <div
                    className={"bg-[#2e2e31] w-[7.2rem] h-10 flex items-center justify-center rounded-3xl hover:bg-[#19191C] transition duration-200"}>
                    <a href="https://github.com/ShreyasDutt" target={"_blank"}>
                    <button className={"flex items-center text-white mr-2"}><img width={"15px"} src={GithubLogo} className={"mr-1.5"} alt=""/>GitHub
                    </button>
                    </a>
                </div>

                <div className={"bg-[#2e2e31] w-[6rem] h-10 flex items-center justify-center rounded-3xl hover:bg-[#19191C] transition duration-200"}>
                    <a href="mailto:shreyas.dutt@student.ufv.ca" target={"_blank"}>
                    <button className={"flex items-center text-white mr-2"}><img width={"15px"} src={MailLogo} className={"mr-1.5"} alt=""/>Mail
                    </button>
                    </a>
                </div>
            </div>
            <div className={"mt-14 text-lg pb-10"}>
                <p className={"text-white"}>
                    Hi, I am Shreyas; a second-year BCIS student at UFV, passionate about web development and Android.
                    Ready to learn and grow in the tech world!</p>
            </div>
            <div className={"flex items-center justify-center"}>
                <div className={"border-b border-[#2e2e31] w-[22rem] md:w-[30rem]"}></div>
            </div>

            <div className={"my-6"}>
                <p className={"text-white text-3xl font-semibold mb-10"}>Timeline</p>
                <Timeline/>
                <div className={"flex items-center justify-center"}>
                    <div className={"border-b border-[#2e2e31] w-[22rem] mt-10 md:w-[30rem]"}></div>
                </div>
            </div>
            <div className={"my-6"}>
                <p className={"text-white text-3xl font-semibold mb-10"}>Projects</p>
                <Projects/>
                <div className={"flex items-center justify-center"}>
                    <div className={"border-b border-[#2e2e31] w-[22rem] md:w-[30rem]"}></div>
                </div>
            </div>

            <div className={"my-6"}>
                <p className={"text-white text-3xl font-semibold mb-10"}>Tech</p>
                <Tech/>
                <div className={"flex items-center justify-center"}>
                    <div className={"border-b border-[#2e2e31] w-[22rem] md:w-[30rem]"}></div>
                </div>
            </div>

            <div className={"my-6"}>
                <p className={"text-white text-3xl font-semibold mb-10"}>Uses</p>
                <Uses/>
                <div className={"flex items-center justify-center"}>
                    <div className={"border-b border-[#2e2e31] w-[22rem] md:w-[30rem]"}></div>
                </div>
            </div>

            <div className={"text-white mb-10 flex flex-col"}>
                <p className={"text-xl font-semibold md:text-2xl"}>Thanks for scrolling.</p>
                <div className={"mt-2"}>
                    <button className={"bg-[#2e2e31] flex items-center p-3 rounded-full px-9 hover:bg-[#19191C] transition duration-200 hover:scale-105"}>
                        <p>Resume</p>
                        <FiArrowUpRight className={"ml-2 text-lg"}/>
                    </button>
                </div>

            </div>

        </div>
    );
}

export default About;