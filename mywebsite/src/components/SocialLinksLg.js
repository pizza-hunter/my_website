import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/*
  Side bar for socials links on large screens
*/
const SocialLinksLg = () => {
  return (
    <div className="invisible md:visible md:relative ">
      <ul className="md:fixed md:left-2 md:text-2xl ">
        <li className="md:pb-10 ">
          <IconLink link="https://github.com/pizza-hunter" icon={faGithub} />
        </li>
        <li className="md:border-r-2 md:w-3 md:pt-28"></li>
        <li className="md:py-10">
          <IconLink link="mailto:huntergreenaus@gmail.com" icon={faEnvelope} />
        </li>
        <li className="md:border-r-2 md:w-3 md:pt-28"></li>
        <li className="md:pt-10">
          <IconLink
            link="https://www.linkedin.com/in/hunter-green-5367631b3/"
            icon={faLinkedin}
          />
        </li>
      </ul>
    </div>
  );
};

const IconLink = (props) => {
  return (
    <a
      href={props.link}
      rel="noreferrer"
      target="_blank"
      className="md:hover:text-slate-300 md:transition-all"
    >
      <FontAwesomeIcon icon={props.icon} />
    </a>
  );
};

export default SocialLinksLg;
