import { Button } from "./ui/button";

const items = [
  {
    image: "https://placehold.co/200x200/?text=Image",
    href: "#",
  },
  {
    image: "https://placehold.co/200x200/?text=Image",
    href: "#",
  },
  {
    image: "https://placehold.co/200x200/?text=Image",
    href: "#",
  },
];

const LatestEvents = () => {
  return (
    <section className="container mx-auto space-y-8 p-8">
      <h2 className="p-8 text-center text-6xl font-bold text-coffee-400">
        Latest Events and Opportunities
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {items.map((item, i) => (
          <div key={i} className="relative overflow-hidden rounded-2xl">
            <img
              src={item.image}
              alt="partner"
              className="size-full object-cover object-center"
            />

            <div className="absolute bottom-0 flex w-full items-center justify-center bg-gradient-to-t from-coffee-700/25 to-transparent p-8">
              <Button size="lg">Read More</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestEvents;
