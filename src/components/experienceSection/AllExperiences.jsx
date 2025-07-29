import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Front-End Developer",
    company: "IBM Skillbuild",
    date: "may 2024 - july 2024",
    responsibilities: [
      "Exploring and using web development concepts.",
      "Generating new ideas for better user experience..",
      "Participating in large scale application.",
    ],
  },
  {
    job: "Backend-End Developer",
    company: "Progeta Technologies",
    date: "june 2025 - Present",
    responsibilities: [
      "Implementing reusable components.",
      "Participating in large scale application.",
      "Working on the performance of web applications.",
      "Generating new ideas for better user experience.",
    ],
  },
  {
      job: "Exploring CDAC",
    company: "CDAC Pune",
    date: "2025 - Present",
    responsibilities: [
      "Learning Advanced JavaScript, React and TailwindCSS.",
      "Participating in preparing course materials.",
      "Helping students through their way in learning web development technologies.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
