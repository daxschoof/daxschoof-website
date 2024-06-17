import Link from "next/link";

const ContactMe = () => {
  return (
    <div>
      Under Construction!
      <br />
      <br />
      In the meantime, the best way to reach me is through my email:
      <Link id="inlineLink" href="mailto:daxschoof@gmail.com">
        daxschoof@gmail.com
      </Link>
      .{"  "}If you'd like to connect, here is my LinkedIn page:{"  "}
      <Link id="inlineLink" href="https://www.linkedin.com/in/dax-schoof/">
        LinkedIn
      </Link>
      .{"  "}I&apos;d love to make your connection!
    </div>
  );
};

export default ContactMe;
