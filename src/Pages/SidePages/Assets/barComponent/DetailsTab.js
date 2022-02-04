import { useEffect, useState } from "react";
import { Priority, Status } from "../../../../constantData/AssestTabInfo";
// import { AssetType } from "../../../constantData/addAssetInfo";
import { AssetType } from "../../../../constantData/addAssetInfo";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../../../Redux/action";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import Loader from "../../../../Component/Common/PentestLoader";
const Details = () => {
  const {
    state: { id },
  } = useLocation();
  const dispatch = useDispatch();
  const { assetDetails, isLoading } = useSelector(
    (state) => state?.assetDetails
  );
  const [details, setDetails] = useState();
  const [assetForm, setAssetForm] = useState();
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const submit = () => {
    // console.log("submit");
    const data = {
      id,
      asset_name: assetForm?.assetName,
      asset_type: assetForm?.assetType,
      status: assetForm?.status,
      additional_details: assetForm?.additionalINfo,
      termsAndConditions: assetForm?.termsAndConditions,
    };
    console.log(data);
    dispatch(action.updateAssetDetailsRequest({ editData: data, id }));
    setIsEdit(false);
  };
  useEffect(() => {
    dispatch(action.getAssetDetailsRequest(id));
  }, []);

  useEffect(() => {
    if (details?.asset_name) {
      setAssetForm({
        assetName: details.asset_name,
        assetType: details.asset_type,
        assetStatus: details.asset_name,
        additionalINfo: details.additional_details,
        status: details.status,
        priority: details.priority,
        termsAndConditions: details.termsAndConditions,
      });
    }
  }, [details]);
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setAssetForm({ ...assetForm, [name]: value });
  };
  useEffect(() => {
    setDetails(assetDetails);
  }, [assetDetails]);
  // console.log("=====11", assetForm);
  // console.log(assetForm?.assetType);
  // console.log(AssetType);
  return (
    <div className="mt-2   flex flex-col  w-full  text-center  ">
      <section className="flex items-center  mb-3 justify-end">
        <div className="flex items-center">
          {/* <button
            className="bg-gray-cus tracking-wide  text-gray-300 py-2 px-8 capitalize rounded-sm
          "
            type="button"
            onClick={submit}
          > */}
          {isEdit && (
            <button
              className="bg-gray-cus tracking-wide  text-gray-300 py-2 px-8 capitalize rounded-sm mr-3
          "
              type="button"
              onClick={submit}
            >
              Save
            </button>
          )}

          <button
            className="bg-gray-cus tracking-wide  text-gray-300 py-2 px-8 capitalize rounded-sm
          "
            type="button"
            onClick={handleEdit}
          >
            {isEdit ? "cancel" : "edit asset"}
          </button>
        </div>
      </section>
      {isLoading ? (
        <Loader />
      ) : (
        <form className="flex flex-col">
          <section className="flex  lg:w-2/4  lg:mx-auto sm:w-2/3 sm:mx-auto items-center">
            <div className="w-full mr-4">
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                required
                name="assetName"
                id="assestName"
                size="small"
                fullWidth
                // defaultValue={assetForm?.assetName}
                value={assetForm?.assetName}
                onChange={handleChange}
                disabled={isEdit ? false : true}
              />
            </div>
            <div className="w-full">
              <FormControl fullWidth>
                <InputLabel id="assetPriority">Priority</InputLabel>
                <Select
                  labelId="assetPriority"
                  value=""
                  label="Priority"
                  id="assetPriority"
                  name="priority"
                  size="small"
                  value={assetForm?.priority}
                  onChange={handleChange}
                  disabled={isEdit ? false : true}
                >
                  {Priority.map((item) => {
                    return (
                      <MenuItem value={item} key={item}>
                        {item}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </div>
          </section>
          <section className="flex lg:w-2/4  lg:mx-auto sm:w-2/3 sm:mx-auto  mt-4 items-center ">
            <div className=" w-[50%] mr-4">
              <FormControl fullWidth>
                <InputLabel id="assetType">Asset Type</InputLabel>
                {/* {console.log(assetForm?.assetType, "9009090909")} */}
                {assetForm?.assetType && (
                  <Select
                    labelId="assetType"
                    // value={age}
                    label="Asset Type"
                    name="assetType"
                    id="assetType"
                    size="small"
                    // defaultValue={assetForm?.assetType}
                    value={assetForm?.assetType}
                    onChange={handleChange}
                    disabled={isEdit ? false : true}
                  >
                    {AssetType.map((item) => {
                      // console.log(item);
                      return (
                        <MenuItem value={item} key={item}>
                          {item}
                        </MenuItem>
                      );
                    })}
                  </Select>
                )}
              </FormControl>
            </div>
            <div className=" w-[50%]">
              <FormControl fullWidth>
                <InputLabel id="assetStatus">Status</InputLabel>
                <Select
                  labelId="assetStatus"
                  value={""}
                  label="Status"
                  id="assetStatus"
                  name="assetStatus"
                  size="small"
                  name="status"
                  disabled={isEdit ? false : true}
                  onChange={handleChange}
                  // defaultValue={assetForm?.assetStatus}
                  value={assetForm?.status}
                >
                  {Status.map((item) => {
                    return (
                      <MenuItem value={item} key={item}>
                        {item}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </div>
          </section>

          <section className="mt-8 flex flex-col lg:w-2/4 sm:w-2/3 sm:mx-auto lg:mx-auto items-center ">
            <TextField
              label="Additional Details (Frameworks,Backend,Frontend,DB,APIs etc.)"
              variant="outlined"
              required
              size="small"
              fullWidth
              multiline
              rows={5}
              name="additionalINfo"
              id="additionalINfo"
              // value={""}
              // defaultValue={assetForm?.additionalINfo}
              value={assetForm?.additionalINfo}
              onChange={handleChange}
              disabled={isEdit ? false : true}
            />
          </section>

          <section className="mt-4 flex flex-col lg:w-2/4  sm:w-2/3 sm:mx-auto lg:mx-auto  items-center ">
            <TextField
              id="outlined-basic"
              label="Terms & Condition"
              variant="outlined"
              required
              size="small"
              fullWidth
              multiline
              rows={5}
              name="termsAndConditions"
              id="termsAndCondition"
              onChange={handleChange}
              value={assetForm?.termsAndConditions}
              disabled={isEdit ? false : true}
            />
          </section>
        </form>
      )}

      {/* <section className="ml-auto mt-10">
        <button className="py-2 px-8 bg-red-500 text-white">
          Delete Asset
        </button>
      </section> */}
    </div>
  );
};

export default Details;
