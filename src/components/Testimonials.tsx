import { cn } from "~/lib/utils";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const items = [
  {
    image: "https://placehold.co/200x200/?text=Image",
    name: "John Doe",
    title: "Student",
    testimony:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, optio! Aperiam veniam ratione deserunt soluta commodi sit, in inventore nam at molestiae sed quod rem cumque ab dolore perspiciatis molestias.",
  },
  {
    image: "https://placehold.co/200x200/?text=Image",
    name: "John Doe",
    title: "Student",
    testimony:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, optio! Aperiam veniam ratione deserunt soluta commodi sit, in inventore nam at molestiae sed quod rem cumque ab dolore perspiciatis molestias.",
  },
  {
    image: "https://placehold.co/200x200/?text=Image",
    name: "John Doe",
    title: "Student",
    testimony:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, optio! Aperiam veniam ratione deserunt soluta commodi sit, in inventore nam at molestiae sed quod rem cumque ab dolore perspiciatis molestias.",
  },
];

const Testimonials = () => {
  return (
    <section className="container mx-auto space-y-8 p-8">
      <h2 className="p-8 text-5xl font-bold text-black">
        What people say about us
      </h2>
      <div className="flex items-center justify-center gap-8 overflow-x-auto">
        <InfiniteMovingCards
          direction="right"
          speed="slow"
          items={items.map((item, i) => (
            <div
              key={i}
              className="relative max-w-screen-md rounded-xl bg-gradient-to-r from-coffee-400 to-coffee-300 px-8 py-16"
            >
              <div className="grid grid-cols-3 place-items-center gap-8 text-background">
                <div className="col-span-1 flex w-full flex-col items-center justify-center gap-4">
                  <div className="size-40 overflow-hidden rounded-xl">
                    <img
                      src={item.image}
                      alt="partner"
                      className="size-full object-cover object-center"
                    />
                  </div>
                  <div className="text-2xl font-bold">{item.name}</div>
                  <div className="text-xl font-semibold">{item.title}</div>
                </div>
                <div className="col-span-2 text-xl font-medium leading-normal tracking-wide">
                  {item.testimony}
                </div>
              </div>
              <Quote className="absolute bottom-10 right-10 h-32 w-52 fill-coffee-50/40 stroke-0 mix-blend-multiply" />
            </div>
          ))}
        />
      </div>
    </section>
  );
};

const Quote = ({ className }: { className?: string }) => {
  return (
    <svg
      width="201"
      height="133"
      viewBox="0 0 201 133"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <g opacity="0.58">
        <path
          d="M183.387 113.948C169.334 126.591 148.069 133 120.194 133H110.178V109.567L118.231 108.229C131.953 105.951 141.499 101.471 146.607 94.8955C149.273 91.3533 150.784 87.2975 150.994 83.125H120.194C117.537 83.125 114.99 82.2492 113.111 80.6903C111.233 79.1314 110.178 77.0171 110.178 74.8125V16.625C110.178 7.45631 119.162 0 130.21 0H190.309C192.965 0 195.513 0.875763 197.391 2.43466C199.27 3.99356 200.325 6.10788 200.325 8.31249L200.325 49.875L200.295 74.1392C200.385 75.0619 202.288 96.9238 183.387 113.948ZM20.0301 0L80.1284 0C82.7849 0 85.3326 0.875763 87.211 2.43466C89.0895 3.99356 90.1448 6.10788 90.1448 8.31249V49.875L90.1147 74.1392C90.2048 75.0619 92.108 96.9238 73.2071 113.948C59.1541 126.591 37.8893 133 10.0137 133H-0.00268555V109.567L8.05051 108.229C21.7729 105.951 31.3185 101.471 36.4269 94.8955C39.0923 91.3533 40.604 87.2975 40.8141 83.125H10.0137C7.35719 83.125 4.80946 82.2492 2.93103 80.6903C1.0526 79.1314 -0.00268555 77.0171 -0.00268555 74.8125L-0.00268555 16.625C-0.00268555 7.45631 8.98199 0 20.0301 0Z"
          fill="#E9CCB2"
          fillOpacity="0.68"
        />
      </g>
    </svg>
  );
};

export default Testimonials;
