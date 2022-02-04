import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../../Component/Common/Loader";
import dummy from "../../../constantData/images/dummyProfile.webp";
import * as action from "../../../Redux/action";

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
    // let imageUrl = window.URL.createObjectURL(file);
    setProfileForm({ ...profileForm, imageUrl: file });

    reader.onloadend = () => {
      setProfileForm({
        ...profileForm,
        file: file,
      });
    };
    reader.readAsDataURL(file);
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
      <div className="flex flex-col px-2  py-2 max-w-md mx-auto">
        <section className="w-[10rem] flex flex-col mx-auto mb-5">
          <img
            src={
              userDetails?.profilepic &&
              userDetails?.profilepic !== "profilepic"
                ? userDetails?.profilepic
                : dummy
            }
            alt="profile pic"
            className="w-full border rounded-full"
          />
          <h3 className="text-center text-gray-500 text-base uppercase mt-3">
            {userDetails?.name}
          </h3>
          {isEdit && (
            <div className="">
              <form onSubmit={(e) => _handleSubmit(e)}>
                <input
                  className="fileInput"
                  type="file"
                  onChange={(e) => _handleImageChange(e)}
                />
              </form>
            </div>
          )}
        </section>
        <form className="m-6   px-[2%] text-left mt-8 ">
          <div className="flex items-center">
            <label htmlFor="name" className="mr-8">
              Name
            </label>
            <div className="border">
              {isEdit ? (
                <input
                  type="text"
                  className="focus:outline-none px-3 py-2  w-[300px]  "
                  value={profileForm.name}
                  name="name"
                  id="name"
                  ref={focusRef}
                  onChange={handleFormInput}
                  readOnly={isEdit ? false : true}
                />
              ) : (
                <div className="w-[300px] px-3 py-2 px ">
                  {userDetails?.name}
                </div>
              )}
            </div>
          </div>
          <div className="mt-3 flex items-center   ">
            <label htmlFor="email" className="mr-9">
              Email
            </label>

            <div className="border">
              {isEdit ? (
                <input
                  type="text"
                  className="focus:outline-none px-3 py-2  w-[300px]"
                  value={profileForm.email}
                  name="email"
                  id="email"
                  onChange={handleFormInput}
                  readOnly={isEdit ? false : true}
                />
              ) : (
                <div className="w-[300px] px-3 py-2 px ">
                  {userDetails?.email}
                </div>
              )}
            </div>
          </div>
          {userDetails?.role !== "superAdmin" && (
            <div className="mt-3 flex items-center ">
              <label htmlFor="company" className="mr-2">
                Company
              </label>

              <div className="border">
                {isEdit ? (
                  <input
                    type="text"
                    className="focus:outline-none px-3 py-2  w-[300px]"
                    value={profileForm.company}
                    name="company"
                    id="company"
                    onChange={handleFormInput}
                    readOnly={isEdit ? false : true}
                  />
                ) : (
                  <div className="w-[300px] px-3 py-2 px ">
                    {userDetails?.company_id.company_name}
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="mt-3  flex items-center ">
            <label htmlFor="phone" className="mr-8">
              Phone
            </label>

            <div className="border">
              {isEdit ? (
                <input
                  type="text"
                  className="focus:outline-none px-3 py-2  w-[300px]"
                  value={profileForm.phone}
                  name="phone"
                  id="phone"
                  onChange={handleFormInput}
                  readOnly={isEdit ? false : true}
                />
              ) : (
                <div className="w-[300px] px-3 py-2 px ">
                  {userDetails?.phone}
                </div>
              )}
            </div>
          </div>
          <div className="mt-3 flex items-center ">
            <label htmlFor="location" className="mr-4">
              Location
            </label>

            <div className="border">
              {isEdit ? (
                <input
                  type="text"
                  className="focus:outline-none px-3 py-2  w-[300px]"
                  value={profileForm.location}
                  name="location"
                  id="location"
                  onChange={handleFormInput}
                  readOnly={isEdit ? false : true}
                />
              ) : (
                <div className="w-[300px] px-3 py-2 px ">
                  {userDetails?.location}
                </div>
              )}
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <button
              className="px-8 py-2 bg-slate-300 text-gray-500 mr-[5%]"
              type="button"
              onClick={openEdit}
            >
              {isEdit ? "Save" : "Edit"}
            </button>
            {isEdit && (
              <button
                className="px-8 py-2 bg-slate-300 text-gray-500"
                type="button"
                onClick={cancelEdit}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
