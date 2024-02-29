"use client";

import { useState } from "react";

import { NavbarProps, SocialLinkProps } from "@/types";
import { socialLinks } from "@/constants/socialLinks";
import { navLinks } from "@/constants/navLinks";

import Image from "next/image";
import Link from "next/link";

import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";

import Logo from "../public/assets/images/test-logo.svg";

const ListItem = ({ title, path }: NavbarProps) => {
  return (
    <li>
      <Link href={path} className="text-2xl font-bold">
        {title}
      </Link>
    </li>
  );
};

const SocialLink = ({ title, path, Icon }: SocialLinkProps) => {
  return (
    <li>
      <a
        href={path}
        rel="noopener noreferrer"
        target="_blank"
        aria-label={title}
        className="text-3xl"
      >
        {<Icon />}
      </a>
    </li>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <nav className="col-span-4 flex items-center justify-between p-8 md:col-span-3 md:flex-col md:items-start md:pt-6">
      <Link href="/">
        <Image
          src={Logo}
          alt="John Design"
          className="h-16 w-16 md:h-20 md:w-20"
        />
      </Link>
      <p className="my-7 hidden text-lg md:block">
        John <br />
        Murillo
      </p>

      <button onClick={handleToggle} className="ml-auto md:hidden">
        <MdMenu className="text-3xl" />
      </button>

      <ul className="hidden gap-2 md:flex md:flex-col">
        {navLinks.map(({ title, path }) => (
          <ListItem key={title} title={title} path={path} />
        ))}
      </ul>
      <ul className="hidden md:mt-2 md:flex md:gap-4">
        {socialLinks.map(({ title, path, Icon }) => (
          <SocialLink key={title} title={title} path={path} Icon={Icon} />
        ))}
      </ul>

      {isOpen && (
        <div className="fixed inset-0 z-10 flex flex-col bg-[#212529] px-4 pt-10 md:hidden">
          <button onClick={handleToggle}>
            <MdClose className="ml-auto text-3xl" />
          </button>
          <ul className="mt-20 flex flex-col items-center gap-8">
            {navLinks.map(({ title, path }) => (
              <ListItem key={title} title={title} path={path} />
            ))}
          </ul>
          <ul className="mt-10 flex justify-center gap-8">
            {socialLinks.map(({ title, path, Icon }) => (
              <SocialLink key={title} title={title} path={path} Icon={Icon} />
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
