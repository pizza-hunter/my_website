import React from "react";
import JobTabs from "../components/JobTabs";

const jobs = [
  {
    shortName: "Blis",
    companyName: "Blis Web Agency",
    companyLink: "https://blisweb.agency/",
    jobTitle: "Junior Web Developer",
    period: "May, 2021 - June, 2022",
    tasks: [
      "Designed and developed code for client websites and template blocks, using HTML CSS, JavaScript, JQuery, Twig, Craft CMS",
      "Created custom formie multi-page form with drawing tools",
      "Communicted with clients to make website updates and improvements that meet their vision and needs",
    ],
  },
  {
    shortName: "FSSA",
    companyName: "Forensic Science South Australia",
    companyLink:
      "https://www.agd.sa.gov.au/law-and-justice/forensic-science-sa",
    jobTitle: "Systems Analyst (honours intern)",
    period: "March - November, 2021",
    tasks: [
      "Updated, designed and developed Django web applications for internal organisation use",
      'Architected and developed a web tool "LocusLR" to concurrently generate DNA Loci Liklihood ratio reports using Matplotlib',
      "Implemented Authorisation and tool use logging in MySQL for the Django web applications",
    ],
  },
];

function Home() {
  // return (
  //
  // );

  return (
    <div className="px-1">
      <div className="flex justify-between mt-10">
        <div className="md:w-1/2">
          <h1 className="text-3xl text-basic-h">Hi, I'm Hunter.</h1>
          <p className="pt-8">
            I'm a Developer from Adelaide, South Australia and Software
            Engineering (Hons) graduate from the University of South Australia,
            2021.
          </p>
        </div>
      </div>
      <div className="pt-10 mt-16">
        <h1 className="text-3xl text-basic-a">My Experience</h1>
        <div className="pt-3">
          <div className="pt-5">
            <JobTabs jobs={jobs} />
          </div>
        </div>
      </div>
      <div className="pt-10 mt-16">
        <div className="flex justify-between">
          <h1 className="text-3xl">More about me</h1>
          <img
            className="w-20 h-20 rounded-full opacity-80 border-2"
            src="./images/profilepic.jpg"
            alt="Hunter Green profile shot"
          ></img>
        </div>
        <div className="pt-5">
          <div className="flex">
            <h1>
              I've always enjoyed creating things{" "}
              <highlight className="text-basic-h italic opacity-75">
                (my primary school books had more doodles than words)
              </highlight>
              , and computers and the web have always interested me starting off
              with Runescape and customising my MySpace page{" "}
              <highlight className="text-basic-h italic opacity-75">
                (no you cannot see it)
              </highlight>
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
              <highlight className="text-basic-h italic opacity-75">
                <a href="/coolStuff">Some of my favourites can be foundhere</a>
              </highlight>
            </p>
          </div>
        </div>
      </div>
      <div className="pt-10">
        Here's my Resume<button className="bg-black">My CV</button>
        How to contact me<button className="bg-black">Hit me up</button>
      </div>
    </div>
  );
}

export default Home;
