import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Bed, LucideIcon, Scissors, ShoppingBag, Stethoscope, Syringe, Truck } from "lucide-react";

interface ServiceItem {
  id: number;
  title: string;
  text: string;
  icon: LucideIcon;
  color: string;
}

const data: ServiceItem[] = [
  { id: 1, title: "Banho e Tosa", text: "Estética animal com produtos premium e profissionais especializados em todas as raças.", icon: Scissors, color: "bg-blue-50 text-blue-600" },
  { id: 2, title: "Consultas Veterinárias", text: "Atendimento clínico preventivo e especializado para manter a saúde do seu pet em dia.", icon: Stethoscope, color: "bg-green-50 text-green-600" },
  { id: 3, title: "Vacinação", text: "Protocolo vacinal completo com as melhores marcas do mercado para proteção total.", icon: Syringe, color: "bg-red-50 text-red-600" },
  { id: 4, title: "Hotel para Pets", text: "Hospedagem confortável e segura com monitoramento e atividades recreativas.", icon: Bed, color: "bg-blue-50 text-blue-600" },
  { id: 5, title: "Pet Shop Completo", text: "As melhores rações, brinquedos e acessórios para alegrar a rotina do seu amigo.", icon: ShoppingBag, color: "bg-green-50 text-green-600" },
  { id: 6, title: "Entrega de Rações", text: "Delivery rápido e prático para que nunca falte o alimento preferido do seu pet.", icon: Truck, color: "bg-red-50 text-red-600" },
];

export default function Services() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col gap-12">
        <div className="space-y-4">
          <h2 className="text-center  font-bold text-base md:text-2xl">Nossos Serviços</h2>
          <p className="text-center text-slate-600 max-w-2xl mx-auto">Tudo o que seu pet precisa em um só lugar, com o cuidado que só a Mundo Pet oferece.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item) => (
            <Card key={item.id} className="border-none shadow-sm bg-white hover:shadow-md transition-shadow duration-300 rounded-3xl p-4">
              <CardContent className="pt-6 space-y-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.color}`}>
                  <item.icon size={24} />
                </div>
                <div className="space-y-2">
                  <CardTitle className="text-lg font-bold text-slate-800">{item.title}</CardTitle>
                  <CardDescription className="text-slate-500 leading-relaxed text-sm md:text-base">{item.text}</CardDescription>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}