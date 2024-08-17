"use client";

import { useTypewriter, Cursor } from "react-simple-typewriter";

function AutoType() {
    const [text] = useTypewriter({
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
        <p className="text-white md:text-5xl text-3xl mt-5">
        I'm a{" "}
        <span style={{ fontWeight: "bold", color: "Black" }}>{text}</span>
        <span style={{ color: "black" }}>
          <Cursor cursorStyle="|" />
        </span>
      </p>
    );
}

export default AutoType;