import FilterOption from "../../../Component/Common/FilterOption";
import { changeButtonName } from "../../../constantData/AssestTabInfo";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
const AssetTabs = () => {
  const { assetData } = useSelector((state) => state.assetReducer);
  const navigate = useNavigate();
  const {
    pathname,
    state: { id },
  } = useLocation();

  const [path, setPath] = useState(pathname);

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

  const handleTabClick = (name) => {
    console.log(name);
  };
  return (
    <Container sx={{ mt: 4 }}>
      <div className="xl:mx-56 md:mx-44 sm:mx-36 mx-12">
        <FilterOption />
      </div>
      <section className="mt-8 mb-4 flex flex-col  w-95.5 mx-auto">
        <div className="mt-4 flex  flex-col w-full mx-auto ">
          <div className="flex mx-auto">
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
        <div className="mt-12">
          <Outlet />
        </div>
      </section>
    </Container>
  );
};

export default AssetTabs;
