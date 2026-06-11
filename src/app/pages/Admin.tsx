import { useState } from "react";
import { Link } from "react-router";
import { useAchievements } from "../contexts/AchievementContext";
import { Achievement } from "../types";
import { AchievementForm } from "../components/AchievementForm";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import {
  PlusIcon,
  PencilIcon,
  TrashIcon,
  LayoutGridIcon,
  LayoutDashboardIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export function Admin() {
  const { achievements, addAchievement, updateAchievement, deleteAchievement } = useAchievements();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingAchievement, setEditingAchievement] = useState<Achievement | null>(null);

  const handleAdd = (achievement: Omit<Achievement, "id">) => {
    addAchievement(achievement);
    setIsAddDialogOpen(false);
  };

  const handleUpdate = (achievement: Omit<Achievement, "id">) => {
    if (editingAchievement) {
      updateAchievement(editingAchievement.id, achievement);
      setEditingAchievement(null);
    }
  };

  const handleDelete = (id: string) => {
    if (confirm("Apakah Anda yakin ingin menghapus prestasi ini?")) {
      deleteAchievement(id);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Cosmic Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1f] via-[#1a0f3d] to-[#0a0a1f]"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="border-b border-primary/20 bg-card/50 backdrop-blur-md shadow-lg shadow-primary/5">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-cyan-500/20 flex items-center justify-center">
                <LayoutDashboardIcon className="size-5 text-primary" />
              </div>
              <h1>Admin Dashboard</h1>
            </div>
            <Button variant="outline" className="border-2 border-primary/50 hover:bg-primary/10" asChild>
              <Link to="/">
                <LayoutGridIcon />
                Lihat Portfolio
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm text-muted-foreground">Total Prestasi</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
                  {achievements.length}
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm text-muted-foreground">Pengalaman</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  {achievements.filter((a) => a.category === "Pengalaman").length}
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm text-muted-foreground">Kepanitiaan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {achievements.filter((a) => a.category === "Kepanitiaan").length}
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm text-muted-foreground">Organisasi</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-primary bg-clip-text text-transparent">
                  {achievements.filter((a) => a.category === "Organisasi").length}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Daftar Prestasi</CardTitle>
                <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-gradient-to-r from-primary to-pink-600 hover:from-primary/90 hover:to-pink-600/90 shadow-lg shadow-primary/30">
                      <PlusIcon />
                      Tambah Prestasi Baru
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Tambah Prestasi Baru</DialogTitle>
                      <DialogDescription>
                        Isi formulir di bawah untuk menambahkan prestasi baru ke portfolio Anda.
                      </DialogDescription>
                    </DialogHeader>
                    <AchievementForm onSubmit={handleAdd} />
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Judul</TableHead>
                    <TableHead>Kategori</TableHead>
                    <TableHead>Tanggal</TableHead>
                    <TableHead className="text-right">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {achievements.map((achievement) => (
                    <TableRow key={achievement.id}>
                      <TableCell className="max-w-md">
                        <div className="font-medium line-clamp-1">{achievement.title}</div>
                        <div className="text-sm text-muted-foreground line-clamp-1 mt-1">
                          {achievement.description}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">{achievement.category}</Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {formatDate(achievement.date)}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex gap-2 justify-end">
                          <Dialog
                            open={editingAchievement?.id === achievement.id}
                            onOpenChange={(open) => {
                              if (!open) setEditingAchievement(null);
                            }}
                          >
                            <DialogTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setEditingAchievement(achievement)}
                              >
                                <PencilIcon className="size-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                              <DialogHeader>
                                <DialogTitle>Edit Prestasi</DialogTitle>
                                <DialogDescription>
                                  Perbarui informasi prestasi Anda.
                                </DialogDescription>
                              </DialogHeader>
                              <AchievementForm
                                onSubmit={handleUpdate}
                                initialData={achievement}
                                onCancel={() => setEditingAchievement(null)}
                              />
                            </DialogContent>
                          </Dialog>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDelete(achievement.id)}
                          >
                            <TrashIcon className="size-4 text-destructive" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {achievements.length === 0 && (
                <div className="text-center py-16 text-muted-foreground">
                  Belum ada prestasi. Klik tombol "Tambah Prestasi Baru" untuk memulai.
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
