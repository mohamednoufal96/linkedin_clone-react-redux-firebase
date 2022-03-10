import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Feed from "./components/Feed";

function App() {
    return (
        <div className="app">
            <Header />
            <div className="app__body">
                <Sidebar />
                <Feed />
                {/* Widgets */}
            </div>
        </div>
    );
}

export default App;
