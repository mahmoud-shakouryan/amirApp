import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import OndemandVideoRoundedIcon from "@mui/icons-material/OndemandVideoRounded";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink } from "react-router-dom";

const LinkStyle =
  "w-full h-full flex text-xs cursor-pointer py-3 sm:hover:bg-vio sm:hover:text-shade";
const LinkStyleActive =
  "w-full h-full flex text-xs text-shade cursor-pointer py-3 bg-vio";
const liIconSpanStyle = "w-full h-full flex items-center justify-center";

const Navbar = () => {
  return (
    <div className="w-full h-10 font-firstFont bg-shade text-dark absolute top-10 overflow-x-hidden">
      <ul className="w-full h-full flex items-center justify-end gap-1">
        <NavLink
          to="/admin"
          className={({ isActive }) => (isActive ? LinkStyleActive : LinkStyle)}
        >
          {/* <span className={liIconSpanStyle}>
            <GridViewOutlinedIcon style={{ fontSize: "18px" }} />
          </span> */}
          <p>ویرایش محصولات</p>
        </NavLink>
        <NavLink
          to="/admin/users"
          className={({ isActive }) => (isActive ? LinkStyleActive : LinkStyle)}
        >
          {/* <span className={liIconSpanStyle}>
            <PeopleOutlinedIcon style={{ fontSize: "18px" }} />
          </span> */}
          <p>سفارشات</p>
        </NavLink>
        {/* <NavLink
          to="/admin/videos"
          className={({ isActive }) => (isActive ? LinkStyleActive : LinkStyle)}
        >
          <span className={liIconSpanStyle}>
            <OndemandVideoRoundedIcon style={{ fontSize: "18px" }} />
          </span>
        </NavLink>
        <NavLink
          to="/admin/buys"
          className={({ isActive }) => (isActive ? LinkStyleActive : LinkStyle)}
        >
          <span className={liIconSpanStyle}>
            <LocalMallOutlinedIcon style={{ fontSize: "18px" }} />
          </span>
        </NavLink> */}
        <NavLink
          to="/logout"
          className={({ isActive }) => (isActive ? LinkStyleActive : LinkStyle)}
        >
          <p className={liIconSpanStyle}>
            {/* <LogoutIcon style={{ fontSize: "18px" }} /> */}
            خروج
          </p>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
