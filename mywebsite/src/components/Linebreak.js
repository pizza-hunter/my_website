/* 
Creates a linebreak
*/
function Linebreak() {
  return (
    <div className="flex md:pt-24 justify-evenly">
      <div className="md:border-b md:w-1/12 "></div>
      <div className="md:w-1/12 "></div>
      <div className="md:border-b md:w-2/3 "></div>
      <div className="md:w-1/12 "></div>
      <div className="md:border-b md:w-2/3 "></div>
      <div className="md:w-1/12 "></div>
      <div className="md:border-b md:w-1/12 "></div>
    </div>
  );
}

export default Linebreak;
