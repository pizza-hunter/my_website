import React from "react";
import JobTabs from "../components/JobTabs";
import ButtonLink from "../components/ButtonLink";
import ContentBlock from "../components/ContentBlock";
import jobs from "../data/JobsData";
import Linebreak from "../components/Linebreak";
import CarDriving from "../components/CarDriving";
import CallToAction from "../components/CallToAction";

function Home() {
  return (
    <div className="md:flex md:justify-center px-5 md:px-10 overflow-x-hidden">
      <div className="">
        <IntroductionBlock />
        <Linebreak />
        <CarDriving />
        <ContentBlock
          header="My Experience"
          headerClasses="text-basic-a text-5xl text-shadow-basic"
          blockClasses="pt-24"
        />
        <JobTabs jobs={jobs} />
        <Linebreak />
        <div className="xl:pt-32"></div>
        <CallToAction
          header="Check out my CV"
          text="Want to learn more about my work experience? Have a look at my resume in the link below, last updated as of 8/22"
          link="HunterGreen.pdf"
          linkText="Resume"
        >
          <ButtonLink link="HunterGreen.pdf" text="Resume" colour="dark" />
        </CallToAction>
        <div className="xl:pt-32"></div>
        <MoreAboutMeBlock />
        <ContentBlock
          blockClasses="pt-16 md:pt-24"
          header="Get in touch"
          text="I'm not currently looking for work at the moment but my inbox is always open if you have any
        questions or just want to say hi."
          headerClasses="text-basic-a text-5xl text-shadow-basic"
          textClasses="text-xl pt-10"
        />
        <div className="py-8 pt-16 flex justify-center">
          <ButtonLink
            text="Hit me up"
            link="mailto:huntergreenaus@gmail.com"
            colour="accent"
          />
        </div>
        <Linebreak />
      </div>
    </div>
  );
}

const IntroductionBlock = () => {
  return (
    <div className="pt-20 md:flex md:pt-64 md:pb-3">
      <div className="md:w-5/6">
        <h2 className="text-basic-h text-5xl text-shadow-basic">
          Hi, I'm Hunter
        </h2>
        <p className="pt-10 text-2xl leading-10">
          I'm a Developer and amateur designer based in{" "}
          <span className="text-basic-h underline underline-offset-4 decoration-basic-l hover:text-basic-l hover:decoration-basic-h duration-500">
            Adelaide
          </span>
          , and recent graduate from the{" "}
          <span className="text-basic-l underline underline-offset-4 decoration-basic-h hover:text-basic-h hover:decoration-basic-l duration-500">
            University of South Australia.
          </span>{" "}
          I love exploring new programming languages and learning what they
          bring to the table. Have a look at some of my{" "}
          <a className="linkText text-3xl" href="/work">
            Previous Projects.
          </a>
        </p>
      </div>
      <img
        className="hidden lg:block w-32 h-32 md:w-52 md:h-52 rounded-lg border-2 shadow-lg shadow-black"
        src="./images/profilepic.jpg"
        alt="Hunter Green profile shot"
      ></img>
    </div>
  );
};

const MoreAboutMeBlock = () => {
  return (
    <div className="pt-24 md:flex md:justify-center">
      <div className="">
        <div className="flex justify-between">
          <h1 className="text-basic-a text-5xl text-shadow-basic">
            More about me
          </h1>
        </div>
        <div className="pt-10 text-xl leading-9">
          <div className="flex">
            <h1>
              I've always enjoyed creating things{" "}
              <mark className="text-basic-h italic ">
                (my primary school books had more doodles than words)
              </mark>
              , and computers and the web have always interested me starting off
              with Runescape and customising my MySpace page{" "}
              <mark className="text-basic-h italic ">
                (no you cannot see it)
              </mark>
              .
            </h1>
          </div>
          <div className="pt-10">
            <p>
              I love Web Development and enjoy working with{" "}
              <a className="text-basic-l" href="https://www.djangoproject.com/">
                Django
              </a>{" "}
              and{" "}
              <a className="text-basic-l" href="https://reactjs.org/">
                React
              </a>
              . App development is something I'd like to experiment more with,
              recently I have been trying out{" "}
              <a className="text-basic-l" href="https://flutter.dev/">
                Flutter
              </a>{" "}
              Outside of work I watch movies, cook mostly curry and pasta,
              listen to music, play games, and play semi-amatuer tennis.{" "}
              <mark className="text-basic-l italic ">
                <a href="/coolStuff">Some of my favourites can be found here</a>
              </mark>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
