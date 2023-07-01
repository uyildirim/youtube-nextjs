import Image from "next/image";
import Link from "next/link";
import React from "react";

async function getData() {
  const res = await fetch(
    "http://localhost:8002/posts",{ cache: 'no-store' }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
  }

  return res.json();
}

export default async function Blog() {
  const data = await getData();
  return <div className="flex gap-5 flex-col">
    {data.map(item=>(
      <Link className='flex gap-5' href={"/blog/"+item.id}>
      <div className='relative h-[250px] w-[400px]'>
        <Image
          fill={true}
          src={item.image} />
      </div>
      <div className='flex flex-col justify-center'>
        <h1>{item.title}</h1>
        <p>Desc</p>
      </div>
    </Link>
    ))}
  </div>;
}
