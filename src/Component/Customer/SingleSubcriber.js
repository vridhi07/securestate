import React from "react";

const SingleSubscriber = ({ subscriber = [] }) => {
  return (
    <div className="border border-gray-700 rounded-md w-full mb-3 py-2 px-2">
      <div className="flex flex-col">
        <section className="flex ">
          <h4>Subscription : {subscriber.subscription}</h4>
        </section>
        <section className="flex ">
          <h4>Asset : {subscriber.asset}</h4>
        </section>
        <section className="flex ">
          <h4>Status :</h4>
        </section>
      </div>
    </div>
  );
};

export default SingleSubscriber;
