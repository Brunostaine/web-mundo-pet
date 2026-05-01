"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, MessageSquareText } from "lucide-react";
import Image from "next/image";

export default function About() {

  interface AboutItem {
    text: string;
  }

  const data: AboutItem[] = [
    { text: "Atendimento humanizado e focado no pet" },
    { text: "Profissionais altamente qualificados" },
    { text: "Ambiente seguro, higienizado e moderno" },
    { text: "Amor verdadeiro pelos animais" },
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="relative h-64 w-full rounded-3xl overflow-hidden bg-slate-50">
              <Image
                src="/ware.png"
                alt="Mascote Mundo Pet"
                fill
                className="object-contain p-4"

              />
            </div>

            <div className="bg-emerald-900 text-white p-8 rounded-3xl h-40 flex flex-col justify-center">
              <span className="text-3xl font-bold">15+</span>
              <p className="text-xs uppercase tracking-wider opacity-80">Anos de experiência</p>
            </div>
          </div>

          <div className="space-y-4 pt-12">
            <div className="bg-red-50 text-red-900 p-8 rounded-3xl h-32 flex flex-col justify-center">
              <span className="text-3xl font-bold">50k+</span>
              <p className="text-xs uppercase tracking-wider opacity-80">Pets atendidos</p>
            </div>

            <div className="relative h-80 w-full rounded-3xl overflow-hidden">
              <Image
                src="/man.png"
                alt="Veterinário Mundo Pet"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-500">Sobre a Mundo Pet</h4>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Fundada com o propósito de transformar a relação entre pets e seus tutores,
              a Mundo Pet combina tecnologia de ponta com um atendimento humanizado e acolhedor.
              Nossa missão é proporcionar bem-estar integral, tratando cada animal com a
              individualidade e o respeito que eles merecem.
            </p>
          </div>

          <div className="space-y-3">
            {data.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="text-emerald-500 bg-emerald-50 rounded-full" size={20} />
                <p className="text-sm font-medium text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <Button className="bg-emerald-800 hover:bg-emerald-900 text-white rounded-full px-10 py-6 text-lg flex gap-2 w-full md:w-fit">
              Fale Conosco
              <MessageSquareText size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}