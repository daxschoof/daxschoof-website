import Link from "next/link";

const ContactMe = () => {
  return (
    <div>
      daxschoof@gmail.com
      <div>
        {"  "}...and here's my LinkedIn page:{"  "}
        <Link id="inlineLink" href="https://www.linkedin.com/in/dax-schoof/">
          LinkedIn.{" "}
        </Link>
        {"  "}I'd love to make your connection!
      </div>
    </div>
  );
};

export default ContactMe;
