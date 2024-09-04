import { socials } from "~/lib/constants";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-coffee-200 py-8 md:p-16">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="space-y-4">
          <div className="flex items-end gap-4">
            <div className="text-3xl font-black uppercase">NIUVAKA TRUST</div>
            <Logo className="-mb-2 h-max w-20" />
          </div>

          <div className="text-xl font-bold underline underline-offset-4">
            Tagata Pasifika: Thriving, Flourishing, Resilient
          </div>

          <div className="flex w-full items-end gap-2">
            <div className="w-full border border-foreground bg-background p-4 text-xl font-bold">
              Contact Us
            </div>
            <a href="mailto:info@niuvaka.org.nz">
              <img src="/mail.svg" alt="mail icon" />
            </a>
          </div>

          <div className="flex gap-4">
            {socials.map(({ href, image, name }) => (
              <a href={href} key={name} target="_blank">
                <img src={image} alt={name} className="w-16" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
