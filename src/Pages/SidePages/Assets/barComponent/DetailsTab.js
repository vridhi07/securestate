import { useEffect, useState } from "react";
import { Priority, Status } from "../../../../constantData/AssestTabInfo";
// import ModeEditIcon from "@mui/icons-material/ModeEdit";
// import { AssetType } from "../../../constantData/addAssetInfo";
import { AssetType } from "../../../../constantData/addAssetInfo";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as roles from "../../../../constantData/Roles";
// import EditIcon from "@mui/icons-material/Edit";
import * as action from "../../../../Redux/action";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Loader from "../../../../Component/Common/PentestLoader";
const Details = () => {
  const {
    state: { id },
  } = useLocation();
  const dispatch = useDispatch();
  const { assetDetails, isLoading } = useSelector(
    (state) => state?.assetDetails
  );
  const userRole = useSelector((state) => state?.user?.userRole);
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
  let assetAccess;
  if (userRole) {
    assetAccess = roles.AssetAccess(userRole);
  }
  // console.log(assetAccess);
  return (
    <div className="mt-2   flex w-full  flex-col  text-center  ">
      <section className="mb-3 flex  items-center justify-end">
        {assetAccess && (
          <div className="flex items-center md:absolute md:top-4 md:right-0">
            {isEdit && (
              <button
                className="hover hover  mr-3 rounded-sm bg-gray-cus py-2 px-8 capitalize tracking-wide text-white
              
          "
                type="button"
                onClick={submit}
              >
                Save
              </button>
            )}

            <button
              className="hover hover flex  items-center rounded-md bg-gray-cus py-2 px-6  capitalize tracking-wide text-white
          "
              type="button"
              onClick={handleEdit}
            >
              {isEdit ? (
                "cancel"
              ) : (
                <span className="flex items-center text-white">
                  <span className="mr-1">
                    <EditIcon />
                  </span>
                  <span>edit asset</span>
                </span>
              )}
            </button>
          </div>
        )}
      </section>
      <div className="md:absolute md:top-4 md:left-0">
        <h4 className="text-4xl tracking-wide  text-orange-cus-1">Asset</h4>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <form className="flex flex-col">
          <section className="flex  items-center  sm:mx-auto sm:w-2/3 lg:mx-auto lg:w-2/4">
            <div className="mr-4 w-full">
              <TextField
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
                className="bg-white"
              />
            </div>
            <div className="w-full">
              <FormControl fullWidth>
                <InputLabel id="assetPriority">Priority</InputLabel>
                <Select
                  labelId="assetPriority"
                  label="Priority"
                  id="assetPriority"
                  name="priority"
                  size="small"
                  value={assetForm?.priority}
                  onChange={handleChange}
                  disabled={isEdit ? false : true}
                  className="bg-white"
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
          <section className="mt-4 flex  items-center sm:mx-auto sm:w-2/3  lg:mx-auto lg:w-2/4 ">
            <div className=" mr-4 w-[50%]">
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
                    className="bg-white"
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
                  label="Status"
                  id="assetStatus"
                  name="assetStatus"
                  size="small"
                  name="status"
                  disabled={isEdit ? false : true}
                  onChange={handleChange}
                  // defaultValue={assetForm?.assetStatus}
                  value={assetForm?.status}
                  className="bg-white"
                >
                  <MenuItem value={"active"}>ACTIVE</MenuItem>

                  <MenuItem value={"inactive"}>INACTIVE</MenuItem>
                </Select>
              </FormControl>
            </div>
          </section>

          <section className="mt-8 flex flex-col items-center sm:mx-auto sm:w-2/3 lg:mx-auto lg:w-2/4 ">
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
              className="bg-white"
              // value={""}
              // defaultValue={assetForm?.additionalINfo}
              value={assetForm?.additionalINfo}
              onChange={handleChange}
              disabled={isEdit ? false : true}
            />
          </section>

          <section className="mt-4 flex flex-col items-center  sm:mx-auto sm:w-2/3 lg:mx-auto  lg:w-2/4 ">
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
              className="bg-white"
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
