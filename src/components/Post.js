import { Avatar } from "@mui/material";
import React, { useEffect } from "react";
import "../styles/Post.css";
import InputOption from "./InputOption";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

function Post({ name, description, message, photoUrl }) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar src={photoUrl} className="post__avatar">
                    {name[0]}
                </Avatar>
                <div className="post__info">
                    <h2> {name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>
            <div className="post__buttons">
                <InputOption Icon={ThumbUpOffAltIcon} title="Like" color={"gray"} />
                <InputOption Icon={ChatOutlinedIcon} title="Comment" color={"gray"} />
                <InputOption Icon={ShareOutlinedIcon} title="Share" color={"gray"} />
                <InputOption Icon={SendOutlinedIcon} title="Send" color={"gray"} />
            </div>
        </div>
    );
}

export default Post;
