import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  // SheetDescription,
  // SheetHeader,
  // SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center gap-2">
      <Button className="w-full flex justify-center items-center py-0 px-4 rounded-none bg-primary text-white text-xs">
        <span>20% OFF 🌟 Sale Ends Soon! </span>
        <Image
          src="/icons/arrow-right.svg"
          alt="arrow"
          width={0}
          height={0}
          className="w-3"
        />
      </Button>
      <nav className="max-w-[1517px] w-full flex justify-between items-center px-4">
        <div className="flex justify-start items-center gap-6">
          <Image
            src="/icons/logo.svg"
            alt="logo"
            width={0}
            height={0}
            className="w-10"
          />
          <div className="hidden tablet:flex justify-center items-center gap-4 font-light">
            {navigation.map((item, index) => {
              return (
                <Link key={index} href={item.href}>
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex justify-end items-center gap-4">
          <Button
            variant="outline"
            className="hidden tablet:block h-8 sm:h-10 text-xs sm:text-base rounded-sm px-3 sm:px-8"
          >
            SignUp
          </Button>
          <Button className="hidden tablet:block h-8 sm:h-10 text-xs sm:text-base rounded-sm px-3 sm:px-8">
            Login
          </Button>
          <Sheet>
            <SheetTrigger>
              {/* <Button variant="ghost" className=" block py-0 tablet:hidden"> */}
              <Image
                src="/icons/menu.svg"
                alt="logo"
                width={0}
                height={0}
                className="w-10 px-0 block py-0 tablet:hidden"
              />
              {/* </Button> */}
            </SheetTrigger>
            <SheetContent className="w-full">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription className="sr-only">Menu</SheetDescription>
              </SheetHeader>
              <div className="flex flex-col justify-start items-start gap-4 font-light text-lg pt-10">
                {navigation.map((item, index) => {
                  return (
                    <Link key={index} href={item.href} className="w-full">
                      {item.title}
                    </Link>
                  );
                })}
                <div className="w-full flex justify-center items-center gap-4">

                  <Button className="h-8 sm:h-10 text-xs sm:text-base rounded-sm px-3 sm:px-8">
                    Login
                  </Button>
                  <Button
                    variant="outline"
                    className="h-8 sm:h-10 text-xs sm:text-base rounded-sm px-3 sm:px-8"
                  >
                    SignUp
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

const navigation = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Features",
    href: "/",
  },
  {
    title: "Module",
    href: "/",
  },
  {
    title: "Pricing",
    href: "/",
  },
  {
    title: "Contact",
    href: "/",
  },
];