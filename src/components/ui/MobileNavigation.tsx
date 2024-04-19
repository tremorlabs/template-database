"use client";

import React from "react";
import Link from "next/link";

import { Button } from "@/components/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/DropdownMenu";
import { RiCloseLine, RiMenuLine } from "@remixicon/react";

export const MobileNavigation = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="group" asChild>
        <Button variant="light" className="aspect-square p-2">
          <RiMenuLine className="size-5 group-data-[state=open]:hidden" />
          <RiCloseLine className="size-5 group-data-[state=closed]:hidden" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[var(--radix-popper-available-width)] rounded-xl p-3 backdrop-blur-nav border-gray-100 bg-white/80 shadow-xl shadow-black/5 max-w-md backdrop-blur-nav"
        align="center"
        sideOffset={20}
      >
        <Link href="/changelog">
          <DropdownMenuItem className="text-lg">Changelog</DropdownMenuItem>
        </Link>
        <Link href="/changelog">
          <DropdownMenuItem className="text-lg">Changelog</DropdownMenuItem>
        </Link>
        <Link href="/changelog">
          <DropdownMenuItem className="text-lg">Changelog</DropdownMenuItem>
        </Link>
        <Link href="/changelog">
          <DropdownMenuItem className="text-lg">Changelog</DropdownMenuItem>
        </Link>
        <Link href="/changelog">
          <DropdownMenuItem className="text-lg">Changelog</DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
