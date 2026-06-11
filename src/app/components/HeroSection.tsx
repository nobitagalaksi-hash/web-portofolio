import { Button } from "./ui/button";
import { DownloadIcon, ArrowRightIcon } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Kolom Kiri - Text Content */}
          <div className="space-y-6 lg:pr-8">
            <div className="space-y-4">
              <p className="text-lg text-primary">Halo, Saya</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight bg-gradient-to-r from-foreground via-primary to-cyan-500 bg-clip-text text-transparent">
                ARYA PUTRA RAHMAN DHIKA
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground">
                Product Manager | Spesialis Manajemen Strategis
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Profesional dengan keahlian dalam manajemen produk digital, analisis SWOT bisnis,
              dan penyelesaian masalah teknis kompleks. Berpengalaman dalam memimpin tim
              multidisiplin untuk menghasilkan solusi inovatif yang berdampak pada pertumbuhan
              bisnis dan kepuasan pengguna.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("portofolio")}
                className="bg-gradient-to-r from-primary to-pink-600 hover:from-primary/90 hover:to-pink-600/90 shadow-lg shadow-primary/30"
              >
                Lihat Portofolio
                <ArrowRightIcon />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary/50 hover:bg-primary/10 hover:border-primary"
              >
                <DownloadIcon />
                Unduh CV
              </Button>
            </div>
          </div>

          {/* Kolom Kanan - Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* 1. Efek Neon Glow Belakang (Diam) */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-500 to-cyan-500 rounded-full blur-3xl opacity-40 animate-pulse"></div>

              {/* 2. Bingkai Gradient Luar (Hanya Ini Yang Berputar) */}
              <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-br from-primary via-purple-500 to-cyan-500 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-card"></div>
              </div>

              {/* 3. Wadah Foto Profil (Diam Stabil di Tengah) */}
              <div className="absolute inset-[6px] rounded-full p-2 bg-card">
                <div className="w-full h-full rounded-full border-4 border-primary/30 overflow-hidden bg-gradient-to-br from-muted to-accent/10">
                  <img 
                    src="/profil.png" 
                    alt="Arya Putra Rahman Dhika" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}