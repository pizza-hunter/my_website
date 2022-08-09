const FileButtonLink = (props) => {
  return (
    <div className="bg-basic-h block box">
      <a
        href={props.link}
        target="_blank"
        rel="noreferrer"
        className="px-5 py-5 bg-red-400"
      >
        {props.text}
      </a>
    </div>
  );
};

export default FileButtonLink;
