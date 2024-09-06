import { useScroll } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { links } from "~/lib/constants";
import { cn } from "~/lib/utils";
import Logo from "./Logo";
import { Button, buttonVariants } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

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
    <header className="fixed top-0 z-50 w-full bg-background shadow-sm">
      <div
        className={cn(
          "container mx-auto flex items-center justify-between gap-4 transition-all duration-200 ease-in-out",
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
          <span className="hidden max-w-64 text-lg font-black leading-tight lg:block lg:max-w-full">
            Tagata Pasifika: Thriving, Flourishing, Resilient
          </span>
        </div>

        <Sheet>
          <SheetTrigger>
            <Menu
              className="rounded-full bg-mint-500 stroke-white p-2 lg:hidden"
              size={40}
            />
          </SheetTrigger>
          <SheetContent className="bg-background">
            <SheetHeader className="space-y-4 text-left">
              {links.map((link) => {
                return (
                  <SheetTitle key={link.name} className="space-y-4 text-3xl">
                    <Button
                      asChild
                      variant="ghost"
                      className={cn(path === link.href && "bg-coffee-50")}
                    >
                      <Link href={link.href}>{link.name}</Link>
                    </Button>
                    <SheetDescription className="flex flex-col gap-4 indent-12 text-xl">
                      {Array.isArray(link.subLinks) &&
                        link.subLinks.length > 0 &&
                        link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.name}
                            href={subLink.href}
                            className="text-neutral-foreground"
                          >
                            {subLink.name}
                          </Link>
                        ))}
                    </SheetDescription>
                  </SheetTitle>
                );
              })}
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList className="flex w-full flex-wrap items-center gap-4">
            {links.map((link) => {
              if (link.subLinks) {
                return (
                  <NavigationMenuItem key={link.name}>
                    <Link href={link.href} legacyBehavior passHref>
                      <NavigationMenuTrigger
                        className={cn(
                          cn(buttonVariants({ variant: "ghost" })),
                          path === link.href && "bg-coffee-50",
                          "pr-2 text-neutral-foreground",
                        )}
                      >
                        {link.name}
                      </NavigationMenuTrigger>
                    </Link>
                    <NavigationMenuContent>
                      <ul className="flex flex-col gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        {link.subLinks.map((subLink) => (
                          <ListItem
                            key={subLink.name}
                            href={subLink.href}
                            title={subLink.name}
                            className="text-foreground"
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
                      path === link.href && "bg-coffee-50",
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
