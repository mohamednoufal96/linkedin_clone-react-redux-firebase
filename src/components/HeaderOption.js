import { Avatar } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import "../styles/HeaderOption.css";

function HeaderOption({ avatar, title, Icon, onClick }) {
    const user = useSelector(selectUser);

    return (
        <div className="headerOption" onClick={onClick}>
            {Icon && <Icon className="headerOption__icon" />}
            {avatar && (
                <Avatar className="headerOption__icon" src={user?.photoUrl}>
                    {user?.email[0]}
                </Avatar>
            )}
            <h3 className="headerOption__title">{title}</h3>
        </div>
    );
}

export default HeaderOption;
