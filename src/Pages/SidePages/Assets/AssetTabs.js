import FilterOption from "../../../Component/Common/FilterOption";

import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import * as roles from "../../../constantData/Roles";
const AssetTabs = () => {
  const navigate = useNavigate();
  const {
    pathname,
    state: { id },
  } = useLocation();

  const [path, setPath] = useState(pathname);
  const { userRole } = useSelector((state) => state?.user);
  let filterAccess;
  if (userRole) {
    filterAccess = roles.showFilter(userRole);
  }
  useEffect(() => {
    const tabValue = pathname.substring(pathname.lastIndexOf("/") + 1);
    setPath(tabValue);
  }, [pathname]);

  const navDetails = [
    {
      name: "Details",
      handlePath: () => navigate("details", { state: { id } }),
    },

    {
      name: "History",
      handlePath: () => navigate("history", { state: { id } }),
    },
    { name: "Files", handlePath: () => navigate("files", { state: { id } }) },

    { name: "SBOM", handlePath: () => navigate("sbom", { state: { id } }) },
  ];

  return (
    <Container sx={{ mt: 4 }}>
      {filterAccess && (
        <div className="w-full rounded-lg bg-white py-10 pl-7 shadow-sm ">
          <div className="max-w-lg">
            <FilterOption />
          </div>
        </div>
      )}

      <section className=" relative mx-auto mt-8 mb-4  flex w-full flex-col">
        <div className="mx-auto mt-4  flex w-full flex-col ">
          <div className="mx-auto flex">
            {navDetails.map((item, index) => {
              const { name, handlePath } = item;
              return (
                <button
                  id="navButton"
                  key={name}
                  className={`${
                    path === name.toLocaleLowerCase()
                      ? "nav-Asest-Btn activesBTn "
                      : "nav-Asest-Btn"
                  }`}
                  onClick={handlePath}
                >
                  {name}
                </button>
              );
            })}
          </div>
        </div>
        <div className=" mt-12">
          <Outlet />
        </div>
      </section>
    </Container>
  );
};

export default AssetTabs;
