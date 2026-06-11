export type Category = "Semua" | "Pengalaman" | "Kepanitiaan" | "Organisasi" | "Pendidikan";

export interface Achievement {
  id: string;
  title: string;
  category: Exclude<Category, "Semua">;
  date: string;
  description: string;
  image?: string;
}
