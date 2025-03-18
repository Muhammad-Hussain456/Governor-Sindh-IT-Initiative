import 'tailwindcss/tailwind.css'
import Image from 'next/image';
import { Component } from 'react';
export default function Header() {
  return (
    <header >
      <div className='navBarTop'  >
        
        <Image
        className='navBarTopLogo'
        src="/NavBarLogo.png"
        alt="NavBarLogo"
        width={148}
        height={48}
        />
      </div>
      <div className='Search'>
        
      </div>
    </header>
  );
}