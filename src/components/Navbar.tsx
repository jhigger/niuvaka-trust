import { useScroll } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { cn } from "~/lib/utils";
import Logo from "./Logo";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
    subLinks: [
      {
        name: "Who are we?",
        href: "/about#who-are-we",
      },
      {
        name: "Our Team",
        href: "/about#our-team",
      },
    ],
  },
  {
    name: "Services",
    href: "/services",
    subLinks: [
      {
        name: "Our Services",
        href: "/services#our-services",
      },
      {
        name: "Our Programmes",
        href: "/services#our-programmes",
      },
    ],
  },
  {
    name: "News",
    href: "/news",
    subLinks: [
      {
        name: "Latest News",
        href: "/news#latest-news",
      },
      {
        name: "Events",
        href: "/news#events",
      },
    ],
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

type NavbarProps = {
  size?: "default" | "lg";
};

const Navbar = ({ size = "default" }: NavbarProps) => {
  const router = useRouter();
  const path = router.route;

  const [y, setY] = useState(0);
  const { scrollY } = useScroll();

  scrollY.on("change", (y) => {
    setY(y);
  });

  const crossed = y > 300;

  return (
    <header className="fixed top-0 z-50 w-full bg-coffee-50">
      <div
        className={cn(
          "container mx-auto flex items-center justify-between gap-32 transition-all duration-200 ease-in-out",
          size === "lg" && "pb-36",
          crossed && "pb-0",
        )}
      >
        <div className="flex shrink-0 items-center justify-center gap-8">
          <Logo
            className={cn(
              "my-8 transition-all duration-200 ease-in-out",
              crossed && "my-4 size-16",
            )}
          />
          <h1 className="max-w-64 font-serif text-lg font-bold italic leading-tight">
            Tagata Pasifika: Thriving, Flourishing, Resilient
          </h1>
        </div>

        <NavigationMenu>
          <NavigationMenuList className="flex w-full items-center justify-between gap-8">
            {links.map((link) => {
              if (link.subLinks) {
                return (
                  <NavigationMenuItem key={link.name}>
                    <Link href={link.href} legacyBehavior passHref>
                      <NavigationMenuTrigger
                        className={cn(path === link.href && "bg-[#f5f5f5]")}
                      >
                        {link.name}
                      </NavigationMenuTrigger>
                    </Link>
                    <NavigationMenuContent className="">
                      <ul className="flex flex-col gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        {link.subLinks.map((subLink) => (
                          <ListItem
                            key={subLink.name}
                            href={subLink.href}
                            title={subLink.name}
                            className="text-neutral-foreground"
                          />
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                );
              }

              return (
                <NavigationMenuItem key={link.name}>
                  <Button
                    variant="ghost"
                    className={cn(
                      "text-xl text-neutral-foreground",
                      path === link.href && "bg-[#f5f5f5]",
                    )}
                    asChild
                  >
                    <Link href={link.href}>{link.name}</Link>
                  </Button>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
            children && "space-y-1",
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";

export default Navbar;
