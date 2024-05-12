import React from "react";
import { Button } from "./ui/button";

const Mission = () => {
  return (
    <section className="container mx-auto grid grid-cols-1 place-items-center gap-8 p-8 lg:grid-cols-2">
      <div className="col-span-1 flex h-full w-full flex-col items-center justify-between gap-8">
        <h2 className="text-center text-6xl font-semibold uppercase text-coffee-400">
          Our Mission
        </h2>
        <p className="text-center text-3xl">
          Working cooperatively with Tagata Pasifika, Pasifika communities and
          Pasifika families to build their capacity and capability
        </p>
        <div className="mt-8 flex items-center justify-center">
          <Button size="lg">Read More</Button>
        </div>
      </div>

      <div className="col-span-1 flex h-[400px] w-full items-center justify-center overflow-hidden rounded-3xl">
        <img
          src="/mission.jpg"
          alt="people"
          className="size-full object-cover object-center"
        />
      </div>
    </section>
  );
};

export default Mission;
