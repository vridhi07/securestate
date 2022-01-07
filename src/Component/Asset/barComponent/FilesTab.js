import React from "react";

const FilesTab = () => {
  return (
    <div className="w-full flex flex-col mx-auto">
      <section className="grid grid-cols-10 justify-center items-center text-center font-bold text-gray-text-3  uppercase">
        <div className="col-span-3 ">
          <h2>File</h2>
        </div>
        <div className="col-span-3 ">
          <h2>date uploaded</h2>
        </div>
        <div className="col-span-4 ">
          <h2>document description</h2>
        </div>
      </section>
      <div className="w-full mt-3 border border-gray-400 text-gray-text-4 border-t-0">
        {[1, 2, 3, 4, 5].map((item, index) => {
          return (
            <article
              key={index}
              className={`${
                index === 0 ? "border-t tableAsset" : " border-t-2 tableAsset"
              } `}
            >
              <div className="col-span-3 ">Architecture Diagram</div>
              <div className="col-span-3 ">11.21.21</div>
              <div className="col-span-4 ">
                Diagram of application components
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default FilesTab;
