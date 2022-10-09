import React, { useState, useRef } from "react";
import { FaCode } from "react-icons/fa";
import pic from "../contactUs.png";
// import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaInstagram,
  FaSpotify,
  FaDiscord,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    if (name && email && message) {
      //   emailjs
      //     .sendForm(
      //       "service_8g81tdc",
      //       "template_q725oyk",
      //       form.current,
      //       "5BUhoGZ3bP_yBp_I_"
      //     )
      //     .then(
      //       (result) => {
      //         alert(result.text);
      //       },
      //       (error) => {
      //         alert(error.text);
      //       }
      //     );

      const templateParams = {
        name: name,
        email: email,
        message: message,
      };

      emailjs
        .send(
          "service_8g81tdc",
          "template_q725oyk",
          templateParams,
          "5BUhoGZ3bP_yBp_I_"
        )
        .then(
          function (response) {
            alert(
              "Thanks for sending me a message! I'll respond as soon as possible to you!"
            );
            console.log("SUCCESS!", response.status, response.text);
          },
          function (error) {
            alert(
              "Sorry. There seems to be an issue. Try contacting me in other ways listed."
            );
            console.log("FAILED...", error);
          }
        );
    }
  };

  return (
    //     <!-- a lot of the lines are just svg text, actual html is simple
    // A sample contact us page form written with tailwind css
    // Illustration from undraw.co by the amazing Katerina Limpitsouni
    // -->
    <div class="bg-primary text-gray-100 p-5 my-10 rounded-2xl">
      <div class="text-center w-full flex items-center justify-center m-5">
        <FaCode className="large:text-6xl text-4xl mx-2 font-bold text-white group-hover:text-accent" />
        <span class="ml-2 large:text-5xl text-3xl font-bold text-gray-100 hover:text-white tracking-wider group-hover:text-accent text-center">
          AnirudhBV.JS
        </span>
      </div>
      <div class="max-w-screen-xl px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
        <div class="flex flex-col justify-between">
          <div>
            <h2 class="text-4xl lg:text-5xl font-bold leading-tight text-center">
              Lets talk about everything!
            </h2>
            <div className="mt-5 flex flex-col items-center mt-8">
              <div className="mb-2 text-md text-gray-600 font-semibold md:mb-2">
                Hate email? Let's get in touch, below!
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
                  href="https://www.linkedin.com/in/anirudh-vangara-77b05621b/"
                  className="text-xl font-bold mx-2"
                >
                  <FaLinkedin className="text-sky-600 text-3xl font-bold mx-2" />
                </a>
                <a
                  href="https://discordlookup.com/user/%3CAni+/%3E#2198"
                  className="text-xl font-bold mx-2"
                >
                  <FaDiscord className="text-blue-800 text-3xl font-bold mx-2" />
                </a>
              </div>
            </div>
          </div>
          <div class="mt-8 text-center">
            <img src={pic} />
          </div>
        </div>
        <form class="" ref={form} onSubmit={sendEmail} id="contactForm">
          <div>
            <span class="uppercase text-sm text-primary font-bold">
              Full Name
            </span>
            <input
              class="w-full bg-primary text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline hover:-translate-y-2 ease-in-out duration-500 placeholder-slate-300"
              type="text"
              placeholder="e.g. John Doe"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div class="mt-8">
            <span class="uppercase text-sm text-primary font-bold">Email</span>
            <input
              class="w-full bg-primary text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline hover:-translate-y-2 ease-in-out duration-500 placeholder-slate-300"
              type="email"
              required
              placeholder="e.g. snoopdog@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="mt-8">
            <span class="uppercase text-sm text-primary font-bold">
              Message
            </span>
            <textarea
              class="w-full h-32 bg-primary text-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline hover:-translate-y-2 ease-in-out duration-500 placeholder-slate-300"
              required
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div class="mt-8">
            <button
              type="submit"
              class="uppercase text-md font-bold tracking-wide bg-primary text-white p-3 rounded-lg w-full focus:outline-none focus:shadow-outline hover:-translate-y-4 ease-in-out duration-200 focus:bg-accent ease-in-out active:bg-accent"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
