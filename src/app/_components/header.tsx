"use client";

import { Button } from "@/components/ui/button";
import { PawPrint } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navigationItems = [
    { name: "Início", href: "/" },
    { name: "Sobre", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Contato", href: "#contato" },
  ]
  return (
    <header className="relative flex items-center justify-between p-4">

      <div className="flex items-center gap-2 text-emerald-600 font-bold text-xl">
        <PawPrint className="h-6 w-6" />
        <span>Mundo Pet</span>
      </div>

      <NavigationMenu className="hidden md:flex absolute left-1/2 -translate-x-1/2">
        <NavigationMenuList>

          {navigationItems.map((link) => {
            const isActive = pathname === link.href

            return (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink asChild>
                  <Link
                    href={link.href}
                    className={`
                    text-sm font-medium transition-colors
                    ${isActive
                        ? "text-emerald-600"
                        : "text-muted-foreground hover:text-emerald-600"
                      }
                    `}
                  >{link.name}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            )
          })}
        </NavigationMenuList>
      </NavigationMenu>

      <Button
        onClick={() => setOpen(!open)}
        className="md:hidden rounded-full bg-emerald-500 text-white hover:bg-emerald-600"
      >Menu
      </Button>

      {open && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md border-t md:hidden">
          <nav className="flex flex-col p-4 gap-4">

            {navigationItems.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`
                    text-base font-medium transition-colors
                    ${isActive
                      ? "text-emerald-600"
                      : "text-muted-foreground hover:text-emerald-600"}
                  `}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header >
  );
}