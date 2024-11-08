import { socials } from "~/lib/constants";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-coffee-200 py-8 md:p-16">
      <div className="mx-auto flex flex-col items-center justify-center gap-4">
        <div className="space-y-4">
          <div className="flex items-end gap-4">
            <Logo className="-mb-2 !size-20 h-max" />
            <div className="text-xl font-black uppercase lg:text-2xl">
              NIUVAKA TRUST
            </div>
          </div>

          <div className="text-base font-bold underline underline-offset-4 lg:text-lg">
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
        <p className="inline-flex flex-wrap items-center justify-center text-center text-sm lg:text-base">
          &copy; 2024 Niuvaka Trust. All Rights Reserved.{" "}
          <span>Website Design by SGDesign</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
