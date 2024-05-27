import Link from "next/link";

const NavigationBar = () => {
  return (
    <div className="navigator">
      <Link
        href="/dax_schoof_resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        download
        locale={false}
      >
        Resume
      </Link>
      <Link href="daxschoof.dev/timeline">Timeline</Link>
      <Link href="https://www.linkedin.com/in/dax-schoof/">LinkedIn</Link>
      <Link href="daxschoof.dev/contactme">Contact Me</Link>
    </div>
  );
};

export default NavigationBar;
