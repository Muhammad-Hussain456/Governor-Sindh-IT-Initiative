import Link from "next/link";
export default function Header() {
  return (
    <div className="header-container">
      <Link href= '/' className="header-content">
        <h2 id="home">Home</h2>
      </Link>
      <Link href= '/portfolio' className="header-content">
        <h2 id="portfolio">Portfolio</h2>
      </Link>
      <Link href= '/about' className="header-content">
        <h2 id="about">About</h2>
      </Link>
      <Link href= '/contact-us' className="header-content">
        <h2 id="contact">Contact us</h2>
      </Link>
    </div>
  );
}
