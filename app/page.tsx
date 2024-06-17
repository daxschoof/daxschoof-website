"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const { height, width } = useWindowSize();

  return (
    <div className="content">
      <div className="imageAndTextContainer">
        <div className="photoOfMe">
          <Image
            src={"/self_photo.JPG"}
            height={Math.min(width, height) / 2.75}
            width={(Math.min(width, height) * 1.2) / 2.75}
            alt="a photo of me!"
          />
        </div>
        <div>
          Hi! My name is Dax. I&apos;m a software engineer currently based in
          Madison, WI. My experience is in web dev (full stack), database design
          and development, and scaling/performance of systems. In my personal
          quest for programming knowledge, I&apos;ve also done some mobile and
          AI/Data Science development.
          <br />
          <br />
          If you&apos;re looking for my resume, here&apos;s a link:{" "}
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
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}
