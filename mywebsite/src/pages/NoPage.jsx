import React from "react";

function NoPage() {
  return (
    <div className="flex justify-center">
      <div className="w-1/2 bg-basic-l p-10 rounded-lg">
        <h1 className="text-4xl">
          Uh Oh! 404! Looks like the page you requested doesn't exist!
        </h1>
      </div>
    </div>
  );
}

export default NoPage;
