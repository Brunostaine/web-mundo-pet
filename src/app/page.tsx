import { PhoneForwarded } from "lucide-react";
import Footer from "./_components/footer";
import { Header } from "./_components/header";
import { Hero } from "./_components/hero";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Footer />

      <button
        className="fixed bottom-6 right-6 z-50 bg-emerald-700 p-4 rounded-full text-white shadow-2xl hover:bg-emerald-800 transition-all hover:scale-110 animate-bounce md:animate-none md:hover:animate-pulse"
        aria-label="Contato"
      >
        <PhoneForwarded className="h-6 w-6" />
      </button>
    </main>
  );
}
