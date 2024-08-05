
const Timeline = () => {

    const data = [
        {
            date: "May 2024 - August 2024",
            title: "IT Intern at Coli Spaces",
            description: "Managed the company’s website, created digital content, executed SEO and marketing strategies, and developed a property management app in Excel.",
        },
        {

            date: "June 2024 - August 2024",
            title: "IT Intern at PsycheTherapy",
            description:"Managed the online presence and digital marketing for a startup, and created a portfolio website for client appointments."
        },
        {
            date: ">May 2024 - August 2024",
            title: "Digital Marketing Intern",
            description:"As a Digital Marketing Intern at 360 Growth Marketing, I focused on content generation and SEO, creating engaging content to boost online visibility and improve search engine rankings."

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
                </li>

            ))}
        </ol>


    );
};

export default Timeline;
