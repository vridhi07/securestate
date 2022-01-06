const HistoryTab = () => {
  return (
    <div className="w-full  max-w-5.5 flex flex-col mx-auto">
      <section className="grid grid-cols-10 justify-center items-center text-center">
        <div className="col-span-3 ">Date</div>
        <div className="col-span-3 ">Event</div>
        <div className="col-span-4 ">Activity Description</div>
      </section>
      <div className="w-full mt-3 border border-gray-400 h-44  border-t-0">
        {[1, 2, 3, 4, 5].map((item, index) => {
          return (
            <article
              key={index}
              className={`${
                index === 0 ? "border-t tableAsset" : " border-t-2 tableAsset"
              }`}
            >
              <div className="col-span-3 ">Date</div>
              <div className="col-span-3 ">Event</div>
              <div className="col-span-4 ">Activity Description</div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default HistoryTab;
