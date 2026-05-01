import { PhoneForwarded } from "lucide-react";
import About from "./_components/about";
import Footer from "./_components/footer";
import Header from "./_components/header";
import Hero from "./_components/hero";
import Services from "./_components/services";
import Testimonials from "./_components/testimonials";


export default function Home() {
  return (
    <main className="relative">
      <Header />
      <section id="inicio">
        <Hero />
      </section>
      <section id="sobre">
        <About />
      </section>
      <section id="servicos">
        <Services />
      </section>
      <section id="depoimentos">
        <Testimonials />
      </section>
      <section id="contato">
        <Footer />
      </section>
      <button
        className="fixed bottom-6 right-6 z-50 bg-emerald-700 p-4 rounded-full text-white shadow-2xl hover:bg-emerald-800 transition-all hover:scale-110 animate-bounce md:animate-none md:hover:animate-pulse"
        aria-label="Contato"
      >
        <PhoneForwarded className="h-6 w-6" />
      </button>
    </main>
  );
}
