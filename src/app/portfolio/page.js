import Link from "next/link";
import React from "react";

export default function Portfolio() {
  return (
    <div>
      <h1>Choose a gallery</h1>
      <div className="flex">
        <Link
          className="border-4 rounded w-72 h-96 relative bg-[url('/illustration.png')] bg-cover"
          href="/portfolio/illustrations"
        >
          <span className="text-4xl font-bold absolute right-2 bottom-2">
            Illustrations
          </span>
        </Link>
        <Link
          className="border-4 rounded w-72 h-96 relative bg-[url('/websites.jpg')] bg-cover"
          href="/portfolio/websites"
        >
          <span>Website</span>
        </Link>
        <Link
          className="border-4 rounded w-72 h-96 relative bg-[url('/apps.jpg')] bg-cover"
          href="/portfolio/application"
        >
          <span>Application</span>
        </Link>
      </div>
    </div>
  );
}
