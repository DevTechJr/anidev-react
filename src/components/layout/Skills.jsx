import React from "react";
import {
  FaPencilRuler,
  FaLaptopCode,
  FaHtml5,
  FaCss3,
  FaReact,
  FaJs,
  FaDatabase,
} from "react-icons/fa";
import {
  SiFlask,
  SiTypescript,
  SiJavascript,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiAdobe,
} from "react-icons/si";
import {
  TbBrandFirebase,
  TbBrandFigma,
  TbBrandGithub,
  TbBrandNextjs,
  TbBrandPython,
  TbBrandTailwind,
} from "react-icons/tb";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="px-4 py-16 mx-auto md:px-24 lg:px-8 lg:py-20 bg-primary rounded-2xl w-full">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 rounded-xl">
        <h2 className="max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="bebc38d1-bf72-4c77-a073-f0fe5abe0753"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#bebc38d1-bf72-4c77-a073-f0fe5abe0753)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">My</span>
          </span>{" "}
          Skillset & Tools
        </h2>
        <p className="text-base text-accent font-semibold md:text-lg bg-white p-4 rounded-2xl">
          I have experiences in various roles in the fields of web design and
          web development. Here's more information about my specialties :
        </p>
      </div>
      <div className="grid gap-8 row-gap-12 lg:grid-cols-2">
        <div className="max-w-md sm:mx-auto sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <FaLaptopCode className="text-6xl text-primary" />
          </div>
          <h6 className="mb-3 text-xl text-white font-bold leading-5">
            Full-Stack Development
          </h6>
          <p className="mb-3 text-md text-white ">
            I am experienced in using a variety of full-stack development
            oriented tools and technologies for applications. I am comfortable
            with frontend, backend and full-stack development as well as, using
            industry-standard tools for related tasks.
          </p>
        </div>
        <div className="max-w-md sm:mx-auto sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <FaPencilRuler className="text-5xl text-primary" />
          </div>
          <h6 className="mb-3 text-xl text-white font-bold leading-5">
            Web Design
          </h6>
          <p className="mb-3 text-md text-white ">
            Parallel to my full-stack development skills, I am experienced in
            the art of web design. I use industry-standard tools ranging from
            <i> Figma to Adobe Creative Cloud Studio</i> to plan out versatile
            front-end and full-stack system interface and UI designs.
          </p>
        </div>
      </div>
      <h1 className="text-2xl font-semibold text-white text-center my-5">
        My Arsenal :{" "}
      </h1>
      <Carousel
        infinite={true}
        autoPlay={true}
        // autoPlaySpeed={1000}
        swipeable={true}
        draggable={true}
        responsive={responsive}
        customTransition="all .2"
        transitionDuration={200}
        className="my-5 bg-accent py-8 rounded-3xl"
      >
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <FaHtml5 className="text-6xl text-primary font-semibold" />
          </div>
          <h6 className="mb-2 font-semibold leading-5 text-white">HTML 5</h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <FaCss3 className="text-6xl text-primary font-semibold" />
          </div>
          <h6 className="mb-2 font-semibold leading-5 text-white">CSS 3</h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <FaReact className="text-6xl text-primary font-semibold" />
          </div>
          <h6 className="mb-2 font-semibold leading-5 text-white">React.JS</h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <TbBrandFirebase className="text-6xl text-primary font-semibold" />
          </div>
          <h6 className="mb-2 font-semibold leading-5 text-white">Firebase</h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <TbBrandFigma className="text-6xl text-primary font-semibold" />
          </div>
          <h6 className="mb-2 font-semibold leading-5 text-white">Figma</h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <TbBrandGithub className="text-6xl text-primary font-semibold" />
          </div>
          <h6 className="mb-2 font-semibold leading-5 text-white">GitHub</h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <TbBrandNextjs className="text-6xl text-primary font-semibold" />
          </div>
          <h6 className="mb-2 font-semibold leading-5 text-white">Next.JS</h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <TbBrandPython className="text-6xl text-primary font-semibold" />
          </div>
          <h6 className="mb-2 font-semibold leading-5 text-white">Python</h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <TbBrandTailwind className="text-6xl text-primary font-semibold" />
          </div>
          <h6 className="mb-2 font-semibold leading-5 text-white">
            Tailwind CSS
          </h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <FaDatabase className="text-6xl text-primary font-semibold" />
          </div>
          <h6 className="mb-2 font-semibold leading-5 text-white">MySQL</h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <FaDatabase className="text-6xl text-primary font-semibold" />
          </div>
          <h6 className="mb-2 font-semibold leading-5 text-white">Sanity.io</h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <SiFlask className="text-6xl text-primary font-semibold" />
          </div>
          <h6 className="mb-2 font-semibold leading-5 text-white">
            Python Flask
          </h6>
        </div>
        {/* SiTypescript,SiJavascript,SiPandas,SiNumpy,SiScikitlearn */}
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <SiTypescript className="text-6xl text-primary font-semibold" />
          </div>
          <h6 className="mb-2 font-semibold leading-5 text-white">
            TypeScript
          </h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <SiJavascript className="text-6xl text-primary font-semibold" />
          </div>
          <h6 className="mb-2 font-semibold leading-5 text-white">
            JavaScript
          </h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <SiPandas className="text-6xl text-primary font-semibold" />
          </div>
          <h6 className="mb-2 font-semibold leading-5 text-white">Pandas</h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <SiNumpy className="text-6xl text-primary font-semibold" />
          </div>
          <h6 className="mb-2 font-semibold leading-5 text-white">NumPy</h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <SiScikitlearn className="text-6xl text-primary font-semibold" />
          </div>
          <h6 className="mb-2 font-semibold leading-5 text-white">
            Sci-kit Learn
          </h6>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
            <SiAdobe className="text-6xl text-primary font-semibold" />
          </div>
          <h6 className="mb-2 font-semibold leading-5 text-white">
            Adobe Creative Studio
          </h6>
        </div>
      </Carousel>
    </div>
  );
};

export default Skills;
