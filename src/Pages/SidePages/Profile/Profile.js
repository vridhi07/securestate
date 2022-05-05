import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../../Component/Common/Loader";
import dummy from "../../../constantData/images/dummyProfile.webp";
import * as action from "../../../Redux/action";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import Box from "@mui/material/Box";
const Profile = () => {
  const state = useSelector((state) => state);
  const { userDetails, isLoading } = state?.user;
  const dispatch = useDispatch();

  const [profileForm, setProfileForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    location: "",
    profilepic: "",
  });

  const [isEdit, setIsEdit] = useState(false);
  const focusRef = useRef();
  const handleFormInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "phone") {
      value = e.target.value.replace(/\D/, "");
    }
    setProfileForm({ ...profileForm, [name]: value });
  };

  const _handleImageChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    if (
      file.type == "image/png" ||
      file.type == "image/jpeg" ||
      file.type == "image/jpg"
    ) {
      // let imageUrl = window.URL.createObjectURL(file);
      setProfileForm({ ...profileForm, imageUrl: file });

      reader.onloadend = () => {
        setProfileForm({
          ...profileForm,
          file: file,
        });
      };
      reader.readAsDataURL(file);
    } else {
      alert("please input valid image format");
    }
  };
  const formData = new FormData();
  formData.append("file", profileForm.file);
  formData.append("name", profileForm.name);
  formData.append("email", profileForm.email);
  formData.append("company", profileForm.email);
  formData.append("phone", profileForm.phone);
  formData.append("location", profileForm.location);

  const openEdit = () => {
    setIsEdit(true);
    setProfileForm({
      ...profileForm,
      name: userDetails?.name,
      email: userDetails?.email,
      company: userDetails?.company_id?.company_name,
      phone: userDetails?.phone,
      location: userDetails?.location,
    });
  };

  const saveEdit = () => {
    if (isEdit) {
      dispatch(action.updateUserRequest(formData));
      setIsEdit(false);
    }
  };

  useEffect(() => {
    if (isEdit) {
      focusRef.current.focus();
    }
  }, [isEdit]);

  // useEffect(() => {
  //   setProfileForm({
  //     ...profileForm,
  //     name: userDetails?.user?.name,
  //     email: userDetails?.user?.email,
  //     company: userDetails?.company,
  //     phone: userDetails?.user?.phone,
  //     location: userDetails?.user?.location,
  //   });
  // }, [userDetails]);
  const cancelEdit = () => {
    setIsEdit(false);
    setProfileForm({
      ...profileForm,
      name: userDetails?.user?.name,
      email: userDetails?.user?.email,
      company: userDetails?.company,
      phone: userDetails?.user?.phone,
      location: userDetails?.user?.location,
    });
  };

  // const updateProfile=()=>{
  //   dispatch(action.updateUserRequest({...profileForm}))
  // }

  if (isLoading) {
    return <Loader />;
  }
  const _handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full">
      <div className=" relative mx-auto mt-11 max-w-xl px-7 py-7 ">
        <div className=" absolute top-1 left-12  h-[7rem] w-[7rem] rounded-full">
          <div className="relative">
            <img
              src={
                userDetails?.profilepic &&
                userDetails?.profilepic !== "profilepic"
                  ? userDetails?.profilepic
                  : dummy
              }
              alt="profile pic"
              className={`h-[7rem] w-full rounded-full object-cover  ${
                isEdit && "opacity-70"
              }`}
            />
            {isEdit && (
              <div className="absolute top-[31%] left-[30%] z-10">
                <form onSubmit={(e) => _handleSubmit(e)}>
                  <label htmlFor="file" className="cursor-pointer">
                    <PhotoCameraIcon
                      sx={{ color: "white", fontSize: "3rem" }}
                    />
                  </label>
                  <input
                    className="hidden"
                    type="file"
                    id="file"
                    accept=".png, .jpg, .jpeg"
                    onChange={(e) => _handleImageChange(e)}
                  />
                </form>
              </div>
            )}
          </div>
        </div>
        <section className=" ml-[27%]  flex w-[73%]">
          <h3 className="mt-7 text-center text-lg font-semibold capitalize text-gray-600">
            {userDetails?.name}
          </h3>
          <div className="mt-4 ml-auto flex items-center">
            <div onClick={openEdit}>
              {isEdit ? (
                <div></div>
              ) : (
                <div className=" mr-[5%] cursor-pointer rounded-md bg-[#565656] px-5 py-2 text-white ">
                  <span className="flex items-center gap-2">
                    <span className="flex items-center justify-center rounded-full bg-[#737373] py-[0.25rem] px-[0.25rem]">
                      <ModeEditIcon
                        sx={{
                          color: "white",
                          fontSize: "1rem",
                        }}
                      />
                    </span>
                    <span>Edit</span>
                  </span>
                </div>
              )}
              {/* {SetisEdit && (
  
              )} */}
            </div>
          </div>
        </section>
        <form className="  rounded-md bg-white px-10 py-14 text-left shadow-sm ">
          <div className="flex items-center">
            <label htmlFor="name" className="mr-8">
              Name:
            </label>
            <div className=" border-b border-gray-500">
              {isEdit ? (
                <input
                  type="text"
                  className=" w-[300px] px-3   pt-2 focus:outline-none "
                  value={profileForm.name}
                  name="name"
                  id="name"
                  ref={focusRef}
                  onChange={handleFormInput}
                  readOnly={isEdit ? false : true}
                />
              ) : (
                <div className=" w-[300px] px-3 pt-2 ">{userDetails?.name}</div>
              )}
            </div>
          </div>
          <div className="mt-3 flex items-center   ">
            <label htmlFor="email" className="mr-9">
              Email:
            </label>

            <div className="border-b border-gray-500">
              {isEdit ? (
                <input
                  type="text"
                  className="w-[300px] px-3 pt-2  focus:outline-none"
                  value={profileForm.email}
                  name="email"
                  id="email"
                  onChange={handleFormInput}
                  readOnly={isEdit ? false : true}
                />
              ) : (
                <div className="px w-[300px] px-3 pt-2 ">
                  {userDetails?.email}
                </div>
              )}
            </div>
          </div>
          {userDetails?.role !== "superAdmin" && (
            <div className="mt-3 flex items-center ">
              <label htmlFor="company" className="mr-2">
                Company:
              </label>

              <div className="border-b border-gray-500">
                {isEdit ? (
                  <input
                    type="text"
                    className="w-[300px] px-3 pt-2  focus:outline-none"
                    value={profileForm.company}
                    name="company"
                    id="company"
                    onChange={handleFormInput}
                    readOnly={isEdit ? false : true}
                  />
                ) : (
                  <div className="px w-[300px] px-3 pt-2 ">
                    {userDetails?.company_id?.company_name}
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="mt-3  flex items-center ">
            <label htmlFor="phone" className="mr-8">
              Phone:
            </label>

            <div className="border-b border-gray-500">
              {isEdit ? (
                <input
                  type="text"
                  className="w-[300px] px-3 pt-2  focus:outline-none"
                  value={profileForm.phone}
                  name="phone"
                  id="phone"
                  onChange={handleFormInput}
                  readOnly={isEdit ? false : true}
                />
              ) : (
                <div className="px w-[300px] px-3 pt-2 ">
                  {userDetails?.phone}
                </div>
              )}
            </div>
          </div>
          <div className="mt-3 flex items-center ">
            <label htmlFor="location" className="mr-4">
              Location:
            </label>

            <div className="border-b border-gray-500">
              {isEdit ? (
                <input
                  type="text"
                  className="w-[300px] px-3 pt-2  focus:outline-none"
                  value={profileForm.location}
                  name="location"
                  id="location"
                  onChange={handleFormInput}
                  readOnly={isEdit ? false : true}
                />
              ) : (
                <div className="px w-[300px] px-3 pt-2 ">
                  {userDetails?.location}
                </div>
              )}
            </div>
          </div>
          <div className="mt-3 flex items-center ">
            <label className="mr-[3rem]">Role:</label>

            <div className="border-b border-gray-500 capitalize">
              <div className="px w-[300px] px-3 pt-2 ">{userDetails?.role}</div>
            </div>
          </div>
        </form>
        <Box sx={{ display: "flex", padding: 1 }}>
          <div>
            {isEdit && (
              <button
                className="text-black-500 rounded-md bg-[#CBD5E1] px-6 py-2"
                type="button"
                onClick={cancelEdit}
              >
                Cancel
              </button>
            )}
          </div>
          <div>
            {isEdit && (
              <span
                onClick={saveEdit}
                className="mx-2 flex  items-center gap-2 rounded-md bg-[#F67A32] py-[0.55rem] px-[0.55rem] hover:cursor-pointer"
              >
                <span className="flex items-center justify-center rounded-full bg-[#737373] py-[0.25rem] px-[0.25rem]">
                  <SaveAsIcon
                    sx={{
                      color: "white",
                      fontSize: "1rem",
                    }}
                  />
                </span>
                <span>Save</span>
              </span>
            )}
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Profile;
