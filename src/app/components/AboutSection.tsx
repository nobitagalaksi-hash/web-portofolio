import { Card, CardContent } from "./ui/card";
import { AwardIcon, RocketIcon, TrophyIcon, UsersIcon } from "lucide-react";

export function AboutSection() {
  const highlights = [
    {
      icon: RocketIcon,
      title: "10+ Proyek",
      description: "Berhasil diselesaikan dengan dampak signifikan",
    },
    {
      icon: UsersIcon,
      title: "200+ Pengguna",
      description: "Dilayani melalui produk digital yang dikelola",
    },
    {
      icon: AwardIcon,
      title: "5+ Sertifikasi",
      description: "Dalam product management dan teknologi",
    },
    {
      icon: TrophyIcon,
      title: "3 Tahun",
      description: "Pengalaman di bidang product management",
    },
  ];

  return (
    <section id="tentang" className="py-20 bg-card/20 backdrop-blur-sm relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Tentang Saya</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Saya adalah seorang Product Manager yang bersemangat dalam menciptakan solusi
              teknologi yang memberikan dampak nyata. Dengan latar belakang yang kuat dalam
              analisis bisnis, pengembangan produk, dan kepemimpinan tim, saya berkomitmen
              untuk menghasilkan produk yang tidak hanya memenuhi kebutuhan pengguna, tetapi
              juga mendorong pertumbuhan bisnis yang berkelanjutan.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <Card key={highlight.title} className="text-center border-2 border-primary/20 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                  <CardContent className="pt-6 space-y-2">
                    <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-to-br from-primary/20 to-cyan-500/20 flex items-center justify-center mb-3">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <h3 className="font-semibold">{highlight.title}</h3>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="mt-12 space-y-6">
            <Card className="border-2 border-primary/20">
              <CardContent className="pt-6">
                <h3 className="font-medium mb-3">Filosofi Kerja</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Saya percaya bahwa produk yang baik dimulai dengan pemahaman mendalam tentang
                  kebutuhan pengguna dan tujuan bisnis. Melalui pendekatan data-driven,
                  kolaborasi tim yang efektif, dan iterasi berkelanjutan, saya memastikan bahwa
                  setiap keputusan produk didasarkan pada insight yang kuat dan memberikan
                  nilai maksimal bagi semua stakeholder.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
