import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class JobTabs extends React.Component {
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
    var activeTab = "";
    var headers = this.props.jobs.map((job, it) => {
      it == this.state.index
        ? (activeTab = "active-job-tab")
        : (activeTab = " ");
      return (
        <JobHeader
          key={it}
          value={it}
          onHeaderClick={this.handleSelect}
          title={job.shortName}
          active={activeTab}
        />
      );
    });
    return (
      <div className="md:flex">
        <div
          id="accordionNav"
          className="flex border-b-2 border-b-basic-h md:block md:border-b-0 md:border-r-2 md:border-r-basic-h"
        >
          {headers}
        </div>
        <div id="accordionBody" className="md:pl-5">
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

class JobHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.value,
    };
  }

  handleClick = () => {
    this.props.onHeaderClick(this.props.value);
  };
  render() {
    return (
      <div
        className={
          this.props.active +
          " bg-basic-l bg-opacity-70 text-basic-a text-lg py-1 px-5 mr-1 rounded-t-lg md:mr-0 md:mb-1 md:rounded-t-none md:rounded-l-lg md:py-1"
        }
      >
        <button value={this.props.value} onClick={this.props.onHeaderClick}>
          {this.props.title}
        </button>
      </div>
    );
  }
}

const JobBody = (props) => {
  var tasks = props.tasks.map((task) => (
    <li className="pt-2 pl-5" key={task.toString()}>
      {task}
    </li>
  ));
  return (
    <div className="text-basic-a py-1 md:py-0">
      <div className="underline-offset-2">
        <h3 className="text-lg font-bold">
          {props.jobTitle + " "}

          <FontAwesomeIcon icon="at" className="text-basic-h pr-1" />
          <a
            className="text-basic-h"
            target="_blank"
            rel="noreferrer"
            href={props.companyLink}
          >
            {props.companyName}
          </a>
        </h3>
      </div>
      <h6 className="text-sm self-end py-2">{props.period}</h6>
      <ul
        id="job-task-list"
        className="pl-5 relative border-t-2 border-basic-l text-md"
      >
        {tasks}
      </ul>
    </div>
  );
};

export default JobTabs;
