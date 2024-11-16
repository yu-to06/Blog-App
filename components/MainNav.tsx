"use client";

import {NavItem} from "@/types";
import Link from "next/link";
import {ReactNode, useState} from "react";
import MobileNav from "./MobileNav";

interface MainNavProps {
  items: NavItem[];
  children?: ReactNode;
}

export default function MainNav({items}: MainNavProps) {
  const [showMobileMenu, setshowMobileMenu] = useState<boolean>(false);
  return (
    <div className='flex items-center md:gap-10'>
      <Link href={"/"} className='hidden md:flex items-center space-x-2'>
        <span className='font-bold hidden md:inline-block'>Post Writer</span>
      </Link>
      <nav className='md:flex gap-6 hidden'>
        {items?.map((item, index) => (
          <Link
            key={index}
            href={"item.href"}
            className='text-lg font-medium hover:text-foreground/80 sm:text-sm'
          >
            {item.title}
          </Link>
        ))}
      </nav>

      {/* ハンバーガー */}
      <button
        className='md:hidden'
        onClick={() => setshowMobileMenu(!showMobileMenu)}
      >
        <span>Menu</span>
      </button>
      {showMobileMenu && <MobileNav items={items} />}
    </div>
  );
}
