import Link from "next/link";
import React from "react";
import DarkModeToggle from "../darkModeToggle/DarkModeToggle";
const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Portfolio", url: "/portfolio" },
  { id: 3, title: "Blog", url: "/blog" },
  { id: 4, title: "About", url: "/about" },
  { id: 5, title: "Contact", url: "/contact" },
  { id: 5, title: "Dashboard", url: "/dashboard" },
];
export default function Navbar() {
  return (
    <div className="flex justify-between py-5">
      <div>Logo</div>
      <div>
        <div className="flex gap-2">
        <DarkModeToggle/>
          {links.map((link) => (
            <Link href={link.url}>{link.title}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
