import Image from "next/image"
import Link from "next/link"
export default function Header(){
  return(
    
  <header className="HeaderTop">
    <div className="logo">
     <Image src="/logo.png" alt="nbbnv"
      width= {65.4}
      height= {22.87}  />
    </div>
    <div className="searchField">
    <Image id="search-logo" src="/Search.png" alt="nbbnv"
      width= {24}
      height= {24}  />
      <p className="searchText">
        Search      
        </p>
    </div>
    <nav className="nav">
   <Link href= '/' className="nav-content">
        <h2 id="home">Home</h2>
    </Link>
    <Link href= '/' className="nav-content">
        <h2 id="about">About</h2>
    </Link>
    <Link href= '/' className="nav-content">
        <h2 id="contact-us">Contact-us</h2>
    </Link>
    <Link href= '/' className="nav-content">
        <h2 id="blog">blog</h2>
    </Link>
    </nav>
    <div className="icons">
    <Image src="/Favorites.png" alt="nbbnv"
      width= {32}
      height= {32}  />
       <Image src="/Cart.png" alt="nbbnv"
      width= {32}
      height= {32}  />
       <Image src="/User.png" alt="nbbnv"
      width= {32}
      height= {32} />
    </div>
  </header>
  )
}