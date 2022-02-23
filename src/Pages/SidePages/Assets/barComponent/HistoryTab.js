import { useEffect, useState } from "react";
import HistoryForm from "../../../../Component/Asset/HistoryForm";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Loader from "../../../../Component/Common/PentestLoader";
import { useLocation } from "react-router-dom";
import * as action from "../../../../Redux/action/index";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import * as roles from "../../../../constantData/Roles";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import { IoTrashOutline } from "react-icons/io5";
import DeleteModal from "../../../../Component/Common/DeleteModal";
const HistoryTab = () => {
  const location = useLocation();
  let pageId = location.state.id;
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [historyEvent, setHistoryEvent] = useState({
    date: new Date(),
    event: "",
    description: "",
  });
  const [historyPageNumber, setHistoryPageNumber] = useState(1);

  const [isEdit, setIsEdit] = useState(false);

  const [selectedId, setSelectedId] = useState(null);
  // console.log(selectedId);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const dispatch = useDispatch();

  const { isLoading, historyDetails, addMessage, addLoading } = useSelector(
    (state) => state?.assetHistory
  );
  const userRole = useSelector((state) => state?.user?.userRole);
  // console.log(historyDetails);
  //   isDeleteModalOpen,
  // closeDeleteModal,
  // handleDelete,
  const openDeleteModal = (id) => {
    setIsDeleteModalOpen(true);
    setSelectedId(id);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedId(null);
  };
  const handleDelete = () => {
    // console.log(selectedId, "deleted");
    dispatch(
      action.deleteHistoryRequest({ pageId, historyPageNumber, selectedId })
    );
    closeDeleteModal();
  };

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
    setSelectedId(null);
    setHistoryEvent({
      ...historyEvent,
      date: new Date(),
      event: "",
      description: "",
    });
    if (isEdit) {
      setIsEdit(false);
    }
  };

  const openEdit = (id) => {
    // console.log(id);
    const singleData = historyDetails?.data?.find((item) => item._id === id);
    // console.log(singleData);
    setHistoryEvent({
      ...historyEvent,
      date: new Date(singleData.date),
      event: singleData.event,
      description: singleData.activity_description,
    });
    setIsHistoryOpen(true);
    setIsEdit(true);
    setSelectedId(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { date, event, description } = historyEvent;
    if (!isEdit) {
      console.log("submit");
      const data = {
        date,
        event,
        description,
      };
      console.log(data);
      dispatch(action.AddHistoryRequest({ data, pageId, historyPageNumber }));
    }
    if (isEdit) {
      console.log("edit");
      const data = {
        date,
        event,
        description,
        eventId: selectedId,
      };
      dispatch(
        action.updateHistoryRequest({ data, pageId, historyPageNumber })
      );
    }
    closeHistoryModal();
  };

  useEffect(() => {
    dispatch(action.GetHistoryRequest({ pageId, historyPageNumber }));
  }, [historyPageNumber]);
  let assetAccess;
  if (userRole) {
    assetAccess = roles.AssetAccess(userRole);
  }
  return (
    <div className="mx-auto flex w-full flex-col">
      <section className="mb-3 flex items-center justify-end md:absolute md:top-4 md:right-0">
        {assetAccess && (
          <button
            className="hover flex items-center gap-1  rounded-md bg-gray-cus py-2 px-5 capitalize tracking-wide text-white
         "
            onClick={openHistoryModal}
            disabled={addLoading}
          >
            <AddIcon />
            <span>add event</span>
          </button>
        )}
      </section>
      <div className="md:absolute md:top-4 md:left-0">
        <h4 className="text-4xl tracking-wide  text-orange-cus-1">Asset</h4>
      </div>

      <section className=" grid grid-cols-12 items-center justify-center border-b-2 border-orange-cus-1 text-center font-bold  uppercase  text-gray-text-3 md:mx-16">
        <div className="col-span-3 ">
          <h4>Date</h4>
        </div>
        <div className="col-span-3 ">
          <h4>Event</h4>
        </div>
        <div className="col-span-4 text-left">
          <h4>Activity Description</h4>
        </div>
        <div className=" col-span-2"></div>
      </section>

      <div className="mb-10 ">
        {isLoading ? (
          <Loader />
        ) : (
          <div>
            <div className="min-w-[400px] text-gray-text-4">
              {historyDetails?.data &&
                historyDetails?.data.map((item, index) => {
                  return (
                    <article
                      key={item._id}
                      className={`grid grid-cols-12  rounded-sm py-2 px-2 text-center md:mx-16 ${
                        index % 2 == 0 && "bg-white"
                      }`}
                    >
                      <div className="col-span-3 ">
                        {moment(item.date).format("l")}
                      </div>
                      <div className="col-span-3 max-w-[290px] overflow-hidden ">
                        {item.event}
                      </div>
                      <div className=" col-span-4 max-w-[373px]  overflow-x-hidden pr-2  text-center ">
                        {item.activity_description}
                      </div>
                      <div className=" col-span-2 ">
                        {assetAccess && (
                          <div className="flex items-center gap-4">
                            <IconButton
                              sx={{ color: "#606060" }}
                              onClick={() => openEdit(item?._id)}
                            >
                              <ModeEditOutlineIcon />
                            </IconButton>
                            <IconButton
                              onClick={() => openDeleteModal(item._id)}
                            >
                              <IoTrashOutline className="text-lg text-red-500" />
                            </IconButton>
                          </div>
                        )}
                      </div>
                    </article>
                  );
                })}
            </div>
            {historyDetails?.total > 1 && (
              <div className="mt-4 pb-5">
                <Stack spacing={2}>
                  <Pagination
                    count={historyDetails?.total}
                    variant="outlined"
                    onChange={handleHistoryPageNumber}
                    // color="primary"
                    page={historyPageNumber}
                    sx={{
                      "& .Mui-selected": {
                        backgroundColor: "#F27931 !important",
                        color: "white",
                        border: "none",
                      },
                      "& .MuiPaginationItem-page ": {
                        bgcolor: "#B4AFAF",
                        color: "white",
                        border: "none",
                      },
                      "& .MuiPaginationItem-previousNext": {
                        border: "none",
                      },
                    }}
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
        isEdit={isEdit}
      />
      <DeleteModal
        isDeleteModalOpen={isDeleteModalOpen}
        closeDeleteModal={closeDeleteModal}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default HistoryTab;
