import React from "react";
import pic from "../undrawCTA.png";
import Typewriter from "typewriter-effect";

import {
  FaGithub,
  FaInstagram,
  FaSpotify,
  FaDiscord,
  FaComments,
  FaHandsHelping,
} from "react-icons/fa";

const CTA1 = () => {
  return (
    <aside class="overflow-hidden sm:grid sm:grid-cols-2 my-16 p-8 bg-primary rounded-2xl">
      {/* <div class=" md:p-12 lg:px-16 bg-white lg:py-24 p-10 bg-white rounded-xl">
        <div class="mx-auto max-w-xl text-center sm:text-left">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit
          </h2>

          <p class="hidden text-gray-500 dark:text-gray-300 md:mt-4 md:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
            tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim
            et fermentum, augue. Aliquet amet volutpat quisque ut interdum
            tincidunt duis.
          </p>

          <div class="mt-4 md:mt-8">
            <a
              href="#"
              class="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div> */}
      <div className="w-full my-5 max-w-xl px-4 mx-auto p-6 md:px-0 lg:px-8 lg:py-20 lg:max-w-screen-xl bg-white rounded-xl">
        <div className="">
          <h2 className="mb-5 text-center font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:text-center">
            Yo, It's Anirudh.
          </h2>
          <span className="w-full text-center ml-auto mr-auto flex items-center justify-center mb-5 font-sans text-2xl font-bold tracking-tight text-black">
            <Typewriter
              options={{
                strings: [
                  "I'm a fullstack developer.",
                  "I'm a web designer.",
                  "I love using Tailwind CSS.",
                  "I'm an artist(ish).",
                  "I'm a die hard Allu Arjun fan.",
                  "I love to listen to music.",
                  "I'm also a Pythonista.",
                  "Learn more about me below!",
                ],
                autoStart: true,
                loop: true,
              }}
              className="mb-5 font-sans text-xl font-bold tracking-tight text-gray-900"
            />
          </span>

          <p className="mb-2 text-base text-gray-700 md:text-lg md:text-center">
            I'm a full-stack developer who builds stuff for others. I enjoy
            creating solutions for problems found across the spectrum of the
            internet. You can find out more about me below!
          </p>
          {/* <div className="mb-10 text-center md:mb-16 lg:mb-20">
            <a
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Learn more
            </a>
          </div> */}
          <div className="mt-5 flex flex-col items-center">
            <div className="mb-2 text-md text-gray-600 font-semibold md:mb-2">
              See me in action!
            </div>
            <div className="flex items-center space-x-4">
              {/* FaGithub, FaInstagram, FaSpotify, FaDiscord */}
              <a
                href="https://github.com/DevTechJr"
                className="text-xl font-bold mx-2"
              >
                <FaGithub className="text-black text-3xl font-bold mx-2" />
              </a>
              <a
                href="https://www.instagram.com/anirudhbv.js/"
                className="text-xl font-bold mx-2"
              >
                <FaInstagram className="text-red-500 text-3xl font-bold mx-2" />
              </a>
              <a
                href="https://open.spotify.com/user/5y5fxag0ae1gleln5idag71vw"
                className="text-xl font-bold mx-2"
              >
                <FaSpotify className="text-primary text-3xl font-bold mx-2" />
              </a>
              <a
                href="https://discordlookup.com/user/%3CAni+/%3E#2198"
                className="text-xl font-bold mx-2"
              >
                <FaDiscord className="text-blue-800 text-3xl font-bold mx-2" />
              </a>
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            {/* <a
              href="/contact"
              class="font-medium tracking-wide text-white transition-colors duration-200 bg-primary rounded-xl px-4 py-3 w-3/4 mt-5 flex items-center justify-center hover:-translate-y-2 hover:drop-shadow-3xl duration-500 ease-in-out hover:bg-secondary outline outline-offset-2 outline-primary"
            >
              <FaHandsHelping className="text-white text-2xl font-bold mx-2 normal-case" />
              <span className="text-xl text-white text-center">
                Let's Get In Touch!
              </span>
            </a> */}
            <a
              href="contact"
              class="relative inline-block group focus:outline-none focus:ring focus:ring-primary font-medium tracking-wide text-white transition-colors duration-200 bg-primary rounded-xl px-4 py-3 w-3/4 mt-8 flex items-center justify-center hover:-translate-y-2 hover:drop-shadow-3xl duration-500 ease-in-out hover:bg-secondary outline outline-offset-2 outline-primary"
            >
              <span class="relative z-10 block px-12 py-3 font-medium tracking-wide text-white transition bg-primary rounded group-hover:scale-105 text-xl flex items-center">
                <FaHandsHelping className="text-white text-2xl font-bold mx-2 normal-case" />
                Let's Get In Touch!
              </span>

              <span class="absolute inset-0 transition scale-105 rounded bg-accent-focus -rotate-3 group-hover:rotate-0"></span>
            </a>
          </div>
        </div>
      </div>

      <img alt="Student" src={pic} class="h-56 w-full object-cover sm:h-full" />
    </aside>
  );
};
export default CTA1;
