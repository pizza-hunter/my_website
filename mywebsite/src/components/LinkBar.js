import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/*
  Side bar for socials links 
*/
const LinkBar = () => {
  return (
    <div className="invisible md:visible relative ">
      <ul className="fixed left-2 text-2xl ">
        <li className="pb-10 ">
          <a
            href="https://github.com/pizza-hunter"
            rel="noreferrer"
            target="_blank"
            className="hover:text-slate-300 transition-all"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li className="border-r-2 w-3 pt-28"></li>
        <li className="py-10">
          <a
            href="mailto:huntergreenaus@gmail.com"
            rel="noreferrer"
            target="_blank"
            className="hover:text-slate-300 transition-all"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
        <li className="border-r-2 w-3 pt-28"></li>
        <li className="pt-10">
          <a
            href="https://www.linkedin.com/in/hunter-green-5367631b3/"
            rel="noreferrer"
            target="_blank"
            className="hover:text-slate-300 transition-all"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LinkBar;
