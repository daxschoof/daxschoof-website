import Link from "next/link";

const NavigationBar = () => {
  return (
    <div className="navigator">
      <Link href="/">Home</Link>
      <Link href="/about_me">About Me</Link>
      <Link href="/contact_me">Links & Contact</Link>
    </div>
  );
};

export default NavigationBar;
