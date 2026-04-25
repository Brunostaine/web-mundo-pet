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

export function Header() {
  return (
    <header className="relative flex items-center justify-between p-4">

      <div className="flex items-center gap-2 text-emerald-600 font-bold text-xl">
        <PawPrint className="h-6 w-6" />
        <span>Mundo Pet</span>
      </div>

      <NavigationMenu className="hidden md:flex absolute left-1/2 -translate-x-1/2">
        <NavigationMenuList className="gap-6">

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/">Início</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="#sobre">Sobre</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="#servicos">Serviços</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="#depoimentos">Depoimentos</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="#contato">Contato</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>

      <div className="">
        <Button className="w-[140px] rounded-full bg-emerald-500 text-base font-medium text-white shadow-md hover:bg-emerald-600">
          Menu
        </Button>
      </div>
    </header>
  );
}