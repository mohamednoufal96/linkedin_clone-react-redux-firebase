import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import HeaderOption from "./HeaderOption";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import "../styles/Header.css";
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";
import { auth } from "../firebase";

function Header() {
    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    };

    return (
        <div className="header">
            <div className="header__left">
                <img
                    src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1646647836~hmac=c6b9dbaf82821e38163917bd4147ad3c"
                    alt="logo"
                />
                <div className="header__search">
                    {/* search icon */}
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title={"Home"} />
                <HeaderOption Icon={SupervisorAccountIcon} title={"My Network"} />
                <HeaderOption Icon={BusinessCenterIcon} title={"Jobs"} />
                <HeaderOption Icon={ChatIcon} title={"Messaging"} />
                <HeaderOption Icon={NotificationsActiveIcon} title={"Notifications"} />
                <HeaderOption avatar={true} title={"Me"} onClick={logoutOfApp} />
            </div>
        </div>
    );
}

export default Header;
