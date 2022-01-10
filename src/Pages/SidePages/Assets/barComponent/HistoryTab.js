const HistoryTab = () => {
  return (
    <div className="w-full flex flex-col mx-auto">
      <section className="grid grid-cols-10 justify-center items-center text-center font-bold text-gray-text-3  uppercase">
        <div className="col-span-3 ">
          <h2>Date</h2>
        </div>
        <div className="col-span-3 ">
          <h2>Event</h2>
        </div>
        <div className="col-span-4 ">
          <h2>Activity Description</h2>
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
              <div className="col-span-3 ">11.25.21</div>
              <div className="col-span-3 ">Penetration Test</div>
              <div className="col-span-4 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                <a href="#" className="text-sky-500 pl-2 underline">
                  view pentest
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default HistoryTab;
