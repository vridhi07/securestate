import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import SingleSubscriber from "./SingleSubcriber";
import AddSubscription from "./AddSubscription";
import { useSelector, useDispatch } from "react-redux";
import * as action from "../../Redux/action";
const Subscription = () => {
  const dispatch = useDispatch();

  const { selectedCompany } = useSelector((state) => state?.company);
  const { userDetails } = useSelector((state) => state?.user);
  const { allAsset } = useSelector((state) => state.Assets);
  const getCompanyId = (role) => {
    if (role === "superAdmin") {
      return selectedCompany;
    }
    return userDetails?.company_id._id;
  };
  const company_id = getCompanyId(userDetails?.role);

  const [isSubscriptionOpen, setIsSubscriptionOpen] = useState(false);

  const [subscribeForm, setSubscribeForm] = useState({
    subscription: "",
    asset: "",
    start_date: new Date(),
    end_date: new Date(),
    monthly_price: "",
    comments: "",
  });

  const handleSubscribeForm = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setSubscribeForm({ ...subscribeForm, [name]: value });
  };
  const handleDate = (newValue, type) => {
    if (type === "start_date") {
      setSubscribeForm({ ...subscribeForm, start_date: newValue });
    }
    if (type === "end_date") {
      setSubscribeForm({ ...subscribeForm, end_date: newValue });
    }
  };
  const openSubscription = () => {
    setIsSubscriptionOpen(true);
  };
  const closeSubscription = () => {
    setIsSubscriptionOpen(false);
    setSubscribeForm({
      ...subscribeForm,
      subscription: "",
      asset: "",
      start_date: new Date(),
      end_date: new Date(),
      monthly_price: "",
      comments: "",
    });
  };

  const submitSubscription = (e) => {
    e.preventDefault();
    const data = {
      ...subscribeForm,
      company_id,
    };
    // console.log(data);
    dispatch(action.addSubscriptionRequest({ data, company_id }));
    closeSubscription();
  };

  useEffect(() => {
    if (company_id) {
      dispatch(action.getSubscriptionListRequest(company_id));
    }
  }, [company_id]);

  return (
    <div className="mt-[5rem] mb-5">
      <header className="flex justify-between items-center min-w-[400px]  pl-[2.5%] ">
        <section>
          <h2 className="font-bold text-lg text-gray-700">Subscriptions</h2>
        </section>
        <section className="flex items-center">
          <div className="border px-1 border-gray-600  h-11 w-52  rounded-3xl flex items-center justify-start">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search"
              className="w-full py-1 pl-2  rounded-3xl border-0 focus:bg-none focus:outline-none focus:ring-0"
            />
          </div>
          <div className="md:mr-8 mr-2 ml-[3%]">
            <button
              onClick={openSubscription}
              className="w-12 h-12 ease-in duration-300 border-none rounded-full bg-orange-cus-1 grid place-content-center shadow-lg  cursor-pointer hover:shadow-xl"
            >
              <AddIcon sx={{ color: "white" }} />
            </button>
          </div>
        </section>
      </header>
      <div className="border border-gray-700  mt-3 h-[250px] overflow-y-auto">
        <div className="min-h-[100%] flex flex-col px-3 py-2">
          {[1, 2, 3, 4].map((item) => {
            return <SingleSubscriber key={item} />;
          })}
        </div>
      </div>
      <AddSubscription
        isSubscriptionOpen={isSubscriptionOpen}
        closeSubscription={closeSubscription}
        subscribeForm={subscribeForm}
        handleSubscribeForm={handleSubscribeForm}
        handleDate={handleDate}
        submitSubscription={submitSubscription}
        allAsset={allAsset}
      />
    </div>
  );
};

export default Subscription;
