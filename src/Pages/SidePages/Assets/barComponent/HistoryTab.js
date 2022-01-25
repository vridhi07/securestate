import { useEffect, useState } from "react";
import HistoryForm from "../../../../Component/Asset/HistoryForm";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Loader from "../../../../Component/Common/PentestLoader";
import { useLocation } from "react-router-dom";
import * as action from "../../../../Redux/action/index";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
const HistoryTab = () => {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [historyEvent, setHistoryEvent] = useState({
    date: new Date(),
    event: "",
    description: "",
  });
  const [historyPageNumber, setHistoryPageNumber] = useState(1);
  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  const { isLoading, historyDetails, addMessage, addLoading } =
    state?.assetHistory;
  // console.log(historyDetails);
  const location = useLocation();
  let pageId = location.state.id;
  const handleEventChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    console.log(name);
    setHistoryEvent({ ...historyEvent, [name]: value });
  };
  const handleHistoryPageNumber = (e, i) => {
    setHistoryPageNumber(i);
  };
  const handleDate = (e) => {
    setHistoryEvent({ ...historyEvent, date: e });
  };

  const openHistoryModal = () => {
    setIsHistoryOpen(true);
  };

  const closeHistoryModal = () => {
    setIsHistoryOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    const { date, event, description } = historyEvent;
    const data = {
      date,
      event,
      description,
    };
    console.log(data);
    dispatch(action.AddHistoryRequest({ data, pageId }));

    closeHistoryModal();
    setHistoryEvent({
      ...historyEvent,
      date: new Date(),
      event: "",
      description: "",
    });
  };

  useEffect(() => {
    dispatch(action.GetHistoryRequest({ pageId, historyPageNumber }));
  }, [historyPageNumber, addMessage]);
  return (
    <div className="w-full flex flex-col mx-auto">
      <section className="flex mb-3 items-center justify-end">
        <button
          className="bg-gray-cus tracking-wide  text-gray-300 py-2 px-8 capitalize rounded-sm
         "
          onClick={openHistoryModal}
          disabled={addLoading}
        >
          add event
        </button>
      </section>

      <section className="grid grid-cols-10 justify-center items-center text-center font-bold text-gray-text-3  uppercase ">
        <div className="col-span-3 ">
          <h4>Date</h4>
        </div>
        <div className="col-span-3 ">
          <h4>Event</h4>
        </div>
        <div className="col-span-4 ">
          <h4>Activity Description</h4>
        </div>
      </section>
      <div className="mb-10">
        {isLoading ? (
          <Loader />
        ) : (
          <div>
            <div className=" min-w-[400px] mt-3 border border-gray-400 text-gray-text-4 border-t-0">
              {historyDetails?.data &&
                historyDetails?.data.map((item, index) => {
                  return (
                    <article
                      key={item._id}
                      className={`${
                        index === 0
                          ? "border-t tableAsset"
                          : " border-t-2 tableAsset"
                      } `}
                    >
                      <div className="col-span-3 ">
                        {moment(item.date).format("l")}
                      </div>
                      <div className="col-span-3 ">{item.event}</div>
                      <div className="col-span-4 pr-2 ">
                        {item.activity_description}
                      </div>
                    </article>
                  );
                })}
            </div>
            {historyDetails?.total > 1 && (
              <div className="pb-5 mt-4">
                <Stack spacing={2}>
                  <Pagination
                    count={historyDetails?.total}
                    variant="outlined"
                    onChange={handleHistoryPageNumber}
                    color="primary"
                    page={historyPageNumber}
                  />
                </Stack>
              </div>
            )}
          </div>
        )}
      </div>

      <HistoryForm
        isHistoryOpen={isHistoryOpen}
        closeHistoryModal={closeHistoryModal}
        historyEvent={historyEvent}
        handleEventChange={handleEventChange}
        handleDate={handleDate}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default HistoryTab;
