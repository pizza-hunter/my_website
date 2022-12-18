const ButtonLink = (props) => {
  var animationStyle, buttonStyle;
  if (props.animation === undefined) {
    animationStyle = " button--swipe ";
  } else {
    animationStyle = "button--" + props.animation;
  }
  /*
    Button colour styles
    - classic (default)
    - dark
    - accent
  */
  if (props.colour === undefined || props.colour === "") {
    buttonStyle = " button--classic ";
  } else {
    buttonStyle = "button--" + props.colour;
  }

  return (
    <a href={props.link} target="_blank" rel="noreferrer" className="font-bold">
      <button className={"button px-10 py-3" + animationStyle + buttonStyle}>
        <span className="text-xl font-semibold">{props.text}</span>
      </button>
    </a>
  );
};

export default ButtonLink;
