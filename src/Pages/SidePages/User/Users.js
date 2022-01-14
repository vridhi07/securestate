import SearchIcon from "@mui/icons-material/Search";
import ProfileTable from "../../../Component/User/UserTable";
import { useState } from "react";
const Users = () => {
  const [profileSearch, setProfileSearch] = useState("");
  return (
    <div>
      <section className="mt-8  md:mr-28 flex items-center justify-between md:justify-end">
        <form className="grid justify-center items-center">
          <div
            className="flex justify-end items-center border border-gray-600 
          py-0.5 pr-2 rounded-3xl
          "
          >
            <SearchIcon sx={{ ml: "0.5rem", mt: "0.2rem" }} />
            <input
              type="search"
              className="py-1 px-1 focus:outline-none bg-clip-padding placeholder:text-gray-600"
              placeholder="Search"
              value={profileSearch}
              onChange={(e) => setProfileSearch(e.target.value)}
            />
          </div>
        </form>

        <button className=" px-7 py-2 text-white tracking-wider bg-orange-cus-1 rounded-md md:ml-4 ">
          New User
        </button>
      </section>
      <div className="w-full mt-8">
        <ProfileTable />
      </div>
    </div>
  );
};
export default Users;
