import Image from "next/image";
import React from "react";
import { items } from "../../portfolio/[category]/data";

async function getData(id) {
  const res = await fetch(`http://localhost:8002/posts/${id}`, {
    cache: "no-store",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
  }

  return res.json();
}

export default async function page({params}) {
    const data = await getData(params.id);
    console.log(data);
  return (
    <div className="grid gap-5">
      <div className="flex gap-10">
        <div className="flex-1 flex justify-between flex-col">
          <h1 className="">{data.title}</h1>
          <p className="">
            Deserunt ex aliqua amet labore. Adipisicing aute commodo ullamco
            exercitation ut officia. Eu sit fugiat excepteur dolore sit veniam
            sint Lorem fugiat magna non.
          </p>
          <div className="flex items-center gap-5">
            <Image
              src={data.avatar}
              alt=""
              width={40}
              height={40}
              className=" rounded object-cover"
            />
            <span className="">{data.username}</span>
          </div>
        </div>
        <div className="h-[300px] relative flex-1">
          <Image
          src={data.image}
            alt=""
            fill={true}
            className="object-cover"
          />
        </div>
      </div>
      <div className="">
        <span className="flex flex-col gap-4 text-justify">
            <p>{data.decs}</p>
        </span>
      </div>
    </div>
  );
}
