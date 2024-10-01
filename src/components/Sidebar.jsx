import { BiLineChart } from "react-icons/bi"
import { FaBars } from "react-icons/fa"
import { LuSlidersHorizontal } from "react-icons/lu"
import { BsFillBarChartFill } from "react-icons/bs"
// import { BsMap } from "react-icons/bs"
import { useState } from "react"
import { NavLink } from "react-router-dom";

export default function Sidebar() {

  const [sidebarActive, setSidebarActive] = useState(false);
  const toggle = () => setSidebarActive(!sidebarActive);

  const sections = [
    { 
      name: "Slider",
      link: "/ArtesaniaLanding/dashboard/slider",
      icon: <LuSlidersHorizontal  size={"2em"} color="black"/>
    },
    { 
      name: "Bar chart",
      link: "/ArtesaniaLanding/dashboard/barChart",
      icon: <BsFillBarChartFill size={"2em"} color="black"/>
    },
    { 
      name: "Line chart",
      link: "/ArtesaniaLanding/dashboard/lineChart",
      icon: <BiLineChart size={"2em"} color="black"/>
    },
    // { 
    //   name: "Map",
    //   link: "/dashboard/map",
    //   icon: <BsMap size={"2em"} color="black"/>
    // }
  ];

  return (
    <div id="dashboard-sidebar" style={{ width: sidebarActive ? "200px" : "50px"}}>
      <div className="section-toggle">
        <FaBars onClick={toggle} size={"2em"}/>
      </div>
      <div className="links-container">
        {sections.map((section, i) => {
          return (
            <NavLink to={section.link} key={i} className="section-link">
              <div className="section-icon">{section.icon}</div>
              <div style={{ display: sidebarActive ? "block" : "none"}} className="section-name">{section.name}</div>
            </NavLink>
          )
        })}
      </div>
    </div>
  )
};