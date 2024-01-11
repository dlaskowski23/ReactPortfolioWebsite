"use client";

import { useTypewriter, Cursor } from "react-simple-typewriter";

function AutoType() {
    const { text } = useTypewriter({
        words: [
            "Student.",
            "Web Developer.",
            "Software Engineer.",
            "Computer Scientist.",
        ],
        loop: {}, // Set to true to loop infinitely
        typeSpeed: 120,
        deleteSpeed: 80,
    });

    return (
        <p className="text-white text-2xl mt-5">
            I'm a{" "}
            <span style={{ fontWeight: "bold", color: "gray" }}>{text}</span>
            <Cursor cursorStyle="|" />
        </p>
    );
}

export default AutoType;