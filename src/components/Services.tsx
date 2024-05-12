import { cn } from "~/lib/utils";
import { Button } from "./ui/button";

const items = [
  {
    background: "bg-coffee-50",
    foreground: "text-neutral-foreground",
    name: "Children Immunisations",
    description: (
      <>
        We can assist you with dental care and other health care assistance.
        there are lots of things that we can assist you with.
        <br />
        <br />
        We can assist you with dental care and other health care assistance.
        there are lots of things that we can assist you with.
      </>
    ),
    href: "#",
  },
  {
    background: "bg-coffee-300",
    foreground: "text-white",
    name: "Dental Care",
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis,
        nisi.
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis,
        nisi.
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis,
        nisi.
      </>
    ),
    href: "#",
  },
  {
    background: "bg-coffee-300",
    foreground: "text-white",
    name: "Dental Care",
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis,
        nisi.
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis,
        nisi.
      </>
    ),
    href: "#",
  },
  {
    background: "bg-coffee-500",
    foreground: "text-white",
    name: "Health Checks",
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis,
        nisi.
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis,
        nisi.
      </>
    ),
    href: "#",
  },
  {
    background: "bg-coffee-700",
    foreground: "text-white",
    name: "Vaccinations",
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis,
        nisi.
      </>
    ),
    href: "#",
  },
  {
    background: "bg-coffee-700",
    foreground: "text-white",
    name: "Vaccinations",
    description: (
      <>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis,
        nisi.
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis,
        nisi.
      </>
    ),
    href: "#",
  },
];

const Services = () => {
  return (
    <section className="container mx-auto grid grid-cols-1 gap-8 p-8 lg:grid-cols-3">
      <h2 className="col-span-full py-8 text-center text-6xl font-semibold">
        Our Services and Programmes
      </h2>
      {items.map((item, i) => (
        <div
          key={i}
          className={cn(
            "col-span-1 flex flex-col gap-4 rounded-3xl bg-coffee-50 px-8 py-6",
            item.background,
            item.foreground,
          )}
        >
          <h3 className="text-2xl font-semibold">{item.name}</h3>
          <p className="mb-4 text-sm font-medium">{item.description}</p>
          <div className="mt-auto flex items-center justify-end">
            <Button
              variant="link"
              className={cn("text-sm font-medium", item.foreground)}
              asChild
            >
              <a href={item.href}>Read More</a>
            </Button>
          </div>
        </div>
      ))}
      <div className="col-span-full mt-8 flex items-center justify-center">
        <Button size="lg">Read More</Button>
      </div>
    </section>
  );
};

export default Services;
