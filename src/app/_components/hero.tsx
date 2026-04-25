"use client";

import { Button } from "@/components/ui/button";
import { CalendarDays, Heart, PlusSquare } from "lucide-react";
import Link from "next/link";

import {
  Card,
  CardContent
} from "@/components/ui/card";
import Image from "next/image";



export function Hero() {
  return (
    <section
      className="container mx-auto px-4 min-h-[calc(100vh-80px)] flex items-center "
    >
      <div className="grid items-center gap-12 lg:grid-cols-2 w-full">

        <div className="space-y-6">

          <div className="flex justify-center lg:justify-start">
            <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 rounded-full px-4 py-1.5">
              <Heart size={14} />
              <p className="text-sm font-medium">
                Carinho em cada detalhe
              </p>
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-center lg:text-left">
            Cuidado completo para o seu{" "}
            <span className="text-emerald-600">
              melhor amigo
            </span>
          </h1>

          <p className="text-muted-foreground text-base text-center lg:text-left">
            Oferecemos serviços veterinários de alta qualidade,
            banho e tosa profissional e uma curadoria exclusiva
            de produtos para garantir a felicidade e saúde do seu pet.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              asChild
              className="rounded-full bg-emerald-600 text-white shadow-md px-6 py-3 hover:!bg-emerald-700"
            >
              <Link href="#agendamento" className="flex items-center gap-2">
                Agendar Atendimento
                <CalendarDays className="h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="rounded-full border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6 py-3"
            >
              <Link href="#servicos">
                Conheça nossos serviços
              </Link>
            </Button>
          </div>
        </div>


        <div className="relative w-full h-[420px] md:h-[520px] flex items-center justify-center">
          <div className="absolute inset-0 bg-emerald-500/10 blur-3xl rounded-3xl scale-95" />

          <div className="relative w-full h-full transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <Card className="relative h-full w-full overflow-hidden border-0 rounded-[40px] shadow-2xl">
              <CardContent className="relative p-0 h-full w-full">
                <Image
                  src="/dogs.png"
                  alt="Pet feliz e saudável atendido pela Mundo Pet"
                  fill
                  priority

                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
              </CardContent>
            </Card>
          </div>

          <div className="absolute bottom-4 left-4 md:-bottom-6 md:-left-6 animate-bounce shadow-xl z-10">
            <div className="bg-white p-3 md:p-4 rounded-2xl flex items-center gap-3 md:gap-4 border border-emerald-100">
              <div className="bg-red-50 p-2 md:p-3 rounded-xl">
                <PlusSquare className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
              </div>
              <div>
                <p className="font-bold text-slate-800 text-xs md:text-base">Clínica 24h</p>
                <p className="text-[10px] md:text-xs text-slate-500 whitespace-nowrap">Sempre prontos para ajudar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}