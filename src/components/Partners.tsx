import { partners } from "~/lib/constants";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Partners = () => {
  return (
    <section className="container mx-auto space-y-8 p-8">
      <h2 className="py-4 text-center text-5xl font-bold text-mint-500">
        Our Partners
      </h2>
      <InfiniteMovingCards
        speed="normal"
        items={partners.map((image, i) => (
          <img
            key={i}
            src={image}
            alt="partner"
            className="aspect-video h-full max-h-32 w-full object-contain object-center"
            loading="lazy"
          />
        ))}
      />
    </section>
  );
};

export default Partners;
