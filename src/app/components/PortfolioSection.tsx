import { useState } from "react";
import { useAchievements } from "../contexts/AchievementContext";
import { Category } from "../types";
import { PortfolioCard } from "./PortfolioCard";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

export function PortfolioSection() {
  const { achievements } = useAchievements();
  const [selectedCategory, setSelectedCategory] = useState<Category>("Semua");

  const categories: Category[] = ["Semua", "Pengalaman", "Kepanitiaan", "Organisasi", "Pendidikan"];

  const filteredAchievements =
    selectedCategory === "Semua"
      ? achievements
      : achievements.filter((achievement) => achievement.category === selectedCategory);

  return (
    <section id="portofolio" className="py-20 bg-card/20 backdrop-blur-sm relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">Perjalanan & Pencapaian Saya</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Eksplorasi berbagai proyek, pengalaman, dan kontribusi yang telah saya lakukan
            dalam pengembangan produk, kepemimpinan, dan inovasi teknologi.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <Tabs value={selectedCategory} onValueChange={(value) => setSelectedCategory(value as Category)}>
            <div className="flex justify-center">
              <TabsList className="inline-flex">
                {categories.map((category) => (
                  <TabsTrigger key={category} value={category}>
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </Tabs>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredAchievements.map((achievement) => (
            <PortfolioCard key={achievement.id} achievement={achievement} />
          ))}
        </div>

        {filteredAchievements.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">
              Tidak ada pencapaian dalam kategori ini.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
