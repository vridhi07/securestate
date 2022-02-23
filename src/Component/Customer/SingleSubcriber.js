import React from "react";
import { IoTrashOutline } from "react-icons/io5";
import IconButton from "@mui/material/IconButton";
const SingleSubscriber = ({
  subscriber = [],
  openDeleteModal,
  SubscriptionAccess,
}) => {
  return (
    <div className="mb-3 grid w-full min-w-[600px] grid-cols-10 items-center rounded-md bg-white py-5 px-4 ">
      <div className="col-span-5 min-w-[500px]">
        <div className="flex items-center justify-between">
          <h4>{subscriber?._id} </h4>
          <h4>{subscriber?.asset?.asset_name}</h4>
          <h4
            className={` capitalize ${
              subscriber?.asset?.status === "active"
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {subscriber?.asset?.status}
          </h4>
        </div>
      </div>
      <div className="col-span-3 min-w-[200px]"></div>
      <div className=" col-span-2 text-right">
        {SubscriptionAccess ? (
          <div className="flex w-full justify-end">
            <IconButton
              color="error"
              sx={{ mr: 2 }}
              onClick={() => openDeleteModal(subscriber?._id)}
            >
              <IoTrashOutline />
            </IconButton>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      {/* <div className="flex flex-col">
        <section className="flex ">
          <h4>Subscription : {subscriber.subscription}</h4>
        </section>
        <section className="flex ">
          <h4>Asset : {subscriber.asset}</h4>
        </section>
        <section className="flex ">
          <h4>Status :</h4>
        </section>
      </div> */}
    </div>
  );
};

export default SingleSubscriber;
