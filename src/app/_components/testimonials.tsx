import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Star, User } from "lucide-react";

export default function Testimonials() {

  const data = [
    { text: "loren 1", icon: User, autor: "Mariana Costa", description: "Mãe do Thor (Golden)" },
    { text: "loren 2", icon: User, autor: "Mariana Costa", description: "Mãe do Thor (Golden)" },
    { text: "loren 3", icon: User, autor: "Mariana Costa", description: "Mãe do Thor (Golden)" },

  ]

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

        <div className="grid gap-4">
          {data.map((item) => (
            <Card key={item.text}>
              <CardContent>
                <item.icon />
                <CardTitle>{item.autor}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}