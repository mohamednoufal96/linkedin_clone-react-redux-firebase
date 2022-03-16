import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { auth } from "../firebase";
import "../styles/Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const register = () => {
        if (!name) {
            alert("Please give a full name");
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user
                    .updateProfile({
                        displayName: name,
                        photoURL: profilePic,
                    })
                    .then(() => {
                        dispatch(
                            login({
                                email: userAuth.user.email,
                                uid: userAuth.user.uid,
                                displayName: name,
                                photoURL: profilePic,
                            })
                        );
                        const c_user = {
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoURL: profilePic,
                        };
                        console.log("user registered", c_user);
                    });
            })
            .catch((error) => {
                alert(error);
            });
    };

    const loginToApp = (event) => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then((userAuth) => {
                debugger;
                console.log(userAuth);
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: userAuth.user.displayName,
                        photoURL: userAuth.user.photoUrl,
                    })
                );
                const c_user = {
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoURL: userAuth.user.photoUrl,
                };
                console.log("user logged in", c_user);
            })
            .catch((error) => alert(error));
    };
    return (
        <div className="login">
            <img src="https://www.freepnglogos.com/uploads/linkedin-logo-transparent-png-25.png" alt="login pic" />
            <form>
                <input
                    type="text "
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Full name ( required if registering )"
                />
                <input
                    type="text "
                    value={profilePic}
                    onChange={(event) => setProfilePic(event.target.value)}
                    placeholder="Profile pic URL ( optional )"
                />
                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" />
                <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Password"
                />
                <button onClick={loginToApp}>Sign in</button>
            </form>
            <p>
                Not a member ?{" "}
                <span className="login__register" onClick={register}>
                    Register Now
                </span>
            </p>
        </div>
    );
}

export default Login;
