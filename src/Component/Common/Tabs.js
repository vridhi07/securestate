import { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

const CustomTabs = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [path, setPath] = useState(pathname);
  const { id } = useParams();

  useEffect(() => {
    const tabValue = pathname.substring(pathname.lastIndexOf("/") + 1);
    setPath(tabValue);
  }, [pathname]);

  return (
    <div className="flex flex-col items-center mt-20">
      <div className="flex flex-row cursor-pointer rounded-lg">
        <div
          onClick={() => navigate(`overview`, { state: { id } })}
          className={`px-4 py-2 text-sm  rounded-tl-lg rounded-bl-lg  ${
            path === "overview"
              ? "bg-orange-cus-1 text-white"
              : "bg-gray-100 text-orange-cus-1"
          }`}
        >
          Overview
        </div>
        <div
          onClick={() => navigate(`scope`, { state: { id } })}
          className={`px-4 py-2 text-sm ${
            path === "scope"
              ? "bg-orange-cus-1 text-white"
              : "bg-gray-100 text-orange-cus-1"
          }`}
        >
          Scope
        </div>
        <div
          onClick={() => navigate(`findings`, { state: { id } })}
          className={`px-4 py-2 text-sm ${
            path === "findings"
              ? "bg-orange-cus-1 text-white"
              : "bg-gray-100 text-orange-cus-1"
          }`}
        >
          Findings
        </div>
        <div
          onClick={() => navigate(`chat`, { state: { id } })}
          className={`px-4 py-2 text-sm rounded-tr-lg rounded-br-lg  ${
            path === "chat"
              ? "bg-orange-cus-1 text-white"
              : "bg-gray-100 text-orange-cus-1"
          }`}
        >
          Chat
        </div>
      </div>
      <div className="h-0.5 w-96 mx-auto bg-gray-cus-6 mt-6"></div>
    </div>
  );
};

export default CustomTabs;
