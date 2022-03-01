import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import SingleSubscriber from "./SingleSubcriber";
import AddSubscription from "./AddSubscription";
import DeleteModal from "../Common/DeleteModal";
import { useSelector, useDispatch } from "react-redux";
import * as action from "../../Redux/action";
import * as roles from "../../constantData/Roles";
const Subscription = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const { selectedCompany } = useSelector((state) => state?.company);
  const { userDetails, userRole } = useSelector((state) => state?.user);
  const { allAsset } = useSelector((state) => state.Assets);
  const { SubscriptionData } = useSelector((state) => state?.subscriber);
  // console.log(SubscriptionData);
  const getCompanyId = (role) => {
    if (role === "superAdmin") {
      return selectedCompany;
    }
    return userDetails?.company_id._id;
  };
  const company_id = getCompanyId(userRole);
  const [subscriptionData, setSubscriptionData] = useState([]);
  const [isSubscriptionOpen, setIsSubscriptionOpen] = useState(false);
  // console.log(allAsset);
  const [subscribeForm, setSubscribeForm] = useState({
    subscription: "",
    asset: "",
    start_date: new Date(),
    end_date: new Date(),
    monthly_price: "",
    comments: "",
  });

  const [selectedId, setSelectedId] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModal] = useState(false);
  // console.log(company_id);
  //  isDeleteModalOpen,
  //   closeDeleteModal,
  //   handleDelete,
  const closeDeleteModal = () => {
    setSelectedId(null);
    setIsDeleteModal(false);
  };

  const handleDelete = () => {
    // console.log("deleted");
    // console.log(selectedId);
    dispatch(
      action.deleteSubscriptionRequest({
        company_id,
        subscriptionId: selectedId,
      })
    );
    closeDeleteModal();
  };

  const openDeleteModal = (id) => {
    // console.log(id);
    setSelectedId(id);
    setIsDeleteModal(true);
  };
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
  // * functions for filter
  const getFilterData = (data, searchOption) => {
    let temData = [...data];
    if (searchOption) {
      temData = temData.filter(
        (item) =>
          item?.asset?.asset_name?.startsWith(searchOption) ||
          item?.asset?.asset_name?.toLowerCase().startsWith(searchOption) ||
          item?.asset?.status?.toLowerCase().startsWith(searchOption)
      );
    }

    return temData;
  };

  // !Filter Data
  let filterData;
  if (subscriptionData) {
    filterData = getFilterData(subscriptionData, search);
  }

  // console.log(filterData);
  useEffect(() => {
    if (company_id) {
      dispatch(action.getSubscriptionListRequest(company_id));
    }
  }, [company_id]);
  useEffect(() => {
    if (company_id) {
      dispatch(action.getAllAssetListRequest(company_id));
    }
  }, [company_id]);

  useEffect(() => {
    setSubscriptionData([...SubscriptionData]);
  }, [SubscriptionData]);
  let SubscriptionAccess;
  if (userRole) {
    SubscriptionAccess = roles.showFilter(userRole);
  }
  // console.log(SubscriptionAccess);
  return (
    <div className="mt-[5rem] mb-5">
      <header className="mx-auto mb-2 flex w-95.5 max-w-5xl items-center justify-between px-3">
        <section>
          <h2 className="text-xl font-bold  tracking-wider text-orange-cus-1">
            Subscriptions
          </h2>
        </section>
        <section className={`  flex items-center`}>
          <div
            className={`flex h-11 w-60 items-center  justify-start rounded-lg bg-white pr-1 pl-4`}
          >
            <SearchIcon />
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-3xl border-0  py-1 pl-2 focus:bg-none focus:outline-none focus:ring-0"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          {SubscriptionAccess && (
            <div className="mr-2 ml-[3%] md:mr-8">
              <button
                onClick={openSubscription}
                className={`grid h-12 w-12 cursor-pointer place-content-center rounded-full border-none bg-orange-cus-1 shadow-lg duration-300 ease-in  hover:bg-orange-600 hover:shadow-xl`}
              >
                <AddIcon sx={{ color: "white" }} />
              </button>
            </div>
          )}
        </section>
      </header>
      <div
        //  className="mt-3 h-[250px]  overflow-y-auto border border-gray-700"
        className="mx-auto w-95.5 max-w-5xl"
      >
        <div className=" grid w-full min-w-[600px] grid-cols-10 rounded-md py-2 px-6 text-[#737275]">
          <div className=" col-span-5 min-w-[500px]  ">
            <div className="flex items-center justify-between">
              <h4>Subscription ID</h4>
              <h4 className={`${SubscriptionData.length > 0 && "md:pl-28"}`}>
                Asset
              </h4>
              <h4>Status</h4>
            </div>
          </div>
          <div className="col-span-3 min-w-[200px]"></div>
          <div className=" col-span-2 text-right">
            {SubscriptionAccess ? <h4>Remove</h4> : <h4></h4>}
          </div>
        </div>
        <div className="min-h-[100%] px-3 py-2 text-[#737275]">
          {filterData &&
            filterData.map((item) => {
              return (
                <SingleSubscriber
                  key={item._id}
                  subscriber={item}
                  openDeleteModal={openDeleteModal}
                  SubscriptionAccess={SubscriptionAccess}
                />
              );
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
      <DeleteModal
        handleDelete={handleDelete}
        closeDeleteModal={closeDeleteModal}
        isDeleteModalOpen={isDeleteModalOpen}
      />
    </div>
  );
};

export default Subscription;
