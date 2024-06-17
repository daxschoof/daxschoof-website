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
          Hi! My name is Dax. I&apos;m a software engineer currently based in
          Madison, WI. I have experience with web development (full stack),
          database design and development, and scaling/performance of systems.
          In my personal quest for programming knowledge, I&apos;ve also done
          some mobile and AI/Data Science development.
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
