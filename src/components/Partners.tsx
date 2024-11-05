import { partners } from "~/lib/constants";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

type PartnersProps = { showDescription?: boolean };

const Partners = ({ showDescription = false }: PartnersProps) => {
  return (
    <section
      id="our-partners"
      className="mx-auto flex flex-col items-center justify-center gap-y-4 overflow-hidden p-8"
    >
      <h2 className="text-center text-2xl font-bold text-mint-500 lg:text-4xl">
        Our Partners
      </h2>
      {showDescription && (
        <p className="max-w-screen-sm text-center text-base lg:text-lg">
          We partner and collaborate with many organisations, agencies and
          services who support Pasifika communities to achieve better outcomes.
        </p>
      )}
      <InfiniteMovingCards
        speed="normal"
        items={partners.map(({ image, link }, i) => (
          <a key={i} href={link} target="_blank" rel="noopener noreferrer">
            <img
              src={image}
              alt="partner"
              className="h-full max-h-36 w-full max-w-64 object-contain object-center"
              loading="lazy"
            />
          </a>
        ))}
      />
    </section>
  );
};

export default Partners;
