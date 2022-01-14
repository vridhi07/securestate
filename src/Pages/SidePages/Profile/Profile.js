import { useState, useRef } from "react";

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

    let documents = focusRef.current;
    console.log(documents);
    if (document) {
      // let inputFocus = documents.getElementById("name");
      // console.log(inputFocus);
      // inputFocus.autofocus = true;
    }
    let name = e.target.name;
    let value = e.target.value;
    setProfileForm({ ...profileForm, [name]: value });
  };
  const cancelEdit = () => {
    setIsEdit(false);
  };
  return (
    <div className="w-full test">
      <div className="flex test flex-col px-2 py-2 max-w-sm mx-auto">
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
        <section className="mt-6 test px-20">
          <div className="border ">
            {isEdit ? (
              <div className="border">
                <input
                  type="text"
                  className="focus:outline-none px-3 py-2 w-full"
                  value={profileForm.name}
                  name="name"
                  id="name"
                  ref={focusRef}
                  onChange={handleFormInput}
                />
              </div>
            ) : (
              <div className="px-3 py-2">
                <h3>{profileForm.name}</h3>
              </div>
            )}
          </div>
          <div className="mt-3 border ">
            {isEdit ? (
              <div>
                <input
                  type="text"
                  className="focus:outline-none px-3 py-2 w-full"
                  value={profileForm.email}
                  name="email"
                  onChange={handleFormInput}
                />
              </div>
            ) : (
              <div className="px-3 py-2">
                <h3>{profileForm.email}</h3>
              </div>
            )}
          </div>
          <div className="mt-3 border ">
            {isEdit ? (
              <div>
                <input
                  type="text"
                  className="focus:outline-none px-3 py-2 w-full"
                  value={profileForm.company}
                  name="company"
                  onChange={handleFormInput}
                />
              </div>
            ) : (
              <div className="px-3 py-2">
                <h3>{profileForm.company}</h3>
              </div>
            )}
          </div>
          <div className="mt-3 border ">
            {isEdit ? (
              <div>
                <input
                  type="text"
                  className="focus:outline-none px-3 py-2 w-full"
                  value={profileForm.phone}
                  name="phone"
                  onChange={handleFormInput}
                />
              </div>
            ) : (
              <div className="px-3 py-2">
                <h3>{profileForm.phone}</h3>
              </div>
            )}
          </div>
          <div className="mt-3 border ">
            {isEdit ? (
              <div>
                <input
                  type="text"
                  className="focus:outline-none px-3 py-2 w-full"
                  value={profileForm.location}
                  name="location"
                  onChange={handleFormInput}
                />
              </div>
            ) : (
              <div className="px-3 py-2">
                <h3>{profileForm.location}</h3>
              </div>
            )}
          </div>
          <div>
            <button onClick={openEdit}>{isEdit ? "Save" : "Edit"}</button>
            {isEdit && <button onClick={cancelEdit}>Cancel</button>}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
