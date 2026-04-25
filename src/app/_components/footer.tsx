import { Clock, Globe, MapPin, MessageCircle, PawPrint, Phone, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 mb-12">

          <div className="space-y-6">
            <div className="flex items-center gap-2 text-emerald-600 font-bold text-2xl">
              <PawPrint className="h-7 w-7" />
              <span>Mundo Pet</span>
            </div>
            <p className="text-slate-600 leading-relaxed max-w-sm">
              Carinho e cuidado profissional para transformar a vida do seu melhor amigo.
              Tecnologia e amor em cada atendimento.
            </p>
            <div className="flex gap-4">
              <div className="p-2 bg-white rounded-full shadow-sm border border-slate-100 text-emerald-600 hover:bg-emerald-50 cursor-pointer transition-colors">
                <Share2 className="h-5 w-5" />
              </div>
              <div className="p-2 bg-white rounded-full shadow-sm border border-slate-100 text-emerald-600 hover:bg-emerald-50 cursor-pointer transition-colors">
                <Globe className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-slate-900 font-bold uppercase tracking-wider text-sm mb-6">
              Links Rápidos
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="/sobre" className="text-slate-600 hover:text-emerald-600 transition-colors">Sobre</a>
              </li>
              <li>
                <a href="/servicos" className="text-slate-600 hover:text-emerald-600 transition-colors">Serviços</a>
              </li>
              <li>
                <a href="/depoimentos" className="text-slate-600 hover:text-emerald-600 transition-colors">Depoimentos</a>
              </li>
              <li>
                <a href="/contato" className="text-slate-600 hover:text-emerald-600 transition-colors">Contato</a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-slate-900 font-bold uppercase tracking-wider text-sm mb-6">
              Contato
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-slate-600">
                <MapPin className="h-5 w-5 text-emerald-600 shrink-0" />
                <span>Av. Paulista, 1234 — Bela Vista, São Paulo - SP</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <Phone className="h-5 w-5 text-emerald-600 shrink-0" />
                <span>(11) 4002-8922</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <MessageCircle className="h-5 w-5 text-emerald-600 shrink-0" />
                <span>(11) 99999-8888 (WhatsApp)</span>
              </div>
              <div className="flex items-start gap-3 text-slate-600">
                <Clock className="h-5 w-5 text-emerald-600 shrink-0" />
                <span>
                  Seg a Sáb: 08:00 - 20:00 <br />
                  Dom: 09:00 - 13:00
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex justify-center items-center gap-4">
          <p className="text-slate-500 text-sm text-center">
            © {new Date().getFullYear()} Mundo Pet — Carinho e Cuidado Profissional. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}