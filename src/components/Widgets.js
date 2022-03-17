import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import "../styles/Widgets.css";

function Widgets() {
    const widgets__article = (header, description) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{header}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {widgets__article(
                "The Plan for React 18",
                "Our next major version, React 18, is available today as a Release Candidate (RC). "
            )}
            {widgets__article(
                "Nextbrain Technologies pitches in react js development",
                "React.js is an open source Javascript library that can easily manipulate the web page's code, that is the document object model(DOM) "
            )}
            {widgets__article(
                "How to Implement Conditional Rendering in React.js (With Examples)",
                "In this tutorial, you are going to learn about the different ways you can use conditional rendering in React.js applications."
            )}
            {widgets__article(
                "The Plan for React 18",
                "Our next major version, React 18, is available today as a Release Candidate (RC). "
            )}
            {widgets__article(
                "Nextbrain Technologies pitches in react js development",
                "React.js is an open source Javascript library that can easily manipulate the web page's code, that is the document object model(DOM) "
            )}
            {widgets__article(
                "How to Implement Conditional Rendering in React.js (With Examples)",
                "In this tutorial, you are going to learn about the different ways you can use conditional rendering in React.js applications."
            )}
        </div>
    );
}

export default Widgets;
