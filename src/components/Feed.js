import React, { useEffect, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
import "../styles/Feed.css";
import { firebaseDb } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { async } from "@firebase/util";

function Feed() {
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState("");
    const postsCollectionRef = collection(firebaseDb, "posts");

    useEffect(() => {
        // firebaseDb.collections("posts").onSnapshots((snapshot) => {
        //     setPosts(
        //         snapshot.docs.map((doc) => ({
        //             id: doc.id,
        //             data: doc.data,
        //         }))
        //     );
        // });

        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            setPosts(data.docs.map((doc) => ({ id: doc.id, data: doc.data })));
        };

        getPosts();
    }, []);

    const sendPost = (event) => {
        event.preventDefault();

        firebaseDb.collections("posts").add({
            name: "Mohamed Noufal",
            description: "This is a test",
            message: input,
            photoUrl: "",
            timeStamp: "",
        });
    };

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" />
                        <button type="submit" onClick={sendPost}>
                            Send
                        </button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#89CFF0" />
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#ed9b28" />
                    <InputOption Icon={EventNoteIcon} title="Event" color="#067f94" />
                    <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#1e9c5d" />
                </div>
            </div>
            {/* {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                <Post key={id} name={name} description={description} messsage={message} photoUrl={photoUrl} />
            ))} */}
            {/* <Post name={"Mohamed Noufal"} description={"This is a test"} message="The test actually works.. wow..." /> */}
        </div>
    );
}

export default Feed;
