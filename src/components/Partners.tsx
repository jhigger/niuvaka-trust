import { partners } from "~/lib/constants";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Partners = () => {
  return (
    <section className="mx-auto space-y-4 p-8">
      <h2 className="py-4 text-center text-3xl font-bold text-mint-500 lg:text-5xl">
        Our Partners
      </h2>
      <InfiniteMovingCards
        speed="normal"
        items={partners.map(({ image, link }, i) => (
          <a key={i} href={link} target="_blank" rel="noopener noreferrer">
            <img
              src={image}
              alt="partner"
              className="aspect-video h-full max-h-32 w-full object-contain object-center"
              loading="lazy"
            />
          </a>
        ))}
      />
    </section>
  );
};

export default Partners;
