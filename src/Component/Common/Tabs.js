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
    <div className="mt-20 flex flex-col items-center">
      <div className="flex cursor-pointer flex-row rounded-lg bg-gray-300">
        <div
          onClick={() => navigate(`overview`, { state: { id } })}
          className={`rounded-tl-lg rounded-bl-lg  px-4 py-2  text-sm ${
            path === "overview"
              ? "bg-orange-cus-1 text-white"
              : " text-orange-cus-1"
          }`}
        >
          Overview
        </div>
        <div
          onClick={() => navigate(`scope`, { state: { id } })}
          className={`px-4 py-2 text-sm ${
            path === "scope"
              ? "bg-orange-cus-1 text-white"
              : " text-orange-cus-1"
          }`}
        >
          Scope
        </div>
        <div
          onClick={() => navigate(`findings`, { state: { id } })}
          className={`px-4 py-2 text-sm ${
            path === "findings"
              ? "bg-orange-cus-1 text-white"
              : " text-orange-cus-1"
          }`}
        >
          Findings
        </div>
        <div
          onClick={() => navigate(`chat`, { state: { id } })}
          className={`rounded-tr-lg rounded-br-lg px-4 py-2 text-sm  ${
            path === "chat"
              ? "bg-orange-cus-1 text-white"
              : " text-orange-cus-1"
          }`}
        >
          Chat
        </div>
      </div>
      <div className="mx-auto mt-6 h-0.5 w-96 bg-gray-cus-6"></div>
    </div>
  );
};

export default CustomTabs;
