const FileButtonLink = (props) => {
  return (
    <a href={props.link} target="_blank" rel="noreferrer" className="font-bold">
      <button className="border-2 border-basic-h font-bold rounded-md px-4 py-2 text-basic-h  hover:bg-basic-l hover:border-basic-y hover:bg-opacity-20 duration-100">
        {props.text}
      </button>
    </a>
  );
};

export default FileButtonLink;
