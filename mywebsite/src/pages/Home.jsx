import React from "react";

const jobs = [
  {
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
  return (
    <div>
      <JobCurtainAccordian jobs={jobs} />
    </div>
  );

  // return (
  //   <div className="px-1">
  //     <div className="flex justify-between">
  //       <div>
  //         <h1 className="text-3xl">Hi, I'm Hunter.</h1>
  //         <p className="pt-3">
  //           I'm a Developer from Adelaide, South Australia and Software
  //           Engineering (Hons) graduate from the University of South Australia,
  //           2021.
  //         </p>
  //       </div>
  //     </div>
  //     <div className="pt-10">
  //       <h1 className="text-2xl">My Experience</h1>
  //       <div className="pt-3">
  //         <Dropdown
  //           jobTitle="Junior Web Developer"
  //           companyName="Blis Web Agency"
  //           period="May, 2021 - June, 2022"
  //           companyLink="https://blisweb.agency/"
  //           tasks={blisTasks}
  //         />
  //         {/* <Dropdown
  //           jobTitle="Systems Analyst (honours intern)"
  //           companyName="Forensic Science South Australia"
  //           companyLink="https://www.agd.sa.gov.au/law-and-justice/forensic-science-sa"
  //           period="March - November, 2021"
  //           tasks={ffsaTasks}
  //         /> */}
  //       </div>
  //     </div>
  //     <div className="pt-10">
  //       <div className="flex justify-between">
  //         <h1 className="text-2xl">More about me</h1>
  //         <img
  //           className="w-20 h-20 rounded-full opacity-80 border-2"
  //           src="./images/profilepic.jpg"
  //         ></img>
  //       </div>
  //       <h1>
  //         I've always enjoyed creating things (my primary school books had more
  //         doodles than words), and computers and the web have always interested
  //         me starting off with Runescape and customising my MySpace page (no you
  //         cannot see it).
  //       </h1>
  //       <p>I love Web Development and enjoy working with Django and React.</p>
  //       <p>
  //         App development is something I'd like to experiment more with,
  //         recently I have been trying out Flutter
  //       </p>
  //       <h1>
  //         Outside of work I watch movies, cook mostly curry and pasta, listen to
  //         music, play games, and play semi-amatuer tennis.
  //       </h1>
  //     </div>
  //     <div className="pt-10">
  //       Here's my Resume<button className="bg-black">My CV</button>
  //       How to contact me<button className="bg-black">Hit me up</button>
  //     </div>
  //   </div>
  // );
}

class JobCurtainAccordian extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      jobs: props.jobs,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect = (e) => {
    this.setState({
      index: e.target.value,
    });
  };

  render() {
    var currentJob = this.state.jobs[this.state.index];

    return (
      <div className="flex ">
        <div id="accordionNav" className="">
          {this.props.jobs.map((job, it) => (
            <JobHeader
              value={it}
              onHeaderClick={this.handleSelect}
              title={job.companyName}
            />
          ))}
        </div>
        <div id="accordionBody">
          <JobBody
            companyName={currentJob.companyName}
            companyLink={currentJob.companyLink}
            jobTitle={currentJob.jobTitle}
            period={currentJob.period}
            tasks={currentJob.tasks}
          />
        </div>
      </div>
    );
  }
}

const JobBody = (props) => {
  return (
    <div className="bg-red-300">
      <h1>
        {props.jobTitle} <a href={props.companyLink}></a> {props.companyName}
      </h1>
      <p>{props.period}</p>
      <ul>{props.tasks}</ul>
    </div>
  );
};

class JobHeader extends React.Component {
  handleClick = () => {
    this.props.onHeaderClick(this.props.value);
  };
  render() {
    return (
      <div className="bg-purple-400 border-black border-2">
        <button value={this.props.value} onClick={this.props.onHeaderClick}>
          {this.props.title}
        </button>
      </div>
    );
  }
}

export default Home;
