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
      avatarUrl: "https://cdn.prod.website-files.com/65e89895c5a4b8d764c0d70e/689f347e2a3cc7bfc1997f62_Ryan-5.jpg",
      quoteBgColor: "bg-sky-600",
    },
    {
      id: 3,
      quote: '"Sempre encontro tudo o que preciso no pet shop. O sistema de entrega de ração é super rápido e me ajuda muito no dia a dia."',
      autor: "Beatriz Oliveira",
      description: "Mãe do Pipoca (SRD)",
      avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8rOrebINuZRnifHthny_mzgx2AWulG7INfw&s",
      quoteBgColor: "bg-red-800",
    },
  ];

  return (
    <section className="mx-auto px-4 py-16 bg-[#F1F3EE]/60 ">
      <div className="flex flex-col gap-12 items-center">

        <div className="space-y-6 text-center">

          <h2 className="font-bold text-2xl md:text-3xl text-slate-950">
            O que nossos clientes dizem
          </h2>

          <div className="flex justify-center gap-1.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} className="fill-green-800 text-green-800" />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {data.map((item) => (
            <Card key={item.id} className="relative border-none shadow-none bg-white rounded-[2rem] p-8 overflow-visible">
              <div className={`absolute -top-4 -right-2 w-12 h-12 rounded-full flex items-center justify-center z-10 ${item.quoteBgColor}`}>
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