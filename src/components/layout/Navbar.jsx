import React from "react";
import { useState } from "react";
import { FaCode, FaGithub, FaCommentAlt, FaComments } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div class="bg-primary w-full rounded-xl sticky top-0 z-[100]">
      <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 rounded-xl">
        <div class="relative flex grid items-center grid-cols-2 lg:grid-cols-3">
          <ul class="flex items-center hidden space-x-8 lg:flex">
            <li>
              <a
                href="/about"
                aria-label="Our product"
                title="Our product"
                class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 btn btn-ghost"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/skills"
                aria-label="Our product"
                title="Our product"
                class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 btn btn-ghost"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="/projects"
                aria-label="Product pricing"
                title="Product pricing"
                class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 btn btn-ghost"
              >
                Projects
              </a>
            </li>
          </ul>
          <a
            href="/"
            aria-label="Company"
            title="Company"
            class="inline-flex items-center lg:mx-auto hover:animate-pulse transition transition-transform ease-in-out duration-700 group"
          >
            <FaCode className="text-4xl mx-2 font-bold text-white group-hover:text-accent" />
            <span class="ml-2 large:text-2xl text-xl font-bold text-gray-100 hover:text-white tracking-wider group-hover:text-accent">
              AnirudhBV.JS
            </span>
          </a>

          {/* <a className="w-full flex items-center justify-end">
            <a
              href="/"
              aria-label="Sign in"
              title="Sign in"
              class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-teal-accent-400 btn btn-accent rounded-lg w-2/5 px-5"
            >
              Contact
            </a>
          </a> */}

          <ul class="flex items-center hidden ml-auto space-x-8 lg:flex">
            <li>
              <a
                href="/contact"
                aria-label="Sign in"
                title="Sign in"
                class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-teal-accent-400 btn btn-accent rounded-lg px-5"
              >
                <FaComments className="text-white text-xl font-bold mx-2" />
                Contact
              </a>
            </li>
            <li>
              <a
                href="/github"
                aria-label="Sign in"
                title="Sign in"
                class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-teal-accent-400 btn btn-primary-content rounded-lg px-5"
              >
                <FaGithub className="text-white text-xl font-bold mx-2" />
                GitHub
              </a>
            </li>
          </ul>

          <div class="ml-auto lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <CgMenuRight className="text-white font-bold text-2xl mx-3" />
            </button>
            {isMenuOpen && (
              <div class="absolute top-0 left-0 w-full">
                <div class="p-5 bg-white border rounded shadow-sm">
                  <div class="flex items-center justify-center mb-4">
                    <a
                      href="/"
                      aria-label="Company"
                      title="Company"
                      class="inline-flex items-center lg:mx-auto hover:animate-pulse transition transition-transform ease-in-out duration-700 group"
                    >
                      <FaCode className="text-4xl mx-2 font-bold text-primary group-hover:text-accent" />
                      <span class="ml-2 large:text-2xl text-xl font-bold text-primary hover:text-secondary tracking-wider group-hover:text-accent">
                        AnirudhBV.JS
                      </span>
                    </a>
                    <div className="flex items-center">
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        class="p-2 -mt-2 -mr-2 transition duration-200 rounded-2xl hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <AiOutlineCloseCircle className="text-2xl text-primary mx-2 font-bold" />
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul class="space-y-4">
                      <li>
                        <a
                          href="/about"
                          aria-label="Our product"
                          title="Our product"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          About Me
                        </a>
                      </li>
                      <li>
                        <a
                          href="/projects"
                          aria-label="Our product"
                          title="Our product"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Projects
                        </a>
                      </li>
                      <li>
                        <a
                          href="/skills"
                          aria-label="Product pricing"
                          title="Product pricing"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Skills & Tools
                        </a>
                      </li>
                      <li>
                        <a
                          href="/contact"
                          aria-label="Sign in"
                          title="Sign in"
                          class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-teal-accent-400 btn btn-accent rounded-lg px-5 w-full"
                        >
                          <FaComments className="text-white text-xl font-bold mx-2" />
                          Contact
                        </a>
                      </li>
                      <li>
                        <a
                          href="/github"
                          aria-label="Sign in"
                          title="Sign in"
                          class="font-medium tracking-wide text-white transition-colors duration-200 hover:text-teal-accent-400 btn btn-primary-content rounded-lg px-5 w-full"
                        >
                          <FaGithub className="text-white text-xl font-bold mx-2" />
                          GitHub
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
