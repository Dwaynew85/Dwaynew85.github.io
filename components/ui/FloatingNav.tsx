"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.25,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border rounded-full shadow-lg z-[5000] px-4 py-2 items-center justify-center space-x-4 bg-black border-neutral-800",
          className
        )}
        style={{
          boxShadow: visible
            ? "0 0 8px 2px rgba(0, 191, 255, 0.6)"
            : "none",
        }}
      >
        {navItems.map((navItem: {name: string, link: string, icon?: React.ReactNode}, idx: number) => (
          <motion.div
            key={`link=${idx}`}
            whileHover={{ scale: 1.2}}
            whileTap={{ scale: 2 }}
            transition={{ duration: 0.1}}
            className="flex-shrink-0"
          >
            <Link
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 text-xs sm:text-sm lg:text-base"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <motion.span
                whileHover={{
                  color: "#00BFFF",
                }}
                className="!cursor-pointer"
              >{navItem.name}</motion.span>
            </Link>
          </motion.div>
        ))}
        {/* <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
          <span>Login</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button> */}
      </motion.div>
    </AnimatePresence>
  );
};
