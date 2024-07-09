import { events } from "~/lib/constants";
import { Button } from "./ui/button";

type EventsProps = { title?: string };

const Events = ({ title = "Latest Events and Opportunities" }: EventsProps) => {
  return (
    <section className="container mx-auto space-y-8 p-8">
      <h2
        id="events"
        className="p-8 text-center text-4xl font-bold text-coffee-400 md:text-6xl"
      >
        {title}
      </h2>
      <div className="grid grid-cols-1 gap-8 transition-all duration-500 ease-in-out lg:grid-cols-3">
        {events.map((item, i) => (
          <div
            key={i}
            className="group relative h-full overflow-hidden rounded-2xl transition-all duration-500 ease-in-out hover:h-[150%]"
          >
            <img
              src={item.image}
              alt="partner"
              className="size-full object-cover object-center"
            />

            <div className="absolute bottom-0 flex w-full items-center justify-center bg-gradient-to-t from-coffee-700/25 to-transparent p-8 transition-all delay-150 duration-100 ease-linear group-hover:bottom-1/3 group-hover:bg-none">
              <Button size="lg">Read More</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
