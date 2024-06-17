import Link from "next/link";

const NavigationBar = () => {
  return (
    <div className="navigator">
      <Link href="/">Home</Link>
      <Link href="/about_me">Stuff I&apos;m Working On</Link>
      <Link href="/contact_me">Links & Contact Info</Link>
    </div>
  );
};

export default NavigationBar;
