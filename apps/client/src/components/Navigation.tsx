"use client";

import React, { useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { BookOpen, House, Menu, ShoppingCart, UsersRound } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div>
      <nav className="bg-secondary text-foreground fixed left-0 top-0 z-50 w-full p-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl">svg</div>

          <div className="flex items-center space-x-4 sm:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <Menu size={24} />
            </button>

            <ModeToggle />
          </div>

          <ul className="hidden items-center space-x-5 text-sm font-bold sm:flex">
            <li>
              <a href="/" className="flex items-center gap-2">
                <House size={20} />
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="flex items-center gap-2">
                <UsersRound size={20} />
                About
              </a>
            </li>
            <li>
              <a href="/products" className="flex items-center gap-2">
                <BookOpen size={20} />
                Products
              </a>
            </li>
            <li>
              <a href="/contact" className="flex items-center gap-2">
                <ShoppingCart size={20} />
                Cart
              </a>
            </li>
            <li className="flex items-center">
              <ModeToggle />
            </li>
          </ul>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="text-foreground bg-secondary fixed left-2/3 top-6 z-50 mt-12 w-40 rounded-bl-lg sm:hidden">
          <ul className="flex flex-col justify-center space-y-3 text-sm font-bold md:hidden">
            <li>
              <a href="/" className="flex items-center gap-2">
                <House size={20} />
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="flex items-center">
                <UsersRound size={20} />
                About
              </a>
            </li>
            <li>
              <a href="/products" className="flex items-center">
                <BookOpen size={20} />
                Products
              </a>
            </li>
            <li>
              <a href="/contact" className="flex items-center">
                <ShoppingCart size={20} />
                Cart
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
