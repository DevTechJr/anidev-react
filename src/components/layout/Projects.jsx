import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaGithub, FaComments, FaMousePointer, FaCross } from "react-icons/fa";
import { MdBuild } from "react-icons/md";

const Projects = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="px-4 py-16 mx-auto md:px-24 lg:px-8 lg:py-20 w-full rounded-2xl bg-white my-8">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 p-5">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            AnirudhBV.JS
          </p>
        </div>
        <h2 className="max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-primary sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="db164e35-2a0e-4c0f-ab05-f14edc6d4d30"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#db164e35-2a0e-4c0f-ab05-f14edc6d4d30)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">My</span>
          </span>{" "}
          Projects & Work
        </h2>
        <p className="text-base text-accent md:text-lg">
          Below is a collection of my past projects and builds I've created.
          There's still alot more on my GitHub that I will deploy soon for
          production. Some bigger projects such as <i>StressLessHub</i> and{" "}
          <i>Homeal</i> are still in the making. I'll be sure to add them down
          below upon completion!
        </p>
      </div>
      <div className="w-full p-3 rounded-2xl flex items-center justify-center">
        <Carousel
          infinite={true}
          autoPlay={true}
          // autoPlaySpeed={1000}
          swipeable={true}
          draggable={true}
          responsive={responsive}
          customTransition="all .5"
          transitionDuration={500}
          className="my-5  py-8 rounded-3xl w-full"
        >
          <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20 mx-5 bg-primary">
            <a
              href=""
              className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 text-white"
            >
              InstaCart.com - Landing Page
            </a>
            <p className="max-w-xs mx-auto mb-2 text-gray-700">
              A responsive and custom built mock landing page for the popular
              food delivery company, InstaCart!
            </p>
            <div className="w-full flex items-center justify-center lg:flex-row md:flex-row flex-col">
              <a
                href="https://github.com/DevTechJr/instacart-landing"
                aria-label="Sign in"
                title="Sign in"
                class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-teal-accent-400 btn btn-primary-content rounded-lg px-3 mx-2  my-3"
              >
                <FaGithub className="text-white text-xl font-bold mx-2" />
                Repository
              </a>
              <a
                href="https://instacart-landing.netlify.app/"
                aria-label="Sign in"
                title="Sign in"
                class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-teal-accent-400 btn btn-accent rounded-lg px-5 mx-2  my-3"
              >
                <FaMousePointer className="text-white text-xl font-bold mx-2" />
                Live Link
              </a>
            </div>
          </div>
          <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20 mx-5 bg-primary">
            <a
              href=""
              className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 text-white"
            >
              AniMedia Youtube Converter
            </a>
            <p className="max-w-xs mx-auto mb-2 text-gray-700">
              A responsive and custom built tool that allows you to convert
              YouTube videos to mp4 and mp3, safely!
            </p>
            <div className="w-full flex items-center justify-center lg:flex-row md:flex-row flex-col">
              <a
                href=""
                aria-label="Sign in"
                title="Sign in"
                class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-teal-accent-400 btn btn-primary-content rounded-lg px-3 mx-2  my-3"
              >
                <FaGithub className="text-white text-xl font-bold mx-2" />
                Private Repo
              </a>
              <a
                href="https://animedia-downloader.vercel.app/"
                aria-label="Sign in"
                title="Sign in"
                class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-teal-accent-400 btn btn-accent rounded-lg px-5 mx-2  my-3"
              >
                <FaMousePointer className="text-white text-xl font-bold mx-2" />
                Live Link
              </a>
            </div>
          </div>
          <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20 mx-5 bg-primary">
            <a
              href=""
              className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 text-white"
            >
              AniMusic Search Engine
            </a>
            <p className="max-w-xs mx-auto mb-2 text-gray-700">
              A powerful search engine built to help users find information
              about tracks, albumns, artists and music! I was inspired by
              Spotify.
            </p>
            <div className="w-full flex items-center justify-center lg:flex-row md:flex-row flex-col">
              <a
                href="https://github.com/DevTechJr/animusic"
                aria-label="Sign in"
                title="Sign in"
                class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-teal-accent-400 btn btn-primary-content rounded-lg px-3 mx-2  my-3"
              >
                <FaGithub className="text-white text-xl font-bold mx-2" />
                Repository
              </a>
              <a
                href="https://animusic-abv.netlify.app/"
                aria-label="Sign in"
                title="Sign in"
                class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-teal-accent-400 btn btn-accent rounded-lg px-5 mx-2  my-3"
              >
                <FaMousePointer className="text-white text-xl font-bold mx-2" />
                Live Link
              </a>
            </div>
          </div>
          <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20 mx-5 bg-primary">
            <a
              href=""
              className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 text-white"
            >
              AniFlix DB
            </a>
            <p className="max-w-xs mx-auto mb-2 text-gray-700">
              The one stop application created to help users find information
              about their favorite actors, movies, and shows! Inspired by IMDB.
            </p>
            <div className="w-full flex items-center justify-center lg:flex-row md:flex-row flex-col">
              <a
                href="https://github.com/DevTechJr/aniflixdb"
                aria-label="Sign in"
                title="Sign in"
                class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-teal-accent-400 btn btn-primary-content rounded-lg px-3 mx-2  my-3"
              >
                <FaGithub className="text-white text-xl font-bold mx-2" />
                Repository
              </a>
              <a
                href=""
                aria-label="Sign in"
                title="Sign in"
                class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-teal-accent-400 btn bg-error-content rounded-lg px-5 mx-2"
              >
                <MdBuild className="text-white text-xl font-bold mx-2  my-3" />
                Not Deployed
              </a>
            </div>
          </div>
          <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20 mx-5 bg-primary">
            <a
              href=""
              className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 text-white"
            >
              Online Digital Clock
            </a>
            <p className="max-w-xs mx-auto mb-2 text-gray-700">
              A simple date & time digital clock with hidden secrets! Built with
              Vanilla JS and the date library for the sake of the good old days.
            </p>
            <div className="w-full flex items-center justify-center lg:flex-row md:flex-row flex-col">
              <a
                href="https://github.com/DevTechJr/JavaScript-Digital-Clock-Application"
                class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-teal-accent-400 btn btn-primary-content rounded-lg px-3 mx-2  my-3"
              >
                <FaGithub className="text-white text-xl font-bold mx-2" />
                Repository
              </a>
              <a
                href="https://anirudh-jsclock-app.netlify.app/"
                class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-teal-accent-400 btn btn-accent rounded-lg px-5 mx-2  my-3"
              >
                <FaMousePointer className="text-white text-xl font-bold mx-2" />
                Live Link
              </a>
            </div>
          </div>
          <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20 mx-5 bg-primary">
            <a
              href=""
              className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 text-white"
            >
              DevTechJr.IO
            </a>
            <p className="max-w-xs mx-auto mb-2 text-gray-700">
              A classic landing page built with Bootstrap 5, HTML and CSS for a
              non-profit organization. It's also responsive on all screens!
            </p>
            <div className="w-full flex items-center justify-center lg:flex-row md:flex-row flex-col">
              <a
                href="https://github.com/DevTechJr/TheDevTechJrSite"
                class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-teal-accent-400 btn btn-primary-content rounded-lg px-3 mx-2  my-3"
              >
                <FaGithub className="text-white text-xl font-bold mx-2" />
                Repository
              </a>
              <a
                href="https://devtechjrio.netlify.app/"
                class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-teal-accent-400 btn btn-accent rounded-lg px-5 mx-2  my-3"
              >
                <FaMousePointer className="text-white text-xl font-bold mx-2" />
                Live Link
              </a>
            </div>
          </div>
          <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20 mx-5 bg-primary">
            <a
              href=""
              className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 text-white"
            >
              GitHub Profile Finder
            </a>
            <p className="max-w-xs mx-auto mb-2 text-gray-700">
              A simple but powerful that allows you to find information about
              any GitHub user! Powered by GitHub.
            </p>
            <div className="w-full flex items-center justify-center lg:flex-row md:flex-row flex-col">
              <a
                href="https://github.com/DevTechJr/github-profile-finder"
                class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-teal-accent-400 btn btn-primary-content rounded-lg px-3 mx-2  my-3"
              >
                <FaGithub className="text-white text-xl font-bold mx-2" />
                Repository
              </a>
              <a
                href="https://anirudh-github-finder.netlify.app/"
                class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-teal-accent-400 btn btn-accent rounded-lg px-5 mx-2  my-3"
              >
                <FaMousePointer className="text-white text-xl font-bold mx-2" />
                Live Link
              </a>
            </div>
          </div>
          <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20 mx-5 bg-primary">
            <a
              href=""
              className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 text-white"
            >
              MyMoney Finance Tracker
            </a>
            <p className="max-w-xs mx-auto mb-2 text-gray-700">
              A free-to-use personal finance tracker to help manage financial
              activity for students! Built with React + Firebase 8.
            </p>
            <div className="w-full flex items-center justify-center lg:flex-row md:flex-row flex-col">
              <a
                href="https://github.com/DevTechJr/myMoney"
                target="_blank"
                class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-teal-accent-400 btn btn-primary-content rounded-lg px-3 mx-2 my-3"
              >
                <FaGithub className="text-white text-xl font-bold mx-2" />
                Repository
              </a>
              <a
                href=""
                class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-teal-accent-400 btn bg-error-content rounded-lg px-5 mx-2  my-3"
              >
                <MdBuild className="text-white text-xl font-bold mx-2" />
                Not Deployed
              </a>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
