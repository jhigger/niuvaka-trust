import { cn } from "~/lib/utils";

type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => {
  return (
    <div
      className={cn(
        "relative aspect-square size-36 overflow-hidden rounded-full",
        className,
      )}
    >
      <img
        src="/logo.webp"
        alt="logo"
        className="absolute left-[48.44%] size-full -translate-x-1/2 scale-110 bg-cover bg-center"
        loading="eager"
      />
    </div>
  );
};

export default Logo;
