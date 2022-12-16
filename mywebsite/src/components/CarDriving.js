function CarDriving() {
  return (
    <div>
      <div className="flex gap-1 overflow-x-hidden pt-20">
        <img
          alt="buildings decoration"
          src="./images/buildings.svg"
          className="w-1/5 opacity-20"
        ></img>
        <img
          alt="buildings decoration"
          src="./images/buildings.svg"
          className="w-1/5 opacity-20"
        ></img>
        <img
          alt="buildings decoration"
          src="./images/buildings.svg"
          className="w-1/5 opacity-20"
        ></img>
        <img
          alt="buildings decoration"
          src="./images/buildings.svg"
          className="w-1/5 opacity-20"
        ></img>
        <img
          alt="buildings decoration"
          src="./images/buildings.svg"
          className="w-1/5 opacity-20"
        ></img>
      </div>

      <img
        id="car"
        alt="car decoration"
        src="./images/car.svg"
        className="w-1/6 z-10"
      ></img>
      <img
        id="road"
        alt="road decoration"
        src="./images/road.svg"
        className="w-full opacity-20 z-0"
      ></img>
      <script>
        {window.addEventListener(
          "scroll",
          () => {
            document.body.style.setProperty(
              "--scroll",
              window.pageYOffset /
                (document.body.offsetHeight - window.innerHeight)
            );
          },
          false
        )}
      </script>
    </div>
  );
}

export default CarDriving;
