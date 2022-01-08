import { useEffect, useState } from "react";
import { useNavigate,useParams } from "react-router-dom";

const CustomTabs = () => {
  const navigate = useNavigate();
  const [path, setPath] = useState(window.location.href)
  const {id} = useParams();

  useEffect(()=>{
    const tabValue = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
    setPath(tabValue);
  },[path])

  return (
    <>
    <div className="flex flex-row cursor-pointer rounded-lg">
      <div onClick={()=>navigate(`${id}/overview`)} className={`px-4 py-2 text-sm ${path === "overview" ? "bg-orange-cus-1 text-white":"bg-gray-100 text-orange-cus-1"}`}>Overview</div>
      <div onClick={()=>navigate(`${id}/scope`)} className={`px-4 py-2 text-sm ${path === "scope" ? "bg-orange-cus-1 text-white":"bg-gray-100 text-orange-cus-1"}`}>Scope</div>
      <div onClick={()=>navigate(`${id}/finding`)} className={`px-4 py-2 text-sm ${path === "findings" ? "bg-orange-cus-1 text-white":"bg-gray-100 text-orange-cus-1"}`}>Findings</div>
      <div onClick={()=>navigate(`${id}/chat`)} className={`px-4 py-2 text-sm ${path === "chat" ? "bg-orange-cus-1 text-white":"bg-gray-100 text-orange-cus-1"}`}>Chat</div>
    </div>
    </>
  );
}

export default CustomTabs;