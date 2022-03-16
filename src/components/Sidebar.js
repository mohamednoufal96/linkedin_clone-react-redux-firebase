import React, { useEffect } from "react";
import { Avatar } from "@mui/material";
import "../styles/Sidebar.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function Sidebar() {
    const user = useSelector(selectUser);

    useEffect(() => {
        console.log("inside Login.js", user);
    }, []);

    const sidebar = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img
                    src="https://image.shutterstock.com/image-illustration/programming-code-abstract-technology-background-260nw-1188449449.jpg"
                    alt="cover pic"
                />

                <Avatar className="sidebar__avatar" src={user.photoUrl}>
                    {user.email[0]}
                </Avatar>
                <h2> {user.displayName} </h2>
                <h4> {user.email} </h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed your profile </p>
                    <p className="sidebar__statNumber">1,234</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on a post</p>
                    <p className="sidebar__statNumber">1,234</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {sidebar("reactjs")}
                {sidebar("nodejs")}
                {sidebar("angular")}
                {sidebar("jQuery")}
            </div>
        </div>
    );
}

export default Sidebar;
