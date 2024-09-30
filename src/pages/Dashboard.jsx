import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function Dashboard() {

  const [data, setData] = useState(null);

  return (
    <div id="dashboard">
      <Sidebar />
      <Outlet />
    </div>
  )
};