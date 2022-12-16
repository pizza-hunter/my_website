import ButtonLink from "./ButtonLink";

/*
    Call to action element
    @param: header - heading text
    @param: text - main text
    @param: link - button link
    @param: linkText - Link to be displayed on button
*/
function CallToAction(props) {
  // Display button if defined
  if (props.link !== undefined && props.linkText !== undefined) {
    var button = (
      <div class="pb-8 flex justify-evenly">
        <ButtonLink link={props.link} text={props.linkText} />
      </div>
    );
  }

  return (
    <div className="bg-basic-h rounded-3xl mt-28">
      <div class="px-3">
        <div class="px-3 pb-10">
          <h1 class="text-basic-l text-5xl lg:text-6xl text-shadow-basic text-center pt-10">
            {props.header}
          </h1>
          <p class="text-center pt-10 lg:px-40 text-2xl">{props.text}</p>
        </div>
        {button}
      </div>
    </div>
  );
}

export default CallToAction;
