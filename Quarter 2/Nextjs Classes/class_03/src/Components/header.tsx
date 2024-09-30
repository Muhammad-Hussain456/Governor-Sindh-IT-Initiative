import Link from 'next/link';
export default function Header(){
  return(
    <div className="Header">
      <ul className="header-button">
      <Link href={'/'} id='home'>
        <li >Home</li>
        </Link>
        <Link href={'/about-us'}  id='about-us'>
        <li>about us</li>
        </Link>
        <Link href={'/contact-us'}  id='contact-us'>
        <li>Contact us</li>
        </Link>
        <Link href={'./jobs'}  id='jobs'>
        <li>Jobs</li>
        </Link>
      </ul>
    </div>
  )
}