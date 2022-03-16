import React, { useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Feed from "./components/Feed";
import { login, logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Login from "./components/Login";
import { auth } from "./firebase";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        auth.onAuthStateChanged((userAuth) => {
            if (userAuth) {
                //    the user is logged in

                console.log(userAuth);
                dispatch(
                    login({
                        email: userAuth.email,
                        uid: userAuth.uid,
                        displayName: userAuth.dispayName,
                        photoUrl: userAuth.photoUrl,
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
                    {/* Widgets */}
                </div>
            )}
        </div>
    );
}

export default App;
