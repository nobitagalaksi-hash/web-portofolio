import { useState } from "react";
import { Achievement, Category } from "../types";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Label } from "./ui/label";

interface AchievementFormProps {
  onSubmit: (achievement: Omit<Achievement, "id">) => void;
  initialData?: Achievement;
  onCancel?: () => void;
}

export function AchievementForm({ onSubmit, initialData, onCancel }: AchievementFormProps) {
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    category: initialData?.category || ("Pengalaman" as Exclude<Category, "Semua">),
    date: initialData?.date || "",
    description: initialData?.description || "",
    image: initialData?.image || "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    if (!initialData) {
      setFormData({
        title: "",
        category: "Pengalaman",
        date: "",
        description: "",
        image: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title">Judul</Label>
        <Input
          id="title"
          placeholder="Masukkan judul prestasi"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="category">Kategori</Label>
        <Select
          value={formData.category}
          onValueChange={(value) =>
            setFormData({ ...formData, category: value as Exclude<Category, "Semua"> })
          }
        >
          <SelectTrigger id="category">
            <SelectValue placeholder="Pilih kategori" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Pengalaman">Pengalaman</SelectItem>
            <SelectItem value="Kepanitiaan">Kepanitiaan</SelectItem>
            <SelectItem value="Organisasi">Organisasi</SelectItem>
            <SelectItem value="Pendidikan">Pendidikan</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="date">Tanggal</Label>
        <Input
          id="date"
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="image">URL Gambar (Opsional)</Label>
        <Input
          id="image"
          type="url"
          placeholder="https://example.com/image.jpg"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Deskripsi Detail</Label>
        <Textarea
          id="description"
          placeholder="Deskripsikan prestasi Anda secara detail..."
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="min-h-32"
          required
        />
      </div>

      <div className="flex gap-2 pt-4">
        <Button
          type="submit"
          className="flex-1 bg-gradient-to-r from-primary to-pink-600 hover:from-primary/90 hover:to-pink-600/90 shadow-lg shadow-primary/30"
        >
          {initialData ? "Update" : "Tambah"} Prestasi
        </Button>
        {onCancel && (
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            className="border-2 border-primary/50 hover:bg-primary/10"
          >
            Batal
          </Button>
        )}
      </div>
    </form>
  );
}
