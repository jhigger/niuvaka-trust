import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Partners = () => {
  return (
    <section className="container mx-auto space-y-8 p-8">
      <h2 className="p-8 text-center text-5xl font-bold text-black">
        Our Partners
      </h2>
      <InfiniteMovingCards
        speed="normal"
        items={Array<string>(7)
          .fill("https://placehold.co/200x200/?text=Image")
          .map((image, i) => (
            <div key={i} className="overflow-hidden rounded-full">
              <img
                src={image}
                alt="partner"
                className="size-full object-cover object-center"
              />
            </div>
          ))}
      />
    </section>
  );
};

export default Partners;
