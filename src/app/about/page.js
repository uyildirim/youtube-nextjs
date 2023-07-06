import Button from "@/src/components/button/Button";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div>
      <div className="w-full h-80 relative">
        <Image
          className="object-cover grayscale"
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
        />
        <div className="absolute bottom-5 left-5 bg-green-800/90 p-2 text-white">
          <h1 className="">Digital Storytellers</h1>
          <h2 className="">Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className="flex gap-24">
        <div className="mt-12 flex flex-col gap-7">
          <h1 className="">Who Are We?</h1>
          <p className="font-light text-lg text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>
        <div className="mt-12 flex flex-col gap-7">
          <h1 className="">What We Do?</h1>
          <p className="font-light text-lg text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
}
