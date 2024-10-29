import { cn } from "~/lib/utils";
import { AspectRatio } from "./ui/aspect-ratio";

type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => {
  return (
    <div
      className={cn(
        "relative size-24 overflow-hidden rounded-full md:size-36",
        className,
      )}
    >
      <AspectRatio ratio={1 / 1}>
        <img
          src="/logo.webp"
          alt="logo"
          className="absolute left-[48.44%] size-full -translate-x-1/2 scale-110 bg-cover bg-center"
          loading="eager"
        />
      </AspectRatio>
    </div>
  );
};

export default Logo;
