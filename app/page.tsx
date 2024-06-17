"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const width = useWindowSize().width;

  return (
    <div className="content">
      <div className="imageAndTextContainer">
        <div className="photoOfMe">
          <Image
            src={"/self_photo.JPG"}
            height={width / 2.75}
            width={(width * 1.2) / 2.75}
            objectFit="cover"
            alt="a photo of me!"
          />
        </div>
        <div>
          Hi! My name is Dax. I'm a software engineer currently based in
          Madison, WI. I have experience with web development (full stack),
          database design and development, and scaling/performance of systems.
          In my personal quest for programming knowledge, I've also done some
          mobile and AI/Data Science development.
          <br />
          <br />
          If you're looking for my resume, here's a link:{" "}
          <Link
            href="/dax_schoof_resume.pdf"
            id="inlineLink"
            target="_blank"
            rel="noopener noreferrer"
            download
            locale={false}
          >
            Resume (download)
          </Link>
        </div>
      </div>
    </div>
  );
}

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
