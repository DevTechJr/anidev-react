import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import { FaLink, FaEye, FaStar, FaInfo, FaUtensils } from "react-icons/fa";

const Repos = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
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
  // https://api.github.com/users/DevTechJr/repos
  const [repos, setRepos] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/DevTechJr/repos`)
      .then((response) => response.json())
      .then((response) => {
        setRepos(response);
      });
  }, []);
  return (
    <Carousel
      autoPlay={true}
      autoPlaySpeed={2500}
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      className="py-8 rounded-3xl w-full"
    >
      <div className="mb-2 rounded-md card bg-base-200 hover:bg-base-300 h-full flex items-center justify-center">
        <h3 className="mb-2 text-3xl font-semibold text-center">
          View My Repositories :
        </h3>
      </div>
      {repos?.map((repo) => (
        <div className="mb-2 rounded-md card bg-base-200 hover:bg-base-300 h-full">
          <div className="card-body">
            <h3 className="mb-2 text-xl font-semibold">
              <a href={repo?.html_url}>
                <FaLink className="inline mr-1 text-primary" /> {repo?.name}
              </a>
            </h3>
            <p className="mb-3">{repo?.description}</p>
            <div>
              <div className="mr-2 badge badge-info badge-lg">
                <FaEye className="mr-2" /> {repo?.watchers_count}
              </div>
              <div className="mr-2 badge badge-success badge-lg">
                <FaStar className="mr-2" /> {repo?.stargazers_count}
              </div>
              <div className="mr-2 badge badge-error badge-lg">
                <FaInfo className="mr-2" /> {repo?.open_issues}
              </div>
              <div className="mr-2 badge badge-warning badge-lg">
                <FaUtensils className="mr-2" /> {repo?.forks}
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Repos;
