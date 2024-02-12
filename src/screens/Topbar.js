import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import MobileMenu from "../components/MobileMenu";
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
import { useDispatch, useSelector } from "react-redux";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import * as actions from "../store/actions/actionTypes";
import { toast } from "react-toastify";
import { toastStyle as options } from "../utils/styles";
import { enToPerNum } from "../utils/utils";

const navLiStyle = "h-full md:w-[85px] xl:w-[100px] cursor-pointer";
const navLinkStyle =
  "h-full w-full flex items-center justify-center text-white sm:hover:bg-vio";

//component //////////////////////////////////////////////////////////////////////////////////////////////////////////
const Topbar = () => {
  const [activeSideMenu, setActiveSideMenu] = useState(false);
  const showMenu = () => {
    setActiveSideMenu(!activeSideMenu);
  };

  const [showDropdown, setShowDropdown] = useState(false); //admin dropdown
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const [showProductsDropdown, setshowProductsDropdown] = useState(false);
  const toggleProductsDropdown = () => {
    setshowProductsDropdown(!showProductsDropdown);
  };

  const [showUserDropdown, setshowUserDropdown] = useState(false);
  const toggleUserDropdown = () => {
    setshowUserDropdown(!showUserDropdown);
  };

  const userSigninState = useSelector((state) => state.userSigninReducer);
  const { userInfo } = userSigninState;

  const cardState = useSelector((state) => state.cardReducer);
  const { cardItems } = cardState;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userSignoutHandler = () => {
    dispatch({ type: actions.CART_EMPTY });
    dispatch({ type: actions.USER_SIGNOUT });
    toast.success("خارج شدید", options);
    navigate("/");
  };

  return (
    <div className="z-50 fixed top-0 right-0 w-full h-10 flex justify-between items-center bg-dark text-white px-2">
      <Link
        to="/"
        className="w-28 h-full flex items-center text-xs cursor-pointer font-firstFont md:hover:text-shade"
      >
        نام سایت
      </Link>
      <MobileMenu toggleMenu={showMenu} activeSideMenu={activeSideMenu} />
      <nav className="h-full basis-4/5 flex justify-between items-center">
        <div className="md:hidden w-full h-full text-right flex justify-end items-center">
          <MenuOpenRoundedIcon
            onClick={showMenu}
            className="cursor-pointer sm:hover:text-shade"
          />
        </div>
        <ul className="hidden h-full w-full md:flex md:items-center md:justify-end text-[10px] font-firstFont">
          <li className={navLiStyle + " flex items-center justify-center"}>
            <NavLink to="/card" className={navLinkStyle}>
              <AddShoppingCartRoundedIcon style={{ fontSize: "21px" }} />
              {cardItems && cardItems.length !== 0 ? (
                <span className="absolute top-1 -right-1 bg-shade text-dark font-semibold font-firstFont w-4 h-4 rounded-full flex items-center justify-center text-xs">
                  {enToPerNum(cardItems.length)}
                </span>
              ) : null}
            </NavLink>
          </li>
          <li className={navLiStyle}>
            <NavLink to="/contact" className={navLinkStyle}>
              درباره ما
            </NavLink>
          </li>
          <li
            className={navLiStyle + " relative"}
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <NavLink to="/admin/products" className={navLinkStyle}>
              <span>
                {!showDropdown ? <ArrowLeftIcon /> : <ArrowDropDownIcon />}
              </span>
              <p>ادمین</p>
            </NavLink>
            {showDropdown && (
              <div className="absolute top-30 right-10 bg-vio md:w-[85px] xl:w-[100px]">
                <ul className="w-full flex-col items-center justify-center">
                  <NavLink to="/admin/products">
                    <li className="text-center md:text-[9px] lg:text-[10px] p-3 hover:bg-hoverBtn">
                      محصولات
                    </li>
                  </NavLink>
                  <NavLink to="admin/orders">
                    <li className="text-center md:text-[9px] lg:text-[10px] p-3 hover:bg-hoverBtn">
                      سفارشات
                    </li>
                  </NavLink>
                </ul>
              </div>
            )}
          </li>
          <li
            className={navLiStyle + " relative"}
            onMouseEnter={toggleUserDropdown}
            onMouseLeave={toggleUserDropdown}
          >
            <NavLink to="/#" className={navLinkStyle}>
              <span>
                {!showUserDropdown ? <ArrowLeftIcon /> : <ArrowDropDownIcon />}
              </span>
              <p>کاربری</p>
            </NavLink>
            {!userInfo && showUserDropdown ? (
              <div className="absolute top-30 right-10 bg-vio md:w-[85px] xl:w-[100px]">
                <ul className="h-full w-full">
                  <li className="text-center md:text-[9px] lg:text-[10px] hover:bg-hoverBtn p-3">
                    <NavLink to="/signup">ثبت نام</NavLink>
                  </li>
                  <li className="text-center md:text-[9px] lg:text-[10px] hover:bg-hoverBtn p-3">
                    <NavLink to="/signin">ورود</NavLink>
                  </li>
                </ul>
              </div>
            ) : (
              userInfo &&
              showUserDropdown && (
                <div className="absolute top-30 right-10 bg-vio md:w-[85px] xl:w-[100px]">
                  <ul className="w-full flex-col items-center justify-center">
                    <li className="text-center md:text-[9px] lg:text-[10px] p-3 hover:bg-hoverBtn">
                      <NavLink to="/signin">خروج</NavLink>
                    </li>
                  </ul>
                </div>
              )
            )}
          </li>
          <li
            className={navLiStyle + " relative"}
            onMouseEnter={toggleProductsDropdown}
            onMouseLeave={toggleProductsDropdown}
          >
            <NavLink to="/admin/products" className={navLinkStyle}>
              <span>
                {!showProductsDropdown ? (
                  <ArrowLeftIcon />
                ) : (
                  <ArrowDropDownIcon />
                )}
              </span>
              <p>محصولات</p>
            </NavLink>
            {showProductsDropdown && (
              <div className="absolute top-30 right-10 bg-vio md:w-[85px] xl:w-[100px]">
                <ul className="w-full flex-col items-center justify-center">
                  <NavLink to="/admin/products">
                    <li className="text-center md:text-[9px] lg:text-[10px] p-3 hover:bg-hoverBtn">
                      کاندوم
                    </li>
                  </NavLink>
                  <NavLink to="admin/orders">
                    <li className="text-center md:text-[9px] lg:text-[10px] p-3 hover:bg-hoverBtn">
                      اسپری
                    </li>
                  </NavLink>
                  <NavLink to="admin/orders">
                    <li className="text-center md:text-[9px] lg:text-[10px] p-3 hover:bg-hoverBtn">
                      ژل
                    </li>
                  </NavLink>
                  <NavLink to="admin/orders">
                    <li className="text-center md:text-[9px] lg:text-[10px] p-3 hover:bg-hoverBtn">
                      سایر محصولات
                    </li>
                  </NavLink>
                </ul>
              </div>
            )}
          </li>
          <li className={navLiStyle}>
            <NavLink to="/" className={navLinkStyle}>
              صفحه اصلی
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Topbar;
