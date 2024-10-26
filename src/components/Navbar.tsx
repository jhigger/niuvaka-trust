import { useScroll } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useState } from "react";
import { navigationLinks } from "~/lib/constants";
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
  const [isSheetOpen, setSheetOpen] = useState(false);

  scrollY.on("change", (y) => {
    setY(y);
  });

  const crossed = y > 300;

  const handleLinkClick = () => {
    setSheetOpen(false);
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-background shadow-sm">
      <div
        className={cn(
          "mx-auto flex items-center justify-between gap-2 transition-all duration-200 ease-in-out",
          size === "lg" && "pb-36",
          crossed && "pb-0",
        )}
      >
        <div className="flex shrink-0 items-center justify-center gap-2 xl:gap-4 2xl:flex-1">
          <Logo
            className={cn(
              "my-8 transition-all duration-200 ease-in-out",
              crossed && "my-4 size-16",
            )}
          />
          <span className="hidden max-w-64 text-lg font-black leading-tight lg:block xl:max-w-full 2xl:mx-auto">
            Tagata Pasifika: Thriving, Flourishing, Resilient
          </span>
        </div>

        <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger
            className="rounded-full bg-mint-500 stroke-white p-2 lg:hidden"
            asChild
          >
            <Menu size={40} />
          </SheetTrigger>
          <SheetContent className="bg-background">
            <SheetHeader className="space-y-4 text-left">
              {navigationLinks.map((link) => (
                <SheetTitle
                  key={`mobile-${link.href}`}
                  className="space-y-4 text-base"
                >
                  <Button
                    asChild
                    variant="ghost"
                    className={cn(path === link.href && "bg-coffee-50")}
                  >
                    <Link href={link.href} onClick={handleLinkClick}>
                      {link.name}
                    </Link>
                  </Button>
                  <SheetDescription className="ml-10 flex flex-col gap-4 text-base underline">
                    {Array.isArray(link.subLinks) &&
                      link.subLinks.length > 0 &&
                      link.subLinks.map((subLink, index) => (
                        <Fragment key={`mobile-${subLink.href}-${index}`}>
                          <Link
                            href={subLink.href}
                            className="text-neutral-foreground"
                            onClick={handleLinkClick}
                          >
                            {subLink.name}
                          </Link>

                          {subLink.subLinks?.map((subSubLink, subIndex) => (
                            <Link
                              key={`mobile-${subSubLink.href}-${subIndex}`}
                              href={subSubLink.href}
                              className="ml-10 text-neutral-foreground"
                              onClick={handleLinkClick}
                            >
                              {subSubLink.name}
                            </Link>
                          ))}
                        </Fragment>
                      ))}
                  </SheetDescription>
                </SheetTitle>
              ))}
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList className="flex w-full items-center gap-2 xl:gap-4">
            {navigationLinks.map((link) => {
              if (link.subLinks) {
                return (
                  <NavigationMenuItem key={`desktop-${link.href}`}>
                    <Link href={link.href} legacyBehavior passHref>
                      <NavigationMenuTrigger
                        className={cn(
                          cn(buttonVariants({ variant: "ghost" })),
                          path === link.href && "bg-coffee-50",
                          "px-2 py-1 pr-2 text-lg text-neutral-foreground xl:px-4 xl:py-2 xl:text-xl",
                        )}
                      >
                        {link.name}
                      </NavigationMenuTrigger>
                    </Link>
                    <NavigationMenuContent>
                      <ul className="flex flex-col gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        {link.subLinks.map((subLink, index) => {
                          if (subLink.subLinks) {
                            return (
                              <Fragment
                                key={`desktop-${subLink.href}-${index}`}
                              >
                                <ListItem
                                  href={subLink.href}
                                  title={subLink.name}
                                  className="text-foreground"
                                />
                                {subLink.subLinks.map(
                                  (subSubLink, subIndex) => (
                                    <ListItem
                                      key={`desktop-${subSubLink.href}-${subIndex}`}
                                      href={subSubLink.href}
                                      title={subSubLink.name}
                                      className="indent-8 text-foreground"
                                    />
                                  ),
                                )}
                              </Fragment>
                            );
                          }

                          return (
                            <ListItem
                              key={`desktop-${subLink.href}-${index}`}
                              href={subLink.href}
                              title={subLink.name}
                              className="text-foreground"
                            />
                          );
                        })}
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
                      "px-2 py-1 text-lg text-neutral-foreground xl:px-4 xl:py-2 xl:text-xl",
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
            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-mint-500 hover:text-white focus:bg-accent focus:text-accent-foreground",
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
