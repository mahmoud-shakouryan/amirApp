import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/actions/actionTypes";
import { toast } from "react-toastify";
import { toastStyle as options } from "../utils/styles";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const MobileMenu = ({ toggleMenu, activeSideMenu }) => {
  const userSigninState = useSelector((state) => state.userSigninReducer);
  const { userInfo } = userSigninState;

  const liStyle = "w-full flex items-center justify-center sm:hover:text-shade";
  const navLinkNonActiveStyle =
    "py-5 w-full flex items-center justify-around text-[10px] sm:text-xs";

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userSignoutHandler = () => {
    dispatch({ type: actions.USER_SIGNOUT });
    dispatch({ type: actions.CART_EMPTY });
    toast.success("خارج شدید", options);
    navigate("/");
  };

  return (
    <ul
      className={
        activeSideMenu
          ? "z-50 font-secondFont text-sm h-full w-3/6 fixed transition-all duration-200 right-0 top-0 bg-dark flex-col justify-start items-center md:hidden"
          : "fixed h-screen -right-28"
      }
    >
      <li onClick={toggleMenu} className={`p-5 ${liStyle} cursor-pointer z-60`}>
        <CloseRoundedIcon className="scale-150 flex items-center justify-center" />
      </li>
      <li onClick={toggleMenu} className={liStyle}>
        <NavLink to="/" className={navLinkNonActiveStyle}>
          <span className="w-[70%] flex justify-end bg-hashtag">صفحه اصلی</span>
        </NavLink>
      </li>
      <li onClick={toggleMenu} className={liStyle}>
        <NavLink to="/products" className={navLinkNonActiveStyle}>
          <span className="w-[70%] flex justify-end">محصولات</span>
        </NavLink>
      </li>
      <li onClick={toggleMenu} className={liStyle}>
        <NavLink to="myvideos" className={navLinkNonActiveStyle}>
          <span className="w-[70%] flex justify-end"> کاربری</span>
        </NavLink>
      </li>
      <li onClick={toggleMenu} className={liStyle}>
        <NavLink to="/signup" className={navLinkNonActiveStyle}>
          <span className="w-[70%] flex justify-end">کاربری</span>
        </NavLink>
      </li>
      <li onClick={toggleMenu} className={liStyle}>
        {userInfo ? (
          <NavLink
            to="/"
            className={navLinkNonActiveStyle}
            onClick={userSignoutHandler}
          >
            <span className="w-[70%] flex justify-end">خروج</span>
          </NavLink>
        ) : (
          <NavLink to="/signin" className={navLinkNonActiveStyle}>
            <span className="w-[70%] flex justify-end">ورود</span>
          </NavLink>
        )}
      </li>
      <li onClick={toggleMenu} className={liStyle}>
        <NavLink to="/card" className={navLinkNonActiveStyle}>
          <span className="w-[70%] flex justify-end">سبد خرید</span>
        </NavLink>
      </li>
      <li onClick={toggleMenu} className={liStyle}>
        <NavLink to="/contact" className={navLinkNonActiveStyle}>
          <span className="w-[70%] flex justify-end">درباره ما</span>
        </NavLink>
      </li>
    </ul>
  );
};

export default MobileMenu;
