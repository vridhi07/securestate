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
const Details = () => {
  const {
    state: { id },
  } = useLocation();
  const dispatch = useDispatch();
  const { assetDetails } = useSelector((state) => state?.assetDetails);
  const [details, setDetails] = useState();
  useEffect(() => {
    dispatch(action.getAssetDetailsRequest(id));
  }, []);
  const [assetForm, setAssetForm] = useState();

  useEffect(() => {
    if (details?.asset_name) {
      setAssetForm({
        assetName: details.asset_name,
        assetType: details.asset_type,
        assetStatus: details.asset_name,
        additionalINfo: details.additional_details,
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
        <button
          className="bg-gray-cus tracking-wide  text-gray-300 py-2 px-8 capitalize rounded-sm
          "
        >
          edit asset
        </button>
      </section>
      <form className="flex flex-col">
        <section className="flex  lg:w-2/4  lg:mx-auto sm:w-2/3 sm:mx-auto items-center">
          <div className="w-full mr-4">
            {assetForm?.assetName && (
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                required
                name="assetName"
                id="assestName"
                size="small"
                fullWidth
                defaultValue={assetForm?.assetName}
                value={assetForm?.assetName}
                onChange={handleChange}
                disabled={true}
              />
            )}
          </div>
          <div className=" w-full">
            <FormControl fullWidth>
              <InputLabel id="assetPriority">Priority</InputLabel>
              <Select
                labelId="assetPriority"
                value=""
                label="Priority"
                id="assetPriority"
                name="assetPriority"
                size="small"
                // onChange={handleChange}
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
              <InputLabel id="assetType">AssetType</InputLabel>
              {/* {console.log(assetForm?.assetType, "9009090909")} */}
              {assetForm?.assetType && (
                <Select
                  labelId="assetType"
                  // value={age}
                  label="Asset Type"
                  name="assetType"
                  id="assetType"
                  size="small"
                  defaultValue={assetForm?.assetType}
                  value={assetForm?.assetType}
                  onChange={handleChange}
                  disabled={true}
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
                disabled={true}
                // onChange={handleChange}
                // defaultValue={assetForm?.assetStatus}
                // value={assetForm?.assetStatus}
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
            defaultValue={assetForm?.additionalINfo}
            value={assetForm?.additionalINfo}
            onChange={handleChange}
            disabled={true}
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
            name="termsAndCondition"
            id="termsAndCondition"
            disabled={true}
          />
        </section>
      </form>

      <section className="ml-auto mt-10">
        <button className="py-2 px-8 bg-red-500 text-white">
          Delete Asset
        </button>
      </section>
    </div>
  );
};

export default Details;
