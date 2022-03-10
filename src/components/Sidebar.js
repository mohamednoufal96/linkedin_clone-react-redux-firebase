import React from "react";
import { Avatar } from "@mui/material";
import "../styles/Sidebar.css";

function Sidebar() {
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

                <Avatar
                    className="sidebar__avatar"
                    src="https://media-exp1.licdn.com/dms/image/C5103AQF96ES8oDkyUA/profile-displayphoto-shrink_200_200/0/1555241079252?e=1652313600&v=beta&t=bYvc4hdCmqx7xIcDKbR689WahkU0rWve4gnZQeJyCBA"
                />
                <h2>Mohamed Noufal</h2>
                <h4>noufal@gmail.com</h4>
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
