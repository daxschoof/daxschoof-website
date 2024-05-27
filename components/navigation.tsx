import Link from "next/link";

const NavigationBar = () => {
  return (
    <div className="navigator">
      <Link href="/">Home</Link>
      <Link
        href="/dax_schoof_resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download
        locale={false}
      >
        Resume
      </Link>
      <Link href="/about_me">About Me</Link>
      <Link href="https://www.linkedin.com/in/dax-schoof/">LinkedIn</Link>
      <Link href="/contact_me">Contact Me</Link>
    </div>
  );
};

export default NavigationBar;
