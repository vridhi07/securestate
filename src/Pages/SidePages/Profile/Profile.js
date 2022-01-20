import { useState, useRef, useEffect } from "react";

import dummy from "../../../constantData/images/dummyProfile.webp";
const Profile = () => {
  const [profileForm, setProfileForm] = useState({
    name: "Renne Mckkke",
    email: "Samu",
    company: "Etech",
    phone: "2282272727",
    location: "delhi",
  });

  const [isEdit, setIsEdit] = useState(false);
  const focusRef = useRef();
  const handleFormInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setProfileForm({ ...profileForm, [name]: value });
  };
  const openEdit = (e) => {
    setIsEdit(true);

    let name = e.target.name;
    let value = e.target.value;
    setProfileForm({ ...profileForm, [name]: value });
  };

  useEffect(() => {
    if (isEdit) {
      focusRef.current.focus();
    }
  }, [isEdit]);

  const cancelEdit = () => {
    setIsEdit(false);
    setProfileForm({
      ...profileForm,
      name: "Renne Mckkke",
      email: "Samu",
      company: "Etech",
      phone: "2282272727",
      location: "delhi",
    });
  };
  return (
    <div className="w-full">
      <div className="flex flex-col px-2 py-2 max-w-sm mx-auto">
        <section className="h-[9rem] w-[9rem] flex flex-col mx-auto mb-5">
          <img
            src={dummy}
            alt="profile pic"
            className="w-full border rounded-full"
          />
          <h3 className="text-center text-gray-500 text-base uppercase mt-3">
            {profileForm.name}
          </h3>
        </section>
        <section className="m-6  px-[2%] text-left ">
          <div className="flex items-center">
            <label htmlFor="name" className="mr-8">
              Name
            </label>

            <div className="border">
              <input
                type="text"
                className="focus:outline-none px-3 py-2 w-full  "
                value={profileForm.name}
                name="name"
                id="name"
                ref={focusRef}
                onChange={handleFormInput}
                readOnly={isEdit ? false : true}
              />
            </div>
          </div>
          <div className="mt-3 flex items-center   ">
            <label htmlFor="email" className="mr-9">
              Email
            </label>

            <div className="border">
              <input
                type="text"
                className="focus:outline-none px-3 py-2 w-full"
                value={profileForm.email}
                name="email"
                id="email"
                onChange={handleFormInput}
                readOnly={isEdit ? false : true}
              />
            </div>
          </div>
          <div className="mt-3 flex items-center ">
            <label htmlFor="company" className="mr-2">
              Company
            </label>

            <div className="border">
              <input
                type="text"
                className="focus:outline-none px-3 py-2 w-full"
                value={profileForm.company}
                name="company"
                id="company"
                onChange={handleFormInput}
                readOnly={isEdit ? false : true}
              />
            </div>
          </div>
          <div className="mt-3  flex items-center ">
            <label htmlFor="phone" className="mr-8">
              Phone
            </label>

            <div className="border">
              <input
                type="text"
                className="focus:outline-none px-3 py-2 w-full"
                value={profileForm.phone}
                name="phone"
                id="phone"
                onChange={handleFormInput}
                readOnly={isEdit ? false : true}
              />
            </div>
          </div>
          <div className="mt-3 flex items-center ">
            <label htmlFor="location" className="mr-4">
              Location
            </label>

            <div className="border">
              <input
                type="text"
                className="focus:outline-none px-3 py-2 w-full"
                value={profileForm.location}
                name="location"
                id="location"
                onChange={handleFormInput}
                readOnly={isEdit ? false : true}
              />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <button
              className="px-8 py-2 bg-slate-300 text-gray-500 mr-[5%]"
              onClick={openEdit}
            >
              {isEdit ? "Save" : "Edit"}
            </button>
            {isEdit && (
              <button
                className="px-8 py-2 bg-slate-300 text-gray-500"
                onClick={cancelEdit}
              >
                Cancel
              </button>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
