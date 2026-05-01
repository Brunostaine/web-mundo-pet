import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {

  const data = [
    {
      id: 1,
      quote: '"O atendimento é impecável. Levei o Thor para o banho e tosa e ele voltou super calmo e cheiroso. Recomendo demais!"',
      autor: "Mariana Costa",
      description: "Mãe do Thor (Golden)",
      avatarUrl: "https://www.piclumen.com/wp-content/uploads/2024/12/ai-avatar-maker-businesswoman.webp",
      quoteBgColor: "bg-emerald-600",
    },
    {
      id: 2,
      quote: '"Os veterinários são muito atenciosos. Explicam tudo com calma e cuidaram da Luna como se fosse deles. Melhor clínica!"',
      autor: "Ricardo Silva",
      description: "Pai da Luna (Persa)",
      avatarUrl: "https://www.piclumen.com/wp-content/uploads/2024/12/ai-avatar-maker-businesswoman.webp",
      quoteBgColor: "bg-sky-600",
    },
    {
      id: 3,
      quote: '"Sempre encontro tudo o que preciso no pet shop. O sistema de entrega de ração é super rápido e me ajuda muito no dia a dia."',
      autor: "Beatriz Oliveira",
      description: "Mãe do Pipoca (SRD)",
      avatarUrl: "https://www.piclumen.com/wp-content/uploads/2024/12/ai-avatar-maker-businesswoman.webp",
      quoteBgColor: "bg-red-800",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-8">
        <h2 className="text-center font-bold text-base md:text-2xl">
          O que nossos clientes dizem
        </h2>

        <div className="flex justify-center gap-2">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {data.map((item) => (
            <Card key={item.id} className="relative border-none shadow-none bg-white rounded-[2rem] p-8">
              <div className={`absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center ${item.quoteBgColor}`}>
                <Quote size={20} className="fill-white text-white rotate-180" />
              </div>
              <CardContent className="space-y-8 p-0">
                <CardDescription className="text-slate-800 text-lg leading-relaxed pt-2">
                  {item.quote}
                </CardDescription>

                <div className="flex items-center gap-4 pt-2">
                  <Avatar className="w-16 h-16 border-none">
                    <AvatarImage src={item.avatarUrl} alt={item.autor} className="object-cover" />
                    <AvatarFallback>{item.autor.substring(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>

                  <div className="space-y-1">
                    <CardTitle className="text-xl font-bold text-slate-950">{item.autor}</CardTitle>
                    <p className="text-emerald-700 font-medium text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}