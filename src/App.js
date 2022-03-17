import React, { useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Feed from "./components/Feed";
import { login, logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Login from "./components/Login";
import { auth } from "./firebase";
import Widgets from "./components/Widgets";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        auth.onAuthStateChanged((userAuth) => {
            if (userAuth) {
                //    the user is logged in
                debugger;
                console.log("App component :", userAuth);

                dispatch(
                    login({
                        email: userAuth.email,
                        uid: userAuth.uid,
                        displayName: userAuth.displayName,
                        photoUrl: userAuth.photoURL,
                    })
                );
            } else {
                //    user is logged out
                dispatch(logout);
            }
        });
    }, []);

    const user = useSelector(selectUser);
    return (
        <div className="app">
            <Header />

            {!user ? (
                <Login />
            ) : (
                <div className="app__body">
                    <Sidebar />
                    <Feed />
                    <Widgets />
                </div>
            )}
        </div>
    );
}

export default App;
