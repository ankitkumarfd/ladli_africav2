import React from "react";

function Photogrid({ bgImage, className, heading }) {
  return (
    <section className={` container mx-auto px-4 my-12 ${className}`}>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-br from-blue-300 to-blue-800 bg-clip-text text-transparent">
          {heading}
        </h2>
      </div>

      <div className="w-full h-screen flex items-center justify-center mb-4">
        <div className="grid h-screen w-full grid-cols-6 grid-row-12 md:grid-cols-6 md:grid-rows-none lg:grid-cols-10 lg:grid-rows-6 gap-2 lg:gap-4 cursor-pointer">
          {bgImage?.map((img) => (
            <div
              key={img.id}
              style={{ backgroundImage: `url(${img.bg})` }}
              className={`${img.classes}`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Photogrid;
