import { BiLogoTypescript } from "react-icons/bi";
import { DiRedis } from "react-icons/di";
import { FaFileExcel } from "react-icons/fa";
import { FaGoogle, FaReact, FaWordpress } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiFramer, SiGooglegemini, SiMongodb, SiNextdotjs, SiShadcnui } from "react-icons/si";
import { TbSeo } from "react-icons/tb";

const Timeline = () => {

  const data = [
    {
        date: "Feb 2026 - Present",
        title: "Full-Stack Software Engineer at Canadian Cart",
        description:
        "Designed and built a full-scale e-commerce platform from the ground up, developing frontend and backend systems, database architecture, real-time features, payment workflows, and production deployments.",
        stack: <div className={"flex text-xl space-x-1.5 mt-3"}>
          <SiNextdotjs />
          <BiLogoTypescript />
          <SiMongodb />
          <SiShadcnui />
          <RiTailwindCssFill />
          <SiGooglegemini />
        </div>
    },
        {
            date: "May 2024 - August 2024",
            title: "IT Intern at Coli Spaces",
          description: "Managed the company’s website, created digital content, executed SEO and marketing strategies, and developed a property management app in Excel.",
          stack: <div className={"flex text-xl space-x-1.5 mt-3"}>
            <FaWordpress />
            <FaFileExcel />
            <TbSeo />
          </div>
        },
        {

            date: "June 2024 - August 2024",
            title: "IT Intern at PsycheTherapy",
          description: "Managed the online presence and digital marketing for a startup, and created a portfolio website for client appointments.",
          stack: <div className={"flex text-xl space-x-1.5 mt-3"}>< FaReact /><RiTailwindCssFill /><SiFramer /></div>
        },
        {
            date: ">May 2024 - August 2024",
            title: "Digital Marketing Intern",
          description: "As a Digital Marketing Intern at 360 Growth Marketing, I focused on content generation and SEO, creating engaging content to boost online visibility and improve search engine rankings.",
          stack: <div className={"flex text-xl space-x-1.5 mt-3"}>
            <TbSeo />
            <FaWordpress />
            <FaFileExcel />
            <FaGoogle />
          </div>

        }

    ]

    return (


        <ol className="relative border-s border-white">

            {data.map((item, index) => (
                <li className="mb-10 ms-4" key={index}>
                    <div
                        className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                    <time
                        className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.date}
                    </time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{item.description}</p>
                <div className="text-white">
                     {item.stack}
                </div>
                </li>

            ))}
        </ol>


    );
};

export default Timeline;
