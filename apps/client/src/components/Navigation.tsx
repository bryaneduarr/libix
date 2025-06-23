"use client";

import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { BookOpen, House, Menu, ShoppingCart, UsersRound } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";

export default function Navigation() {
  return (
    <div>
      <nav className="bg-secondary text-foreground fixed left-0 top-0 z-50 w-full p-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl">svg</div>

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

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 sm:hidden">
            <ModeToggle />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="p-2">
                  <Menu size={24} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuItem>
                  <Link href="/" className="flex items-center gap-2">
                    <House size={10} />
                    Home
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/about" className="flex items-center gap-2">
                    <UsersRound size={10} /> About
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/products" className="flex items-center gap-2">
                    <BookOpen size={10} /> Products
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/#" className="flex items-center gap-2">
                    <ShoppingCart size={10} />
                    Cart
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
    </div>
  );
}
