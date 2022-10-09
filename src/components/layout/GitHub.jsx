import React, { useEffect, useState } from "react";
import { FaUsers, FaUserFriends, FaCodepen, FaStore } from "react-icons/fa";
import Repos from "./Repos";

const GitHub = () => {
  const [userData, setUserData] = useState(null);
  const [userRepos, setUserRepos] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/DevTechJr`)
      .then((response) => response.json())
      .then((response) => {
        setUserData(response);
      });
  }, []);
  // const {
  //   name,
  //   type,
  //   avatar_url,
  //   location,
  //   bio,
  //   blog,
  //   twitter_username,
  //   login,
  //   html_url,
  //   followers,
  //   following,
  //   public_repos,
  //   public_gists,
  //   hireable,
  // } = userData;

  if (!userData) {
    return <p>Loading User Data....</p>;
  } else {
    return (
      <>
        <div className="w-full mx-auto  my-5 bg-primary rounded-2xl p-5">
          <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8 bg-white p-5 rounded-2xl ">
            <div className="custom-card-image mb-6 md:mb-0 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60">
              <div className="rounded-lg shadow-xl card image-full">
                <figure>
                  <img src={userData?.avatar_url} alt="" />
                </figure>
                <div className="card-body justify-end">
                  <h2 className="card-title mb-0">{userData?.name}</h2>
                  <p className="flex-grow-0">{userData?.login}</p>
                </div>
              </div>
            </div>

            <div className="col-span-2">
              <div className="mb-6">
                <h1 className="text-3xl card-title text-primary">
                  {userData?.name}
                  <div className="ml-2 mr-1 badge badge-success">
                    {userData?.type}
                  </div>
                  {userData?.hireable && (
                    <div className="mx-1 badge badge-info">Hireable</div>
                  )}
                </h1>
                <p className="text-secondary">{userData?.bio}</p>
                <div className="mt-4 card-actions">
                  <a
                    href={userData?.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline text-primary"
                  >
                    Visit Github Profile
                  </a>
                </div>
              </div>

              <div className="w-full rounded-lg shadow-md stats bg-primary stats-vertical shadow">
                {userData?.location && (
                  <div className="stat">
                    <div className="stat-title text-md text-white">
                      Location
                    </div>
                    <div className="text-lg stat-value">
                      Brampton, ON, Canada
                    </div>
                  </div>
                )}
                {userData?.location && (
                  <div className="stat">
                    {/* <div className="stat-title text-md">Website</div>
                    <div className="text-lg stat-value">
                      <a target="_blank" rel="noreferrer">
                        Hello
                      </a>
                    </div> */}
                    <div className="stat-title text-lg text-white">
                      Recent GitHub Repositories :
                    </div>
                    <Repos />
                  </div>
                )}
                {userData?.twitter_username && (
                  <div className="stat">
                    <div className="stat-title text-md">Twitter</div>
                    <div className="text-lg stat-value">
                      <a
                        href={`https://twitter.com/${userData?.twitter_username}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {userData?.twitter_username}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-white stats">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <FaUsers className="text-3xl md:text-5xl" />
                </div>
                <div className="stat-title pr-5 text-primary">Followers</div>
                <div className="stat-value pr-5 text-3xl md:text-4xl text-primary">
                  {userData?.followers}
                </div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary">
                  <FaUserFriends className="text-3xl md:text-5xl" />
                </div>
                <div className="stat-title pr-5 text-primary">Following</div>
                <div className="stat-value pr-5 text-3xl md:text-4xl text-primary">
                  {userData?.following}
                </div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary">
                  <FaCodepen className="text-3xl md:text-5xl" />
                </div>
                <div className="stat-title pr-5 text-primary">Public Repos</div>
                <div className="stat-value pr-5 text-3xl md:text-4xl text-primary">
                  {userData?.public_repos}
                </div>
              </div>
            </div>
          </div>

          {/* <RepoList repos={repos} /> */}
        </div>
      </>
    );
  }
};

export default GitHub;
