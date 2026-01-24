/* eslint-disable @typescript-eslint/no-explicit-any */

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import React, { useRef } from "react";
import { cn } from "~/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: React.ReactNode;
    image: string;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end center"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc]!)) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <motion.section
      className="relative mx-auto grid grid-cols-1 place-items-center py-8 lg:grid-cols-2"
      ref={ref}
    >
      <div className="relative col-span-1 flex flex-col px-4">
        {content.map((item, index) => (
          <div key={item.title + index} className="my-20 space-y-8 lg:my-40">
            <motion.h3
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: activeCard === index ? 1 : 0.1,
              }}
              className="text-6xl font-semibold text-coffee-400 lg:text-7xl"
            >
              {item.title}
            </motion.h3>
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: activeCard === index ? 1 : 0.1,
              }}
              className="mt-10 flex max-w-xl flex-col gap-8 text-2xl text-primary lg:text-2xl"
            >
              {item.description}
            </motion.p>
          </div>
        ))}
      </div>
      <div
        className={cn(
          "sticky top-1/4 col-span-1 m-0 hidden h-2/6 w-full items-center justify-center self-start overflow-hidden rounded-3xl lg:flex",
          contentClassName,
        )}
      >
        <motion.img
          key={content[activeCard]!.image}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeIn" }}
          src={content[activeCard]!.image}
          alt={content[activeCard]!.title}
          className="size-full object-cover object-center"
        />
      </div>
    </motion.section>
  );
};
