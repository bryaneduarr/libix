"use client";

import Link from "next/link";

import "@workspace/tailwind/globals.css";

import { ModeToggle } from "@/components/mode-toggle";
import { BookOpen, House, ShoppingCart, UsersRound } from "lucide-react";

export default function Navigation() {
  return (
    <div>
      <nav className="bg-secondary text-foreground fixed left-0 top-0 z-50 w-full p-2 md:p-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl">svg</div>

          <ul className="flex items-center gap-2 text-sm font-bold sm:hidden">
            <li>
              <Link href="/contact" className="flex items-center gap-2">
                <ShoppingCart size={20} />
                Cart
              </Link>
            </li>
            <li className="flex items-center">
              <ModeToggle />
            </li>
          </ul>

          <ul className="hidden items-center space-x-5 text-sm font-bold sm:flex">
            <li>
              <Link href="/" className="flex items-center gap-2">
                <House size={20} />
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="flex items-center gap-2">
                <UsersRound size={20} />
                About
              </Link>
            </li>
            <li>
              <Link href="/products" className="flex items-center gap-2">
                <BookOpen size={20} />
                Products
              </Link>
            </li>
            <li>
              <Link href="/contact" className="flex items-center gap-2">
                <ShoppingCart size={20} />
                Cart
              </Link>
            </li>
            <li className="flex items-center">
              <ModeToggle />
            </li>
          </ul>
        </div>
      </nav>

      {/*Footer navigation*/}
      <div className="rounded-4xl bg-secondary fixed bottom-0 m-1 flex w-full flex-row justify-evenly py-2 md:hidden">
        <button className="Menu_active">
          <Link href="/" className="flex flex-col items-center">
            <House size={20} />
            Home
          </Link>
        </button>
        <button className="flex w-20 flex-col items-center justify-center">
          <Link href="/about" className="flex flex-col items-center">
            <UsersRound size={20} />
            About
          </Link>
        </button>
        <button className="flex w-20 flex-col items-center justify-center">
          <Link href="/products" className="flex flex-col items-center">
            <BookOpen size={20} />
            Products
          </Link>
        </button>
      </div>
    </div>
  );
}
