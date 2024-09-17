"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import backgroundImage from "@/assets/images/landing.png";
import Logo from "@/assets/images/StormNormsLogo.png";
import Video from "@/assets/images/VideoLanding.png";
import shoppingCart from "@/assets/images/ShoppingCart.png";
import buttonForward from "@/assets/images/buttonForward.png";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Value of Ideas", href: "#" },
  { name: "Accelarator", href: "#" },
  { name: "Mission", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50 h-[80px]">
        {/* Set a specific height for the header */}
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src={Logo.src} className="h-10 w-auto" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center gap-4">
            <a
              href="#"
              className="text-sm font-bold leading-6 bg-white py-1 px-6 rounded-full text-black"
            >
              Log in
            </a>
            <img
              src={shoppingCart.src}
              className="w-5 h-5 cursor-pointer"
              alt="cart"
            />
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src={Logo.src}
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-black"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* Hero Section */}
      <div
        className="relative  overflow-hidden flex items-center justify-center overflow-hidden bg-cover bg-center pt-[80px]"
        style={{ backgroundImage: `url(${backgroundImage.src})` }}
      >
        {/* Added pt-[80px] to give space equal to the height of the header */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
        />
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-32 lg:px-8 flex flex-col items-center justify-center text-center lg:flex-row lg:text-left lg:justify-between">
          {/* Left Side: Text Content */}
          <div className="flex flex-col justify-center items-center lg:items-start lg:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
              BUILD THE FUTURE WITH US
            </h1>
            <p className="text-lg leading-8 text-white max-w-lg mb-10">
              We are world's leading business builder. We help the most
              influential organisations invent, launch, and scale complex
              software ventures, products, and platforms that will propel them
              towards a better future.
            </p>
            <div className="flex items-center justify-center relative">
              <a
                href="#"
                className="relative rounded-full bg-white pl-8 pr-16 py-4 text-sm font-bold text-black shadow-sm md:pl-8 md:pr-20 lg:pl-12 lg:pr-24"
              >
                OUR WORKS
              </a>
              <img
                src={buttonForward.src}
                className="absolute left-[135px] md:left-[146px] lg:left-[178px] w-10 h-10 md:w-12 md:h-12 cursor-pointer"
                alt=""
              />
            </div>
          </div>

          {/* Right Side: Image Content */}
          <div className="mt-10 lg:mt-0 lg:ml-16 w-full max-w-md md:max-w-lg">
            <img
              alt="Video Placeholder"
              src={Video.src}
              className="aspect-[6/5] w-full rounded-2xl object-cover"
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
    </div>
  );
}
