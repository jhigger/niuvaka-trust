import Link from "next/link";
import { links, services, socials } from "~/lib/constants";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="mt-36 bg-coffee-50 p-16">
      <div className="container mx-auto grid grid-cols-1 gap-16 lg:grid-cols-6">
        <div className="col-span-full mb-16 grid grid-cols-1 gap-16 lg:grid-cols-6">
          <div className="relative col-span-4">
            <div className="text-8xl font-bold uppercase">Get in touch</div>
            <div className="absolute -bottom-2 left-24 h-px w-3/4 bg-black"></div>
          </div>

          <div className="col-span-2 flex flex-col justify-center gap-4">
            <div className="mt-2 text-5xl font-bold uppercase">Emergency?</div>
            <div className="space-x-4">
              <span className="text-2xl">Dial Now</span>
              <span className="text-4xl font-bold">1234-23456-23</span>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <Logo className="h-max w-full" />
        </div>

        <div className="col-span-1 col-start-3">
          <ul className="space-y-2 text-2xl font-medium uppercase">
            {services.map(({ name, id }) => {
              return (
                <li key={id} className="hover:underline">
                  <Link href={`services/#${id}`}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="col-span-1">
          <ul className="space-y-2 text-2xl font-medium uppercase">
            {links.map(({ name, href }) => {
              return (
                <li key={href} className="hover:underline">
                  <Link href={href}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="col-span-1">
          <ul className="space-y-2 text-2xl font-medium uppercase">
            {socials.map(({ name, href }) => {
              return (
                <li key={href} className="hover:underline">
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="col-span-full flex items-center justify-center gap-4 text-lg font-medium uppercase">
          <span>Web design by:</span>
          <img src="/sg.png " alt="sg logo" className="h-12" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
