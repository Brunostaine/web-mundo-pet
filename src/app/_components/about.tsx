"use client";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { CheckCircle2, CircleCheck, MessageSquareText } from "lucide-react";
import Image from "next/image";

export default function About() {

  const data = [
    { text: "Atendimento humanizado e focado no pet" },
    { text: "Profissionais altamente qualificados" },
    { text: "Ambiente seguro, higienizado e moderno" },
    { text: "Amor verdadeiro pelos animais" },
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        // TODO COLOCAR AS IMAGENS
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