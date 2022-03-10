import React from "react";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import "../styles/Feed.css";

function Feed() {
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text" />
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title={"Photo"} color="#89CFF0" />
                    <InputOption Icon={SubscriptionsIcon} title={"Vieo"} color="#89CFF0" />
                    <InputOption Icon={EventNoteIcon} title={"Event"} color="#89CFF0" />
                    <InputOption Icon={CalendarViewDayIcon} title={"Write article"} color="#89CFF0" />
                </div>
            </div>
        </div>
    );
}

export default Feed;
