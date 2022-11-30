import React from "react";
import JobTabs from "../components/JobTabs";
import ButtonLink from "../components/ButtonLink";
import ContentBlock from "../components/ContentBlock";
import jobs from "../data/JobsData";

function Home() {
  return (
    <div className="md:flex md:justify-center ">
      <div className="px-3 mx-6 trial rounded-lg border-r-4 border-b-4 border-double border-basic-h">
        <ContentBlock
          header="Hi, I'm Hunter"
          headerClasses="text-basic-h text-3xl h1c"
          text="I'm a Developer from Adelaide, South Australia and Software
              Engineering (Hons) graduate from the University of South
              Australia, 2021. I'm mostly experienced in Web Development, but
              I'm also keenly interested in software engineering."
        />

        <ContentBlock header="My Experience" />
        <JobTabs jobs={jobs} />
        <ContentBlock
          blockClasses="pt-10"
          header="Check out my CV"
          headerClasses="text-3xl text-center pt-5"
          text="Want to learn more about my work experience? Have a look at my resume in the link below, last updated as of 8/22"
          textClasses="text-center pt-5"
        />
        <div className="py-8 flex justify-evenly">
          <ButtonLink text="Resume" link="HunterGreen.pdf" />
          <ButtonLink text="GitHub" link="https://github.com/pizza-hunter" />
        </div>

        <div className="pt-16 md:flex md:justify-center">
          <div className="">
            <div className="flex justify-between">
              <h1 className="text-3xl text-center">More about me</h1>
              <img
                className="w-20 h-20 rounded-full  border-2"
                src="./images/profilepic.jpg"
                alt="Hunter Green profile shot"
              ></img>
            </div>
            <div className="pt-5">
              <div className="flex">
                <h1>
                  I've always enjoyed creating things{" "}
                  <mark className="text-basic-h italic ">
                    (my primary school books had more doodles than words)
                  </mark>
                  , and computers and the web have always interested me starting
                  off with Runescape and customising my MySpace page{" "}
                  <mark className="text-basic-h italic ">
                    (no you cannot see it)
                  </mark>
                  .
                </h1>
              </div>
              <div className="pt-10">
                <p>
                  I love Web Development and enjoy working with{" "}
                  <a
                    className="text-basic-l"
                    href="https://www.djangoproject.com/"
                  >
                    Django
                  </a>{" "}
                  and{" "}
                  <a className="text-basic-l" href="https://reactjs.org/">
                    React
                  </a>
                  . App development is something I'd like to experiment more
                  with, recently I have been trying out{" "}
                  <a className="text-basic-l" href="https://flutter.dev/">
                    Flutter
                  </a>{" "}
                  Outside of work I watch movies, cook mostly curry and pasta,
                  listen to music, play games, and play semi-amatuer tennis.{" "}
                  <mark className="text-basic-l italic ">
                    <a href="/coolStuff">
                      Some of my favourites can be found here
                    </a>
                  </mark>
                </p>
              </div>
            </div>
          </div>
        </div>
        <ContentBlock
          header="Contact Me"
          text="I'm not currently looking for work at the moment but my inbox is always open if you have any
        questions or just want to say hi."
        />
        <div className="py-8 flex justify-center">
          <ButtonLink text="Hit me up" link="mailto:huntergreenaus@gmail.com" />
        </div>
      </div>
    </div>
  );
}

export default Home;
