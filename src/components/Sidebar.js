import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { FaList, FaRegHeart } from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";
import { SiLinewebtoon } from "react-icons/si";
import { MdLocalMovies } from "react-icons/md";
import { BiCameraMovie } from "react-icons/bi";
import "react-pro-sidebar/dist/css/styles.css";
import "./Sidebar.scss";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [menuCollapse, setMenuCollapse] = useState(true);

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <div id="header">
      <ProSidebar collapsed={menuCollapse}>
        <SidebarHeader>
          <div className="logotext">
            <p>{menuCollapse ? "Menu" : "Enter Web"}</p>
          </div>
          <div className="closemenu" onClick={menuIconClick}>
            {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="square">
            <MenuItem active={true} icon={<FiHome />} className="Homebar">
              Home
              <Link to="/"></Link>
            </MenuItem>

            <MenuItem icon={<SiLinewebtoon />}>
              웹툰
              <Link to="/Webtoon"></Link>
            </MenuItem>

            <MenuItem icon={<FaRegHeart />}>
              굿즈
              <Link to="/Goods"></Link>
            </MenuItem>

            <MenuItem icon={<MdLocalMovies />}>
              영화
              <Link to="/Movie"></Link>
            </MenuItem>

            <MenuItem icon={<BiCameraMovie />}>
              드라마
              <Link to="/Drama"></Link>
            </MenuItem>
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          <Menu iconShape="square">
            <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
          </Menu>
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
};

export default Sidebar;
